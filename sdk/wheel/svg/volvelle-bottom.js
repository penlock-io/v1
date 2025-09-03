import { WheelUtils } from "./wheel-utils.js"

import { sizing } from "./sizing.js"

export class VolvelleBottom extends WheelUtils {
    instructions() {
        this.sizing = sizing.volvelleBottom()

        this.name(this.sizing, this.table)
        this.header(this.sizing, this.table)
        this.data(this.sizing, this.table)
        this.delimiters(this.sizing)
    }

    name({ outer }, { name }) {
        // FIXME: should be the current domain?
        name = "v1.penlock.io"
        this.forAngle(5, 0, (rotation) => {
            this.text(name, 0, -outer / 2 + 0.425)
                .attr({ "font-size": "60%" })
                .rotate(rotation, 0, 0)
        })
    }

    header({ outer, inner, heading }, { xs }) {
        this.charCircle(xs, (outer + inner) / 4 - 0.3, -0.2, {
            "font-size": heading,
            "letter-spacing": -0.2,
        })
    }

    data(_, { matrix }) {
        const matrix2 = matrix.map((a) => a.slice())
        matrix2[0].forEach((_, i) => {
            matrix2[i][0] = ""
        })
        this.charSpiral(matrix2)

        this.charSpiral(
            matrix.map((x) => x.slice(0, 1)),
            {
                "font-size": "80%",
                "font-weight": "bold",
                transform: "translate(-0.28, 0.025)",
            },
        )
        this.charSpiral(
            matrix.map((x) => ["x3"]),
            {
                "font-size": "60%",
                "font-weight": "bold",
                "letter-spacing": -0.1,
                transform: "translate(0.18, 0.1)",
            },
        )
    }

    delimiters({ outer, inner, window }) {
        this.circle(outer)
        this.circle(inner)
        // this.cross(0.6, { color: "black", width: 0.1 })
        // this.rectangle(0, 0, window / 2, window / 2, {
        //     stroke: "black",
        //     "stroke-width": 0.1,
        //     fill: "transparent",
        // }).rotate(45)
        this.circle(window / 2, {
            stroke: "white",
            "stroke-width": 0.1,
        })
    }
}

customElements.define("volvelle-bottom", VolvelleBottom)
