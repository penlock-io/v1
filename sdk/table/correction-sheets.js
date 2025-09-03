export class CorrectionSheets extends El {
    render() {
        const arrays = codex.wordlist.correctionGrid()
        console.log({ arrays })
        console.log("slicing", arrays.slice(10))

        // const chunks = codex.wordlist.cut(512)
        // const sheets = chunks.map((chunk) => this.sheet(chunk))
        // return sheets.join("\n")

        const sheet1 = this.sheet(arrays.slice(0, 10))
        const sheet2 = this.sheet(arrays.slice(10, 20))
        const sheet3 = this.sheet(arrays.slice(20, 29))
        return `
            ${sheet1}
            ${sheet2}
            ${sheet3}
        `
    }

    sheet(arrays) {
        const content = arrays.map((array) => this.column(array)).join("")
        return `
            <section class="sheet row">
                    ${content}
            </section>
`
    }

    column(subarray1) {
        const cells = subarray1.map((a) => this.cell(a)).join("")
        return `<section class="column">${cells}</section>`
    }

    cell(words) {
        if (!words.length) return ``

        const spans = words.map((word) => this.fancyWord(word)).join("")
        return `
            <section class="column">${spans}</section>
        `
    }

    // sheet(chunk) {
    //     const content = this.content(chunk).join("")
    //     return `
    //         <section class="sheet">
    //             <ul>
    //                 ${content}
    //             </ul>
    //         </section>
    //     `
    // }

    // content(wordlist) {
    //     const items = wordlist.iterate((word, tiles, index) => {
    //         word = this.fancyWord(word)
    //         return `<li>${tiles} ${word}</li>`
    //     })
    //     return items
    // }

    fancyWord(word) {
        const hash = word.slice(0, 2)
        const head = word.slice(2, 6).padEnd(4, "-")
        const tail = word.slice(6)
        return `<span><span class="boxed"><span class="greyed">${hash}</span>${head}</span>${tail}</span>`
    }

    styles(css) {
        return css`
            .sheet {
                font-family: var(--monospace);
                font-size: 62.7%;
            }

            .row > .column {
                justify-content: flex-start;
                gap: 0.6em;
            }

            .column > .column {
                align-items: flex-start;
            }

            .greyed {
                background: #ccc;
                padding: 0 0.15em;
                margin-right: 0.1em;
            }

            .boxed {
                border-left: dotted 0.6px black;
                border-right: dotted 0.6px black;
                padding-right: 0.15em;
                margin-right: 0.15em;
            }
        `
    }
}

customElements.define("correction-sheets", CorrectionSheets)
