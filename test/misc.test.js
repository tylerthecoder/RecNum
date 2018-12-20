const expect = require('chai').expect;
const funcs = require("../dist/misc.js")

describe("Misc", () => {
    it("Roman Numeral", function() {
        expect(funcs.toRomanNumeral(4)).to.equal("IV");
        expect(funcs.toRomanNumeral(10)).to.equal("X");
        expect(funcs.toRomanNumeral(12)).to.equal("XII");
        expect(funcs.toRomanNumeral(3)).to.equal("III");
    });
});
