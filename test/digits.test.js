const expect = require('chai').expect;
const funcs = require("../dist/digits.js")

describe("Digits", () => {
  it("powerful", function() {
    expect(funcs.isPowerful(1)).to.equal(true);
    expect(funcs.isPowerful(16)).to.equal(true);
    expect(funcs.isPowerful(972)).to.equal(true);
    expect(funcs.isPowerful(973)).to.equal(false);
  });

  it("happy", function() {
      expect(funcs.isHappy(1)).to.equal(true);
      expect(funcs.isHappy(6)).to.equal(false);
      expect(funcs.isHappy(999)).to.equal(false);
      expect(funcs.isHappy(1000)).to.equal(true);
  });

  it("ore", function() {
      expect(funcs.isOre(1)).to.equal(true);
      expect(funcs.isOre(6)).to.equal(true);
      expect(funcs.isOre(2970)).to.equal(true);
      expect(funcs.isOre(2903)).to.equal(false);
  });

  it("spheinic", function() {
      expect(funcs.isSphenic(30)).to.equal(true);
      expect(funcs.isSphenic(60)).to.equal(false);
      expect(funcs.isSphenic(165)).to.equal(true);
      expect(funcs.isSphenic(166)).to.equal(false);
  });

  it("kaprekar", function() {
      expect(funcs.isKaprekar(1), "1").to.equal(true);
      expect(funcs.isKaprekar(45), "45").to.equal(true);
      expect(funcs.isKaprekar(22222), "22222").to.equal(true);
      expect(funcs.isKaprekar(22221), "22221").to.equal(false);
  });

  it("harshad", function() {
      expect(funcs.isHarshad(1), "1").to.equal(true);
      expect(funcs.isHarshad(45), "45").to.equal(true);
      expect(funcs.isHarshad(200), "200").to.equal(true);
      expect(funcs.isHarshad(199), "199").to.equal(false);
  });

  it("pronic", function() {
      expect(funcs.isPronic(0)).to.equal(true);
      expect(funcs.isPronic(2)).to.equal(true);
      expect(funcs.isPronic(240)).to.equal(true);
      expect(funcs.isPronic(461)).to.equal(false);
  });
});