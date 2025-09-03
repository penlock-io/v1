import "./table-table.js"

class TableSheet extends El {
    render(html) {
        const table = globalThis.codex[this.table]
        return html`
            <section class="sheet flex-column">
                <h3>Table: ${table.name}</h3>
                <table-table table=${table} scale="120"></table-table>

                <aside>
                    This table gives the same results as the "${table.name}"
                    wheel. If possible, we recommend to use the wheel instead.
                </aside>
            </section>
        `
    }

    styles(css) {
        return css`
            .flex-column {
                justify-content: space-evenly;
            }

            h3 {
                text-transform: capitalize;
            }
        `
    }
}

customElements.define("table-sheet", TableSheet)
