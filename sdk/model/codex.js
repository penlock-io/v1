import { Charset } from "./charset.js"
import { Checksum } from "./checksum.js"
import { Field } from "./field.js"
import { Table } from "./table.js"
import { Wordlist } from "./wordlist.js"

export class Codex {
    constructor(params) {
        this.field = new Field(params.galois)
        this.secret = params.secret
        this.wheels = params.wheels

        this.altset = new Charset(params.altset)
        this.charset = new Charset(params.charset)

        // Tiles TODO: make this a namespace
        {
            const extra = params.extraTiles ?? []
            this.tiles = [...this.altset.keys(), ...extra]
            this.tilesHints = params.hintTiles ?? []
        }

        // Translate Table
        this.translate = new Table({
            name: "translate",
            charset: this.charset,
            ys: this.altset,
            operation: this.field.mul.bind(this.field),
        })
        // Translate Slide Rule (TODO: generalize)
        this.translate.inputs = this.translate.matrix[0]
        this.translate.outputs = this.translate.inputs

        // TODO: rewrite the last line of the matrix with inverse divisors.
        this.charset.forEach((i, char) => {
            this.translate.matrix[i][0] = `${char}`
        })

        this.exponents = new Table({
            name: "exponents",
            charset: this.charset,
            operation: this.field.exp.bind(this.field),
        })

        /* Worldlist */
        this.wordlist = new Wordlist({
            checksum: new Checksum(this.field),
            charset: this.charset,
            words: params.wordlist,
        })
    }
}
