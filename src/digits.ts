import * as _ from "lodash";
import { factors, powers, primeFactors } from "./factors";
import { digits, digitSum, isDivisible, isInt, numOfDigits, sliceDigits } from "./number";
import { isUniq, rest, rf } from "./utils";

export const isPandigital = (x: number) => digits(x).sort().toString() === "0,1,2,3,4,5,6,7,8,9";

export const isKeith: (x: number, digs?: number[]) => boolean = rf(
  (call, x, digs = digits(x)) => {
    const sum = _.sum(digs);
    if (digs.length === 1) { return false; }
    if (sum === x) { return true; }
    if (sum > x) { return false; }
    digs.push(sum);
    return call(x, rest(digs));
  },
);

export const isHappy: (n: number) => boolean = rf(
  (call, n) => {
    if (n === 1 || n === 145) { return n === 1; }
    n = _.sum(_.map(digits(n), (x) => x ** 2));
    return call(n);
  },
);

export const isPolyDivisible: (x: number, divisor?: number) => boolean = rf(
  (call, x, divisor = 1) => {
    if (divisor > digits(x).length) { return true; }
    if (!isDivisible(sliceDigits(x, 0, divisor), divisor)) { return false; }
    return call(x, divisor + 1);
  },
);

export const isNarcissistic = (x: number) => x === _.sum(_.map(digits(x), (n) => Math.pow(n, numOfDigits(x))));
export const isSmith = (x: number) => digitSum(x) === _.sum(_.map(primeFactors(x), (y) => digitSum(y)));
export const isPowerful = (x: number) => primeFactors(x).every((p) => isDivisible(x , p ** 2));
export const isAchilles = (x: number) => isPowerful(x) && powers(x).length < 1;
export const isSphenic = (x: number) => primeFactors(x).length === 3 && isUniq(primeFactors(x));
export const isAutomorphic = (x: number) => digits(x * x).slice(digits(x).length).toString() === x.toString();
export const isHarshad = (x: number) => isDivisible(x, digitSum(x));
export const isPronic = (x: number) => Math.floor(Math.sqrt(x)) * Math.ceil(Math.sqrt(x)) === x;
export const isMersenne = (x: number) => isInt(Math.log2(x + 1));
export const isFermat = (x: number) => isInt(Math.log2(Math.log2(x - 1)));

export const isOre = (x: number) => {
  const sum = factors(x).reduce((accum: number, curr: number) => accum + curr ** -1, 0);
  // floating point error, maybe fix with fraction addition
  return isInt(Math.floor((factors(x).length / sum) * 100000) / 100000);
};

export const isKaprekar: (n: number, index?: number) => boolean = rf(
  (call, n, index = 0) => {
    if (index > numOfDigits(n)) { return false; }
    const sq = n ** 2;
    const firstPart = sliceDigits(sq, 0, index + 1);
    const secondPart = sliceDigits(sq, index + 1);
    if (n === firstPart + secondPart) {
      return true;
    }
    return call(n, index + 1);
  },
);
