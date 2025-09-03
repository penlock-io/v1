export class Charset extends Map {
    // TODO: keep this? (it's for the search thing)
    shuffle() {
        const entries = Array.from(this.entries()).slice(1)
        console.log({ entries })

        // Fisher-Yates Shuffle
        let current = entries.length
        while (current != 0) {
            const random = Math.floor(Math.random() * current)
            current--
            // console.log({ current }, entries[current][1], entries[random][1])
            ;[entries[current][1], entries[random][1]] = [
                entries[random][1],
                entries[current][1],
            ]
        }
        console.log({ entries })

        return new Charset([["=", 0], ...entries])
    }

    matrix(operation) {
        return [...this.values()].map((x) => {
            return [...this.values()].map((y) => {
                const result = operation(x, y)
                return this.encode(result)
            })
        })
    }

    ingest(values) {
        Array.from(this.entries()).forEach(([char], i) => {
            this.set(char, values[i])
        })
    }

    slice(start, end) {
        const entries = Array.from(this).slice(start, end)
        return new Charset(entries)
    }

    without(value) {
        const map = new Charset(this)
        const char = map.encode(value)
        map.delete(char)
        return map
    }

    encode(result) {
        for (const [char, value] of this) {
            if (value == result) return char
        }
    }

    decode(char) {
        return this.get(char)
    }
}
