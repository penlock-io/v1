export class PenlockDonate extends El {
    render(html) {
        const { origin } = window.location
        return html`
            <div class="card">
                <p>
                    <strong>Penlock is a peer-funded project!</strong> You can
                    help us grow and provide value to the community by making a
                    donation. Thank you very much!
                </p>

                <div class="row">
                    <div class="column">
                        <img src="${origin}/asset/qr-bitcoin.svg" />
                        <strong>Bitcoin:</strong>
                        <a
                            href="bitcoin:bc1qq2xjsaune2uqfmlqp0lxu7knmr59wgfpa2nc3a?label=Penlock.io&message=Thanks%20for%20your%20support!"
                            target="_blank"
                            >bc1qq2xjsaune2uqfmlqp0lxu7knmr59wgfpa2nc3a</a
                        >
                    </div>
                    <div class="column">
                        <img src="${origin}/asset/qr-lightning.svg" />

                        <strong>Lightning:</strong>
                        <a href="lightning:lightning@penlock.io" target="_blank"
                            >lightning@penlock.io</a
                        >
                    </div>
                </div>
            </div>
        `
    }

    styles(css) {
        return css`
            .column {
                max-width: 45%;
                word-break: break-all;
            }
            img {
                min-width: 10em;
                max-width: 80%;
                padding: 1em;
            }
            a {
                word-wrap: wrap;
            }
        `
    }
}

customElements.define("penlock-donate", PenlockDonate)
