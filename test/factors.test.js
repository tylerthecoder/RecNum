const expect = require('chai').expect;
const funcs = require("../dist/factors.js")

describe("Factors", () => {
    it("factor", () => {
        expect(funcs.factors(12), "12").to.deep.equal([1,12,2,6,3,4]);
        expect(funcs.factors(9), "9").to.deep.equal([1, 9, 3, 3]);
        expect(funcs.factors(7), "7").to.deep.equal([1, 7]);
    });
    it("factorSum", () => {
        expect(funcs.factorSum(2), "2").to.equal(3);
        expect(funcs.factorSum(9), "9").to.equal(16);
        expect(funcs.factorSum(12), "12").to.equal(28);
    });
    it("abundant", () => {
        expect(funcs.isAbundant(3), "3").to.equal(false);
        expect(funcs.isAbundant(6), "6").to.equal(false);
        expect(funcs.isAbundant(12), "12").to.equal(true);
    });
    it("perfect", () => {
        expect(funcs.isPerfect(3), "3").to.equal(false);
        expect(funcs.isPerfect(6), "6").to.equal(true);
        expect(funcs.isPerfect(12), "12").to.equal(false);
    });
    it("deficient", () => {
        expect(funcs.isDeficient(3), "3").to.equal(true);
        expect(funcs.isDeficient(6), "6").to.equal(false);
        expect(funcs.isDeficient(12), "12").to.equal(false);
    });
});