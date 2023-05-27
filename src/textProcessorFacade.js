const TextProcessorFluentApi = require("./textProcessorFluentApi");

class TextProcessorFacade {
    #textProcessorFluentApi;
    constructor(text) {
        this.#textProcessorFluentApi = new TextProcessorFluentApi(text);
    }

    getPeopleFromPdf() {
        return this.#textProcessorFluentApi
            .extractPeopleDate()
            .divideTextInColumns()
            .removeEmptyCharacters()
            .maPerson()
            .build();
    }
}

module.exports = TextProcessorFacade;
