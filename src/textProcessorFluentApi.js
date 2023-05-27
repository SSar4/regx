const { evaluateRegex } = require("./../src/util");
const Person = require("./person");
class TextProcessorFluentApi {
    //propriedade privada
    // o objetivo do fluent api e executar tarefas
    // como um pipe line, steap by steap
    // e no fim, chama o build que e mt similar ao padrão builder
    // a diferença que  aqui e sobre porocesso e o build e sobre contrução de objetos
    #content;
    constructor(content) {
        this.#content = content;
    }

    extractPeopleDate() {
        const matchPerson = evaluateRegex(
            /(?<=[contratante|contratado]:\s{1})(?!\s)(.*\n.*?)$/gim
        );
        const onlyPerson = this.#content.match(matchPerson);
        // console.log(onlyPerson);
        this.#content = onlyPerson;
        return this;
    }

    divideTextInColumns() {
        const sliptRegex = evaluateRegex(/,/);
        this.#content = this.#content.map((line) => line.split(sliptRegex));
        return this;
    }

    removeEmptyCharacters() {
        const trimSpaces = evaluateRegex(/^\s+|\s+$|\n/g);
        this.#content = this.#content.map((line) =>
            line.map((item) => item.replace(trimSpaces, ""))
        );
        return this;
    }
    maPerson() {
        this.#content = this.#content.map((line) => new Person(line));
        return this;
    }
    build() {
        return this.#content;
    }
}

module.exports = TextProcessorFluentApi;
