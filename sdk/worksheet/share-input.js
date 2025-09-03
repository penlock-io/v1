import "./svg/user-input.js"

export class ShareInput extends El {
    render(html) {
        console.log(this.words, this.test)
        // TODO: improve abstraction? Have codex do that?
        const url = new URL(location.href)
        const length = this.words || (url.searchParams.get("words") ?? 12)
        const content = Array.from({ length }).map((_, i) => {
            return this.section(html, length)
        })
        return html`${content}`
    }

    section(html, length) {
        return html`
            <section class="words-${length}">
                <user-input length="6" greyed="0, 2"></user-input>
            </section>
        `
    }

    styles(css) {
        return css`
            section {
                counter-increment: input;
                margin: 0.4em 0;
                padding: 0.2em 0.2em 0 0;
                text-align: right;
            }

            section.words-24 {
                margin: 0.2em 0;
            }

            user-input::before {
                content: counter(input) ". ";
                margin-right: -0.2em;
            }
        `
    }
}

customElements.define("share-input", ShareInput)
