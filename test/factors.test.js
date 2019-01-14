const expect = require('chai').expect;
const funcs = require("../dist/factors.js")

describe("Factors", () => {
    it("factor", () => {
        expect(funcs.factors(12), "12").to.deep.equal([1,12,2,6,3,4]);
        expect(funcs.factors(9), "9").to.deep.equal([1, 9, 3, 3]);
        expect(funcs.factors(7), "7").to.deep.equal([1, 7]);
    });
    it("powers", () => {
        expect(funcs.powers(7), "12").to.deep.equal([]);
        expect(funcs.powers(9), "12").to.deep.equal([[3,2]]);
        expect(funcs.powers(81), "12").to.deep.equal([[9,2],[3,4]]);
    });
    it("Abundant", () => {
        expect(funcs.isAbundant(6)).to.equal(false);
        expect(funcs.isAbundant(7)).to.equal(false);
        expect(funcs.isAbundant(12)).to.equal(true);
    })
    it("Perfect", () => {
        expect(funcs.isPerfect(6)).to.equal(true);
        expect(funcs.isPerfect(7)).to.equal(false);
        expect(funcs.isPerfect(12)).to.equal(false);
    })
    it("Deficient", () => {
        expect(funcs.isDeficient(6)).to.equal(false);
        expect(funcs.isDeficient(7)).to.equal(true);
        expect(funcs.isDeficient(12)).to.equal(false);
    })
});