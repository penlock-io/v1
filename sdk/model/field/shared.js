export class Shared {
    /* Lagrange */
    constructor(params) {
        const { prime, degree } = params
        this.prime = prime
        this.degree = degree
        this.size = prime ** degree
    }

    // Lagrange polynomial basis
    basis(derived, translated, ...others) {
        return others.reduce((product, other) => {
            const numerator = this.sub(derived, other)
            const denominator = this.sub(translated, other)
            return this.mul(product, this.div(numerator, denominator))
        }, 1)
    }

    // TODO: use tables for everything (addition, multiplication, etc.) and
    // have all the operations here, consuming these tables.
    /* Primitives */

    pow(a, b) {
        if (b == 0) return 1
        if (b == 1) return a

        let result = a
        while (b > 1) {
            result = this.mul(result, a)
            b--
        }
        return result
    }

    /* Primitives */
    sub(a, b) {
        return this.add(a, this.minus(b))
    }

    div(a, b) {
        return this.mul(a, this.inv(b))
    }
}
