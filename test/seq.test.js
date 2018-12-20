const expect = require('chai').expect;
const funcs = require("../dist/seq.js")

describe("Sequences", () => {
  it("Fibonacci", function() {
    expect(funcs.inFib(1)).to.equal(1);
    expect(funcs.inFib(144)).to.equal(12);
    expect(funcs.inFib(4)).to.equal(false);
  });

  it("Look and Say", function() {
    expect(funcs.inLookAndSay(1), "1").to.equal(0);
    expect(funcs.inLookAndSay(11), "11").to.equal(1);
    expect(funcs.inLookAndSay(1211), "1211").to.equal(3);
    expect(funcs.inLookAndSay(1111), "1111").to.equal(false);
  });
});