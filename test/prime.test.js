const expect = require('chai').expect;
const funcs = require("../dist/prime.js")

describe("Primes", () => {
  it("prime", function() {
    expect(funcs.isPrime(1), "1").to.equal(false);
    expect(funcs.isPrime(5), "5").to.equal(true);
    expect(funcs.isPrime(9), "9").to.equal(false);
    expect(funcs.isPrime(12), "12").to.equal(false);
    expect(funcs.isPrime(27831914171), "27831914171").to.equal(true);
  });

  it("super prime", () => {
      expect(funcs.isSuperPrime(1), "1").to.equal(false);
      expect(funcs.isSuperPrime(5), "5").to.equal(true);
      expect(funcs.isSuperPrime(12), "12").to.equal(false);
      expect(funcs.isSuperPrime(19), "19").to.equal(false);
      expect(funcs.isSuperPrime(991, "991")).to.equal(true);
  })

  it("twin prime", () => {
    expect(funcs.isTwinPrime(3), "3").to.equal(5);
    expect(funcs.isTwinPrime(19), "19").to.equal(17);
    expect(funcs.isTwinPrime(12), "12").to.equal(false);
    expect(funcs.isTwinPrime(23), "23").to.equal(false);
    expect(funcs.isTwinPrime(137, "137")).to.equal(139);
  })

  it("Emirp", () => {
    expect(funcs.isEmirp(13), "13").to.equal(true);
    expect(funcs.isEmirp(19), "19").to.equal(false);
    expect(funcs.isEmirp(149), "149").to.equal(true);
    expect(funcs.isEmirp(150), "150").to.equal(false);
  });

  it("Wilson", () => {
    expect(funcs.isWilsonPrime(3), "3").to.equal(false);
    expect(funcs.isWilsonPrime(5), "5").to.equal(true);
    expect(funcs.isWilsonPrime(13), "13").to.equal(true);
    expect(funcs.isWilsonPrime(563), "563").to.equal(true);
  });
});