const expect = require('chai').expect;
const funcs = require("../dist/number.js")

describe("Numbers", () => {
    it("get digit", () => {
        expect(funcs.getDigit(1, 0), "1 0").to.equal(1);
        expect(funcs.getDigit(12345, 2), "12345 2").to.equal(3);
        expect(funcs.getDigit(12345, 4), "12345 4").to.equal(1);
    });

    it("digits", () => {
      expect(funcs.digits(123), "123").to.deep.equal([1,2,3]);
      expect(funcs.digits(12345, "12345")).to.deep.equal([1,2,3,4,5]);
    })

    it("reverse digits", () => {
      expect(funcs.reverseDigits(123), "123").to.deep.equal([3,2,1]);
      expect(funcs.reverseDigits(12345, "12345")).to.deep.equal([5,4,3,2,1]);
    })

    it("reverse number", () => {
      expect(funcs.reverseNum(123), "123").to.equal(321);
      expect(funcs.reverseNum(12345, "12345")).to.equal(54321);
    })

    it("digit sum", () => {
      expect(funcs.digitSum(123), "123").to.equal(6);
      expect(funcs.digitSum(12345, "12345")).to.equal(15);
    })
});