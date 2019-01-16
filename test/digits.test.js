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

  it("pandigital", function() {
    expect(funcs.isPandigital(0)).to.equal(false);
    expect(funcs.isPandigital(2)).to.equal(false);
    expect(funcs.isPandigital(1234567890)).to.equal(true);
    expect(funcs.isPandigital(4562891703)).to.equal(true);
    expect(funcs.isPandigital(12345678990)).to.equal(false);
  });

  it("keith", function() {
    expect(funcs.isKeith(5), "5").to.equal(false);
    expect(funcs.isKeith(14), "14").to.equal(true);
    expect(funcs.isKeith(62662), "62662").to.equal(true);
    expect(funcs.isKeith(62663), "62663").to.equal(false);
  });

  it("PolyDivisible", function() {
    expect(funcs.isPolyDivisible(2)).to.equal(true);
    expect(funcs.isPolyDivisible(5)).to.equal(true);
    expect(funcs.isPolyDivisible(38)).to.equal(true);
    expect(funcs.isPolyDivisible(39)).to.equal(false);
    expect(funcs.isPolyDivisible(10200056)).to.equal(true);
  });

  it("narcissistic", function() {
    expect(funcs.isNarcissistic(0), "0").to.equal(true);
    expect(funcs.isNarcissistic(1), "1").to.equal(true);
    expect(funcs.isNarcissistic(6), "6").to.equal(true);
    expect(funcs.isNarcissistic(38), "38").to.equal(false);
    expect(funcs.isNarcissistic(153), "153").to.equal(true);
    expect(funcs.isNarcissistic(9474), "9474").to.equal(true);
  });

  it("smith", function() {
    expect(funcs.isSmith(22), "22").to.equal(true);
    expect(funcs.isSmith(38), "38").to.equal(false);
    expect(funcs.isSmith(153), "153").to.equal(false);
    expect(funcs.isSmith(588), "588").to.equal(true);
    expect(funcs.isSmith(1089), "1089").to.equal(false);
  });

  it("achilles", function() {
    expect(funcs.isAchilles(4), "4").to.equal(false);
    expect(funcs.isAchilles(72), "72").to.equal(true);
    expect(funcs.isAchilles(432), "432").to.equal(true);
    expect(funcs.isAchilles(433), "433").to.equal(false);
  });

  it("automorphic", function() {
    expect(funcs.isAutomorphic(5), "5").to.equal(true);
    expect(funcs.isAutomorphic(6), "6").to.equal(true);
    expect(funcs.isAutomorphic(9376), "9376").to.equal(true);
    expect(funcs.isAutomorphic(1000), "1000").to.equal(false);
  });

  it("mersenne", function() {
    expect(funcs.isMersenne(1), "1").to.equal(true);
    expect(funcs.isMersenne(4), "4").to.equal(false);
    expect(funcs.isMersenne(7), "7").to.equal(true);
    expect(funcs.isMersenne(255), "1000").to.equal(true);
  });

  it("fermat", function() {
    expect(funcs.isFermat(1), "1").to.equal(false);
    expect(funcs.isFermat(3), "3").to.equal(true);
    expect(funcs.isFermat(257), "257").to.equal(true);
    expect(funcs.isFermat(513), "513").to.equal(false);
  });

});