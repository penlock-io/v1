class TableTable extends El {
    render(html) {
        return html`
            <table>
                <thead>
                    <th></th>
                    ${this.header(html)}
                </thead>

                <tbody>
                    ${this.rows(html)}
                </tbody>
            </table>
        `
    }

    header(html) {
        return this.table.xs.map((char) => html`<th>${char}</th>`)
    }

    rows(html) {
        return this.table.ys.map((char, i) => {
            const content = this.cells(html, this.table.matrix[i])
            return html`<tr>
                <th>${char}</th>
                ${content}
            </tr>`
        })
    }

    cells(html, values) {
        return values.map((result) => {
            return html`<td>${result}</td>`
        })
    }

    mounted() {
        // Sizing
        this.style.fontSize = `${this.scale ?? 100}%`
    }

    styles(css) {
        return css`
            table {
                font-family: monospace;
                border: 1px solid black;
                border-collapse: collapse;
                width: 100%;
            }

            td,
            th {
                min-width: 1.4em;

                padding: 0.1em;

                text-align: center;
                line-height: 1.2em;
                letter-spacing: -0.15em;
            }

            /* Grid */

            thead {
                border-bottom: 1px solid;
            }

            tr th:nth-child(1) {
                border-right: 1px solid;
            }

            /* Reading Helpers */

            tr {
                &:nth-child(3n) {
                    border-top: 1px solid;
                }

                :nth-child(6n-2),
                :nth-child(6n-1),
                :nth-child(6n) {
                    background: #ddd;
                }
            }
        `
    }
}

customElements.define("table-table", TableTable)
