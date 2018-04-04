var Jasmine = require('jasmine');
var jasmine = new Jasmine();

let funcs = require("./functional")


describe("prime numbers", function() {
    let isPrime = funcs.prime
    it("know which numbers are prime", function() {
        expect(isPrime(1)).toBe(false);
        expect(isPrime(5)).toBe(true);
        expect(isPrime(12)).toBe(false);
        expect(isPrime(27831914171)).toBe(true);
    });

    it("powerful", function() {
        expect(funcs.powerful(1)).toBe(true);
        expect(funcs.powerful(16)).toBe(true);
        expect(funcs.powerful(972)).toBe(true);
        expect(funcs.powerful(973)).toBe(false);
    });
});



jasmine.execute();