# Recreational_Number_Theory
A Javascript library for quick calculations of different properties of numbers.

##Installation
```
npm i recnum --save
```



Here is an example use to see if a number is prime
```javascript
const recnum = require("recnum")
recnum.isPrime(12) //returns: False
```

Example to find if a number is perfect
```javascript
//option one
recnum.isPerfect(6) //Returns: True

//option two
(recnum.factorSum(6) == 12) //Returns: True
```
List of all properties of numbers
* Even (isEven)
* Prime (isPrime)
* Emirp (isEmirp)
* Super Prime (isSuperPrime)
* Twin Prime (isTwinPrime)
* Wilson Prime (isWilsonPrime)
* Abundant (isAbundant)
* Perfect (isPerfect)
* Defiecent (isDefiecnt)
* Keith (isKeith)
* Happy (isHappy)
* Poly-Divisible (isPolyDivisible)
* Narcissistic (isNarcissistic)
* Smith (isSmith)
* Automorphic (isAutomorphic)
* Achilles (isAchilles)
* Mersenne (isMersenne)
* Fermat (isFermat)
* Powerful (isPowerful)
* Ore (ieOre)
* Sphenic (isSphenic)
* Kaprekar (isKaprekar)
* Harshad (isHarshad)
* Pronic (isPronic)


Find if a number is in the Fibanocci Sequence
```javascript
recnum.inFib(5) //Returns: 5
```

List of all sequences
* Fibanocci (inFib)
* Lucas (inLucas)
* Padovan (inPadovan)
* Jacobsthal (inJacobsthal)
* Leonardo (inLeonardo)
* Catalan (inCatalan)
* Look And Say (inLookAndSay)
* Lazy Caterers (inLazyCaterers)


Other Usefull Things
* Get all the primes up to a number (primesUpTo)
* See if the number is a power of another (getPower)
* Find a number's factors (getFactors)
* Find a number's prime factors (getPrimeFacts)
* Find a number's sum of factors (factorSum)
* Convert a number to roman numerals (toRomanNumeral)