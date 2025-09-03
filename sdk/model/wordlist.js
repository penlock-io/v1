export class Wordlist {
    constructor({ checksum, charset, words, offset = 0 }) {
        this.charset = charset
        this.words = words.map((word) => word.toUpperCase().padEnd(4, "-"))
        this.offset = offset
        this.checksum = checksum

        if (this.checksum) {
            this.applyChecksum()
        }
    }

    cut(length) {
        const chunks = []
        for (let offset = 0; offset < this.words.length; offset += length) {
            const words = this.words.slice(offset, offset + length)
            const chunk = new Wordlist({ words, offset, hash: this.hash })
            chunks.push(chunk)
        }
        return chunks
    }

    iterate(callback) {
        return this.words.map((word, i) => {
            const tiles = integerToTiles(this.offset + i)
            return callback(word, tiles, i)
        })
    }

    applyChecksum() {
        this.words = this.words.map((word) => {
            const values = Array.from(word.slice(0, 4)).map((char) =>
                this.charset.decode(char),
            )
            const sum = this.checksum
                .sum(values)
                .map((x) => this.charset.encode(x))
                .join("")

            return `${sum}${word}`
        })
    }

    correctionGrid() {
        const grid = new Array(29).fill(0).map(() => {
            return new Array(29).fill(0).map(() => [])
        })

        this.words.forEach((word) => {
            const x = this.charset.decode(word[0])
            const y = this.charset.decode(word[1])

            grid[x][y].push(word)
        })

        return grid
    }
}

/* Helpers */

function integerToTiles(n) {
    const bit = n % 2 ? "•" : "◦"
    const second = Math.trunc((n % 64) / 2) + 1
    const first = Math.trunc(n / 64) + 1

    return `${String(first).padStart(2)}-${String(second).padStart(2)}${bit}`
}
