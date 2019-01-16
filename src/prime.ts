import * as _ from "lodash";
import { isDivisible, reverseNum } from "./number";
import { rf } from "./utils";

// is prime recursive
export const isPrime: (x: number, next?: number) => boolean = rf(
  (call, x, next = 2) => {
    if (x === 1) { return false; }
    if (isDivisible(x, next)) { return false; }
    if (next > Math.sqrt(x)) { return true; }
    return call(x, next + 1);
  },
);

export const isEmirp = (x: number) => isPrime(x) && isPrime(reverseNum(x));
export const isWilsonPrime = (x: number) => x === 5 || x === 13 || x === 563;

export const primesUpTo: (x: number, factor?: number, index?: number, p?: boolean[]) => boolean[] = rf(
  (call, x, factor = 2, index = factor * 2, p = Array(x + 1).fill(true, 2, x)) => {
    if (factor > x) { return _.compact(p); }
    if (index > x) { return call(x, factor + 1, (factor + 1) * 2, p); }
    if (index < x) { p[index] = false; }
    return call(x, factor, index + factor, p);
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
