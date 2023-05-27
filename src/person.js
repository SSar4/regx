const { evaluateRegex } = require("./util");
class Person {
    constructor([
        nome,
        nacionalidade,
        estadoCivil,
        cpf,
        rua,
        numero,
        bairro,
        estado,
    ]) {
        const fristLetterExp = evaluateRegex(/^(\w{1})([a-zA-Z]+$)/g);
        const formatFristLetter = (prop) => {
            return prop.replace(
                fristLetterExp,
                (fullMatch, group1, group2, index) => {
                    console.log(fullMatch, group1, group2, index, "---------");
                    return `${group1.toUpperCase()}${group2.toLowerCase()}`;
                }
            );
        };
        this.nome = nome;
        this.nacionalidade = formatFristLetter(nacionalidade);
        this.estadoCivil = formatFristLetter(estadoCivil);
        this.cpf = cpf.replace(evaluateRegex(/\D/g), "");
        this.rua = rua.match(evaluateRegex(/(?<=\sa\s).*$/), "").join();
        this.numero = numero;
        this.bairro = [bairro.match(evaluateRegex(/(?<=\s)\w+$/))].join();
        this.estado = estado.replace(evaluateRegex(/\s?\.$/), "");
    }
}

module.exports = Person;
