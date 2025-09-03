import "./share-input.js"

export class ShareFrontSection extends El {
    render(html) {
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
            :host {
                display: flex;
                align-items: center;
            }

            :host > section {
                position: relative;
                justify-content: space-evenly;
                padding: 1em;

                border: 1px dashed black;
                border-radius: 0.35em;

                font-family: var(--monospace);
            }

            hr {
                position: absolute;
                width: 80%;
                border: none;
                border-top: 1px dotted lightgray;
            }

            header,
            footer {
                height: 4.5em;
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
customElements.define("share-front-section", ShareFrontSection)
