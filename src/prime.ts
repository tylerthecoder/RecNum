import * as _ from "lodash";
import { reverseNum } from "./number";

const rf = (fn: (...args: any) => any) => (...args: any) => {
  let res = fn(...args);
  while (res[0] === "CALL") {
    res = fn(...res.splice(1, res.length));
  }
  return res;
};

// is prime recursive
export const isPrimeRecursive = rf((x: number, next = 2) => {
  if (x === 1) { return false; }
  return x % next === 0 ? false : next > Math.sqrt(x) ? true : ["CALL", x, next + 1];
});

export const isPrime = (n: number) => {
  if (n === 1) { return false; }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) { return false; }
  }
  return true;
};

export const isEmirp = (x: number) => isPrime(x) && isPrime(reverseNum(x));
export const isWilsonPrime = (x: number) => x === 5 || x === 13 || x === 563;

export const primesUpTo = rf(
  (x, factor = 2, index = factor * 2, p = Array(x + 1).fill(true, 2, x)) => {
    if (factor > x) { return _.compact(p); }
    if (index > x) { return ["CALL", x, factor + 1, (factor + 1) * 2, p]; }
    if (index < x) { p[index] = false; }
    return ["CALL", x, factor, index + factor, p];
  },
);

export const isSuperPrime = (x: number) => {
  if (!isPrime(x)) { return false; }
  return isPrime(primesUpTo(x).length + 1);
};

export const isTwinPrime = (x: number) => {
  if (!isPrime(x)) { return false; }
  if (isPrime(x + 2)) { return x + 2; }
  if (isPrime(x - 2)) { return x - 2; }
  return false;
};
