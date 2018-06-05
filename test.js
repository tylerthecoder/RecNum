var Jasmine = require('jasmine');
var jasmine = new Jasmine();

let funcs = require("./main.js")


describe("RecMAth", function() {
    it("know which numbers are prime", function() {
        expect(funcs.isPrime(1)).toBe(false);
        expect(funcs.isPrime(5)).toBe(true);
        expect(funcs.isPrime(12)).toBe(false);
        expect(funcs.isPrime(27831914171)).toBe(true);
    });

    it("powerful", function() {
        expect(funcs.isPowerful(1)).toBe(true);
        expect(funcs.isPowerful(16)).toBe(true);
        expect(funcs.isPowerful(972)).toBe(true);
        expect(funcs.isPowerful(973)).toBe(false);
    });

    it("ore", function() {
        expect(funcs.isOre(1)).toBe(true);
        expect(funcs.isOre(6)).toBe(true);
        expect(funcs.isOre(2970)).toBe(true);
        expect(funcs.isOre(2903)).toBe(false);
    });

    it("spheinic", function() {
        expect(funcs.isSphenic(30)).toBe(true);
        expect(funcs.isSphenic(60)).toBe(false);
        expect(funcs.isSphenic(165)).toBe(true);
        expect(funcs.isSphenic(166)).toBe(false);
    });

    it("kaprekar", function() {
        expect(funcs.isKaprekar(1)).toBe(true);
        expect(funcs.isKaprekar(45)).toBe(true);
        expect(funcs.isKaprekar(22222)).toBe(true);
        expect(funcs.isKaprekar(22221)).toBe(false);
    });

    it("harshad", function() {
        expect(funcs.isHarshad(1)).toBe(true);
        expect(funcs.isHarshad(45)).toBe(true);
        expect(funcs.isHarshad(200)).toBe(true);
        expect(funcs.isHarshad(199)).toBe(false);
    });

    it("pronic", function() {
        expect(funcs.isPronic(0)).toBe(true);
        expect(funcs.isPronic(2)).toBe(true);
        expect(funcs.isPronic(240)).toBe(true);
        expect(funcs.isPronic(461)).toBe(false);
    });

    it("fibanocci", function() {
        expect(funcs.inFib(5)).toBe(5);
        expect(funcs.inFib(1)).toBe(1);
        expect(funcs.inFib(12)).toBe(false);
        expect(funcs.inFib(144)).toBe(12);
    });


});





jasmine.execute();