const { describe, it } = require("mocha");
const { expect } = require("chai");
const Person = require("./../src/person");
const TextProcessorFluentApi = require("../src/textProcessorFluentApi");
describe("person", () => {
    it("should generate a person instance from property list", () => {
        const content = [
            "Xuxa da Silva",
            "brasileira",
            "casada",
            "CPF 235.743.420-12",
            "residente e domiciliada a Rua dos bobos",
            "zero",
            "bairro Alphaville",
            "São Paulo.",
        ];

        const result = new Person(content);

        const expected = {
            nome: "Xuxa da Silva",
            nacionalidade: "Brasileira",
            estadoCivil: "Casada",
            cpf: "23574342012",
            rua: "Rua dos bobos",
            numero: "zero",
            bairro: "Alphaville",
            estado: "São Paulo",
        };

        expect(result).to.be.deep.equal(expected);
    });

    it("maPerson", () => {
        const content = [
            [
                "Xuxa da Silva",
                "brasileira",
                "casada",
                "CPF 235.743.420-12",
                "residente e domiciliada a Rua dos bobos",
                "zero",
                "bairro Alphaville",
                "São Paulo.",
            ],
        ];

        const result = new TextProcessorFluentApi(content).maPerson().build();

        const expected = [
            {
                nome: "Xuxa da Silva",
                nacionalidade: "Brasileira",
                estadoCivil: "Casada",
                cpf: "23574342012",
                rua: "Rua dos bobos",
                numero: "zero",
                bairro: "Alphaville",
                estado: "São Paulo",
            },
        ];

        expect(result).to.be.deep.equal(expected);
    });
});
