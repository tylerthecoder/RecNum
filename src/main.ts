import * as _ from "lodash";
import { factors, getPowers, primeFactors } from "./factors";
import { digits, digitSum } from "./number";
import "./prime";

export * from "./prime";

export const rf = (fn: (...args: any) => any) => (...args: any) => {
  let res = fn(...args);
  while (res[0] === "CALL") {
    res = fn(...res.splice(1, res.length));
  }
  return res;
};

// const log = (...what) => console.log(...what);

/* Array Functions */
const head = ([arr]: any[]) => arr;
const tail = (arr: any[], length = 1) => arr[arr.length - length];
const rest = ([arr, ...rst]: any[]) => rst;
const sumArray = (arr: number[]) => arr.reduce((sum, cur) => sum + cur, 0);
const stringToInt = (arr: any[]) => arr.map(toInt);
const isDuplicate = rf((arr, index = 1) => {
  if (index === arr.length) { return false; }
  if (arr[index] === arr[index - 1]) { return true; }
  return ["CALL", arr, index + 1];
});

/* Number Functions */
const isInt = (x: number) => x === Math.floor(x);
const toInt = (x: string) => +x;
const str = (x: number) => x.toString();
const getDigits = (x: number, start: number, length = digits(x).length) => digits(x).splice(start, length);

export const isPandigital = (x: number) => digits(x).sort().toString() === "0,1,2,3,4,5,6,7,8,9";

// having to due with digits
export const isKeith = rf((x, digs = digits(x)) => {
  const sum = digitSum(x);
  if (sum === x) { return true; }
  if (sum > x) { return false; }
  digs.push(sum);
  return ["CALL", x, rest(digs)];
});

export const isHappy = rf((n) => {
  if (n === 1 || n === 145) { return n === 1; }
  n = _.sum(_.map(digits(n), (x) => x ** 2));
  return ["CALL", n];
});

export const isPolyDivisible = rf((x, divisor = 1) => {
  if (divisor > digits(x).length) { return true; }
  if (!isInt(Number(getDigits(x, 0, divisor).join("")) / divisor)) { return false; }
  return ["CALL", x, divisor + 1];
});

export const isNarcissistic = (x: number) => x === sumArray(digits(x).map((n) => Math.pow(+n, digits(x).length)));
export const isSmith = (x: number) => digitSum(x) === sumArray(primeFactors(x).map((y: number) => digitSum(y)));
export const isPowerful = (x: number) => primeFactors(x).every((p: number) => isInt(x / (p * p)));
export const isAchilles = (x: number) => isPowerful(x) && getPowers(x).length < 1;
export const isSphenic = (x: number) => primeFactors(x).length === 3 && !isDuplicate(primeFactors(x));
export const isAutomorphic = (x: number) => digits(x * x).slice(digits(x).length).toString() === x.toString();
export const isHarshad = (x: number) => isInt(x / digitSum(x));
export const isPronic = (x: number) => Math.floor(Math.sqrt(x)) * Math.ceil(Math.sqrt(x)) === x;
export const isMersenne = (x: number) => isInt(Math.log2(x + 1));
export const isFermat = (x: number) => isInt(Math.log2(Math.log2(x - 1)));

export const isOre = (x: number) => {
  const sum = factors(x).reduce((accum: number, curr: number) => accum + curr ** -1, 0);
  // floating point error, maybe fix with fraction addition
  return isInt(Math.floor((factors(x).length / sum) * 100000) / 100000);
};

export const isKaprekar = rf((x, index = 0) => {
  if (index > digits(x).length) { return false; }
  const squareSum = +getDigits(x ** 2, 0, index).join("");
  if (x === squareSum + +getDigits(x ** 2, index).join("")) {
    return true;
  }
  return ["CALL", x, index + 1];
});

export const toRomanNumeral = (x: number) => {
  if (x > 3999) { return "Romans can't count this high"; }
  const numerals = "IVXLCDM".split("");
  return digits(x)
    .slice(-4)
    .reverse()
    .map((n: number, index) => {
      if (n === 0) { return ""; }
      const offset = n > 5 ? 2 : 1;
      let s = n >= 5 ? numerals[index * 2 + 1] : "";
      if (n % 5 === 4) {
        s = numerals[index * 2] + numerals[index * 2 + offset];
      } else {
        s += numerals[index * 2].repeat(n % 5);
      }
      return s;
    })
    .reverse()
    .join("");
};

const isInSeq = (build: (seq: number[]) => any, seed: number[]) =>
  rf((x, seq = seed) => {
    const index = seq.indexOf(x);
    if (index > -1) {
      return index;
    }
    if (tail(seq) > x) {
      return false;
    }
    seq.push(build(seq));
    return ["CALL", x, seq];
  });

const fib = (seed: number[]) => tail(seed, 1) + tail(seed, 2);
const padovan = (seed: number[]) => tail(seed, 2) + tail(seed, 3);
const jacobsthal = (seed: number[]) => tail(seed, 1) + 2 * tail(seed, 2);
const leonardo = (seed: number[]) => tail(seed, 1) + tail(seed, 2) + 1;
const catalan = (seed: number[]) =>
  ((4 * seed.length + 2) / (seed.length + 2)) * tail(seed, 1);
const lazyCaterers = (seed: number[]) => {
  const i = Math.sqrt(2 * tail(seed) - 7 / 4) - 0.5;
  return ((i + 1) * (i + 1) + (i + 1) + 2) / 2;
};
const lookAndSay = (seed: number[]) => {
  const res = digits(tail(seed)).reduce(
    (accum, val, index) => {
      accum.str += accum.last !== val ? accum.count + accum.last : "";
      accum.count = accum.last === val ? accum.count + 1 : 1;
      accum.last = val;
      return accum;
    },
    { str: "", count: 0, last: digits(tail(seed))[0] },
  );
  return toInt(res.str + res.count + res.last);
};

export const inFib = isInSeq(fib, [0, 1]);
export const inLucas = isInSeq(fib, [2, 1]);
export const inPadovan = isInSeq(padovan, [1, 1, 1]);
export const inJacobsthal = isInSeq(jacobsthal, [0, 1]);
export const inLeonardo = isInSeq(leonardo, [1, 1]);
export const inCatalan = isInSeq(catalan, [1]);
export const inLookAndSay = isInSeq(lookAndSay, [1]);
export const inLazyCaterers = isInSeq(lazyCaterers, [1]);
