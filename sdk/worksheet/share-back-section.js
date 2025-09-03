export class ShareBackSection extends El {
    render(html) {
        return html`
            <section class="column">
                <header class="column">
                    <section>Date: ___/___/___</section>
                    <section>Wallet:</section>
                    <section>Owner:</section>
                </header>
                <footer class="column">
                    <h3>Recovery</h3>
                    <img src="./recovery-qr.svg" />
                    <span>v1.penlock.io/recover</span>
                </footer>
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
                height: 100%;
                max-width: 13.9em;

                padding: 2.5em 0;
                justify-content: space-evenly;

                font-family: var(--monospace);
            }

            :host > section > * {
                justify-content: space-evenly !important;
                height: 50%;
                max-height: 30em;
                padding: 1.25em 2.5em;
            }

            header {
                font-size: 0.8em;
            }

            header > section {
                width: 100%;

                border: 1px dotted black;
                border-radius: 0.35em;
                padding: 0.8em;
            }

            header > :not(:first-child) {
                height: 7em;
            }

            footer {
                font-size: 0.8em;
            }

            footer img {
                max-width: 100%;
                border: 1px dotted black;
                border-radius: 0.35em;
                padding: 1.4em;
            }
        `
    }
}
customElements.define("share-back-section", ShareBackSection)
