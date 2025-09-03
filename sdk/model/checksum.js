export class Checksum {
    constructor(field) {
        this.field = field
        this.weight1 = [14, 2, 11, 15]
        this.weight2 = [6, 20, 12, 22]
    }

    sum(values) {
        const sum1 = values.reduce((prev, next, i) => {
            return (prev + ((next * this.weight1[i]) % 29)) % 29
        }, 0)

        const sum2 = values.reduce((prev, next, i) => {
            return (prev + ((next * this.weight2[i]) % 29)) % 29
        }, 0)

        return [sum1, sum2]
    }
}
