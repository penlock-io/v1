export class PenlockDonate extends El {
    render(html) {
        const { origin } = window.location
        return html`
            <div class="card">
                <h3>${this.invite}</h3>
                <p>${this.message}</p>

                <div class="row">
                    <div class="column">
                        <img src="${origin}/images/qr-bitcoin.svg" />
                        <strong>Bitcoin:</strong>
                        <a
                            href="bitcoin:bc1qq2xjsaune2uqfmlqp0lxu7knmr59wgfpa2nc3a?label=Penlock.io&message=Thanks%20for%20your%20support!"
                            target="_blank"
                            >bc1qq2xjsaune2uqfmlqp0lxu7knmr59wgfpa2nc3a</a
                        >
                    </div>
                    <div class="column">
                        <img src="${origin}/images/qr-lightning.svg" />

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
            .card {
                border: 1px #535557 dotted;
                border-radius: 0.2em;
                align-items: center;
                text-align: center;
            }

            .card p {
                max-width: 30em;
                margin: auto;
            }

            .row {
                gap: min(2.25rem, 6.5vw) min(1.69rem, 3.4vw);
            }

            .column {
                width: 35% !important;
                min-width: 10em;
                justify-content: flex-start;
                word-break: break-all;
            }

            img {
                width: 100%;
                margin-bottom: 1.6em;
            }

            a {
                word-wrap: wrap;
            }
        `
    }
}

customElements.define("penlock-donate", PenlockDonate)
