import { GaloisP } from "./field/galois-p.js"
import { GaloisPN } from "./field/galois-pn.js"

export class Field {
    constructor(params) {
        if (params.degree == 1) {
            return new GaloisP(params)
        } else {
            return new GaloisPN(params)
        }
    }
}
