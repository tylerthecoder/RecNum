# Recreational_Math
A Javascript library for quick calculations of different properties of numbers. 
This library can calculate if a number is prime, get its factors, and a bunch of other useless stuff that recreational mathematicans care about.

The code calculates everything you need on the fly, so it is quick. Also it only does calculation once, so when you ask if a number is prime, then it now knows that forever, and won't need to calculate that again if you run a calculation where it needs to know if a number is prime. 

Here is an example use to see if a number is prime
```javascript
let num = new RecMath.num(12);
console.log(num.prime);
```

Example to find if a number is perfect
```javascript
//option one
let num1 = new RecMath.num(28);
console.log(num.perfect);

//option two
let num2 = new RecMath.num(6)
console.log(num2.factorSum == num2*2)
```


