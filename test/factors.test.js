const expect = require('chai').expect;
const funcs = require("../dist/factors.js")

describe("Factors", () => {
    it("factor", () => {
        expect(funcs.factors(12), "12").to.deep.equal([1,12,2,6,3,4]);
        expect(funcs.factors(9), "9").to.deep.equal([1, 9, 3, 3]);
        expect(funcs.factors(7), "7").to.deep.equal([1, 7]);
    });
});