export class PenlockLogo extends El {
    render(html) {
        return html`<a href="${this.href}"> penl<strong>o</strong>ck </a>`
    }

    styles(css) {
        return css`
            :host {
                display: inline-block;
                font-family: var(--logo-font);
                font-weight: 600 !important;
                letter-spacing: -0.04em;
            }

            a {
                text-decoration: none;
            }

            strong {
                color: var(--highlight1);
                font-weight: 600;
            }
        `
    }
}

customElements.define("penlock-logo", PenlockLogo)
