# Recreational_Number_Theory
A Javascript library for quick calculations of different properties of numbers.

## Installation
```
npm i recnum --save
```

or

```
yarn add recnum
```

## Usage

### How to import
# Javascript
```javascript
const recnum = require("recnum");
```
# Typescript
```typescript
import * as recnum from 'recnum';
```

## examples
Check if a number is prime
```typescript
const recnum = require("recnum")
recnum.isPrime(7); // return: True
recnum.isPrime(12); // returns: False
```

Check if a number is perfect
```javascript
recnum.isPerfect(6) // returns: True
```

List of all properties of numbers
```typescript
recnum.isEven(5)
recnum.isPrime(5)
recnum.isEmirp(5)
recnum.isSuperPrime(5)
recnum.isTwinPrime(5)
recnum.isWilsonPrime(5)
recnum.isAbundant(5)
recnum.isPerfect(5)
recnum.isDefiecnt(5)
recnum.isKeith(5)
recnum.isHappy(5)
recnum.isPolyDivisible(5)
recnum.isNarcissistic(5)
recnum.isSmith(5)
recnum.isAutomorphic(5)
recnum.isAchilles(5)
recnum.isMersenne(5)
recnum.isFermat(5)
recnum.isPowerful(5)
recnum.ieOre(5)
recnum.isSphenic(5)
recnum.isKaprekar(5)
recnum.isHarshad(5)
recnum.isPronic(5)
```

Find if a number is in the a Sequence
Will return index of number in sequence
```javascript
recnum.inFib(5) // returns: 5
recnum.inLucas(5)
recnum.inPadovan(5)
recnum.inJacobsthal(5)
recnum.inLeonardo(5)
recnum.inCatalan(5)
recnum.inLookAndSay(5)
recnum.inLazyCaterers(5)
```

Other Useful Things
* Get all the primes up to a number (primesUpTo)
* See if the number is a power of another (powers)
* Find a number's factors (factors)
* Find a number's prime factors (primeFactors)
* Find a number's sum of factors (factorSum)
* Convert a number to roman numerals (toRomanNumeral)

If you have any other fun number types that you think this should include just make a PR and I'll add them!