const { describe, it } = require("mocha");
const { expect } = require("chai");
const { InvalidRegexError, evaluateRegex } = require("./../src/util");
const mock = require("./mock/valid");

describe("util", () => {
    it("#evaluateRegex should throw an error using an unsafe regex", () => {
        const unsafeRegex = /^([a-z | A-Z | 0-9]+\s?)+$/;

        expect(() => evaluateRegex(unsafeRegex)).to.throw(
            InvalidRegexError,
            `This ${unsafeRegex} is unsafe dude`
        );
    });
    it("#extractPeopleDate", () => {
        const safeRegex = /^([a-z | A-Z | 0-9])$/;

        expect(() => evaluateRegex(safeRegex)).to.not.throw();
        expect(evaluateRegex(safeRegex)).to.be.ok;
    });
});
