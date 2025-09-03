import "./share-input.js"

export class ShareSection extends El {
    render(html) {
        console.log(html`${this.aside}`)
        this.prompt = this.prompt ? html`Date  :<br />Wallet:` : undefined
        this.footer ??= location.hostname

        return html`
            <section class="column">
                <header>
                    <h4>${this.header}</h4>
                </header>
                <hr />
                <share-input words=${this.words}></share-input>
                <footer>${this.footer}</footer>
            </section>
        `
    }

    styles(css) {
        return css`
            :host > section {
                position: relative;
                height: 100%;
                padding: 1em;

                border: 1px dashed black;
                border-radius: 0.35em;

                font-family: var(--monospace);
            }

            hr {
                position: absolute;
                width: 80%;
                border-top: 1px solid lightgray;
            }

            header,
            footer {
                height: 6em;
                display: flex;
                align-items: center;
            }

            footer {
                font-style: italic;
                padding-top: 0.4em;
            }
        `
    }
}
customElements.define("share-section", ShareSection)
