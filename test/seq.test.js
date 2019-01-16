const expect = require('chai').expect;
const funcs = require("../dist/seq.js")

describe("Sequences", () => {
  it("Fibonacci", function() {
    expect(funcs.inFib(1)).to.equal(1);
    expect(funcs.inFib(144)).to.equal(12);
    expect(funcs.inFib(4)).to.equal(false);
  });

  it("padovan", function() {
    expect(funcs.inPadovan(1), "1").to.equal(0);
    expect(funcs.inPadovan(2), "2").to.equal(3);
    expect(funcs.inPadovan(49), "49").to.equal(15);
    expect(funcs.inPadovan(50), "50").to.equal(false);
  });

  it("jacobsthal", function() {
    expect(funcs.inJacobsthal(1), "1").to.equal(1);
    expect(funcs.inJacobsthal(3), "3").to.equal(3);
    expect(funcs.inJacobsthal(341), "341").to.equal(10);
    expect(funcs.inJacobsthal(684), "684").to.equal(false);
  });

  it("leonardo", function() {
    expect(funcs.inLeonardo(1), "1").to.equal(0);
    expect(funcs.inLeonardo(3), "3").to.equal(2);
    expect(funcs.inLeonardo(25), "25").to.equal(6);
    expect(funcs.inLeonardo(684), "684").to.equal(false);
  });

  it("catalan", function() {
    expect(funcs.inCatalan(1), "1").to.equal(0);
    expect(funcs.inCatalan(2), "2").to.equal(2);
    expect(funcs.inCatalan(14), "14").to.equal(4);
    expect(funcs.inCatalan(429), "429").to.equal(7);
    expect(funcs.inCatalan(4863), "4863").to.equal(false);
  });

  it("Lazy Caterers", function() {
    expect(funcs.inLazyCaterers(1), "1").to.equal(0);
    expect(funcs.inLazyCaterers(2), "2").to.equal(1);
    expect(funcs.inLazyCaterers(4), "4").to.equal(2);
    expect(funcs.inLazyCaterers(56), "56").to.equal(10);
    expect(funcs.inLazyCaterers(57), "57").to.equal(false);
  });

  it("Look and Say", function() {
    expect(funcs.inLookAndSay(1), "1").to.equal(0);
    expect(funcs.inLookAndSay(11), "11").to.equal(1);
    expect(funcs.inLookAndSay(1211), "1211").to.equal(3);
    expect(funcs.inLookAndSay(1111), "1111").to.equal(false);
  });
});