export class PenlockCommunity extends El {
    render(html) {
        const { origin } = window.location
        return html`
            <nav class="buttons">
                <a
                    href="https://github.com/penlock-io/beta.penlock.io"
                    target="_blank"
                    class="button"
                >
                    <img src="${origin}/icons/github.svg" />
                    Forum
                </a>
                <a
                    href="https://github.com/penlock-io/beta.penlock.io"
                    target="_blank"
                    class="button"
                >
                    <img src="${origin}/icons/github.svg" />
                    Code
                </a>
            </nav>
        `
    }

    styles(css) {
        return css`
            :host {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: var(--gap-m);
            }

            header {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: var(--gap-xs);
            }
        `
    }
}

customElements.define("penlock-community", PenlockCommunity)
