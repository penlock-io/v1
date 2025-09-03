import { WheelUtils } from "./wheel-utils.js"
import { sizing } from "./sizing.js"

export class VolvelleTop extends WheelUtils {
    instructions() {
        this.sizing = sizing.volvelleTop()

        this.pointer(this.sizing, this.table)
        this.background(this.sizing, this.table)
        this.combination(this.sizing, this.table)
        this.data(this.sizing, this.table)
        this.delimiters(this.sizing)

        // DEV: to verify alignment
        // this.header(this.sizing, this.table)
        // this.bottom(this.table)
    }

    header({ outer, inner, heading }, { xs }) {
        this.charCircle(xs, (outer + inner) / 4 - 0.3, -0.2, {
            "font-size": heading,
            "letter-spacing": -0.2,
        })
    }

    bottom({ matrix }) {
        // this.charSpiral(
        //     matrix.map((x) => x.slice(0, 1)),
        //     {
        //         transform: "translate(0, 0.05)",
        //         // "font-size": "80%",
        //         // "letter-spacing": -0.1,
        //         // transform: "translate(-0.05)",
        //     },
        // )
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

    /* Components */

    pointer({ header, inner }, { pointer = "▼" }) {
        this.rectangle(0, -inner / 2, header * 1.2, header * 2.4, {
            fill: "lightgray",
        }).radius(0.8)
        this.rectangle(0, -inner / 2 - 1, 1.6, 1.8, {})

        this.text(pointer, 0, 0, {
            x: 0,
            y: -inner / 2 - (header * 2.2) / 3,
            "font-size": 2.6,
        })
    }

    combination({ inner }, { xs }) {
        // const arrows = Array(xs.length).fill("▲")
        // this.charCircle(arrows, (inner + 0.3) / 2, 0, {
        //     fill: "white",
        //     "fill-opacity": 0.66,
        //     "font-size": 4,
        // })
        //
        // this.charCircle(xs, (inner - 1.5) / 2, 0, {
        //     "font-size": 1,
        //     "font-weight": 500,
        // })
        const arrows = Array(xs.length).fill("▲")
        this.charCircle(arrows, (inner + 0.3) / 2, 0, {
            fill: "white",
            "fill-opacity": 0.66,
            "font-size": 4.5,
        })

        this.charCircle(xs, (inner - 2) / 2, 0, {
            "font-size": 1,
            "font-weight": 500,
        })
    }

    delimiters({ inner, window }) {
        this.circle(inner)
        // this.cross(0.6, { color: "white", width: 0.1 })
        // this.rectangle(0, 0, window / 2, window / 2, {
        //     stroke: "white",
        //     "stroke-width": 0.1,
        //     fill: "transparent",
        // }).rotate(45)
        this.circle(window / 2, {
            stroke: "white",
            "stroke-width": 0.1,
        })
    }

    data(sizing, { ys }) {
        this.forSpiral(ys.length, (x, y, i) => {
            this.label(sizing, x, y, ys[i])
        })
        this.forSpiral(ys.length, (x, y) => {
            this.window(sizing, x, y)
        })
    }

    label({ window }, x, y, char) {
        this.rectangle(x - window - 0.2, y, 1.6, window + 0.05, {
            "fill-opacity": 0.66,
        })
        // this.text(`${char}→`, x - 1.95, y)
        this.text(`${char}`, x - 1.8, y + 0.05, {
            "letter-spacing": -0.1,
        })
        this.text("→", x - 1, y - 0.05)
    }

    window({ window }, x, y) {
        // Draw
        this.rectangle(x, y, window, window, {
            stroke: "black",
            "stroke-width": "0.05px",
        })
    }
}

customElements.define("volvelle-top", VolvelleTop)
