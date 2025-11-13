import "./penlock-community.js"

export class PenlockFooter extends El {
    render(html) {
        return html`
            <penlock-community></penlock-community>

            <section class="column">
                <span class="logo">penlock</span>
                <span class="license"
                    >Released under
                    <a
                        href="https://github.com/penlock-io/v1/blob/master/LICENSE.md"
                        target="_blank"
                        >MIT license</a
                    ></span
                >
            </section>
        `
    }

    styles(css) {
        return css`
            :host {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: var(--gap-xs);
            }

            penlock-community {
                width: var(--paper-width);
                padding-top: var(--gap-m);
                border-top: 1px solid var(--gray);
            }

            .logo {
                font-family: var(--monospace);
                font-size: calc(min(100vw, 94.5em) * 1.62 / 7);
                font-weight: 600;
                letter-spacing: -0.04em;
                color: var(--gray);
            }

            .license {
                color: var(--gray-600);
            }
        `
    }
}

customElements.define("penlock-footer", PenlockFooter)
