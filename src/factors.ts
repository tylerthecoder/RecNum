import * as _ from "lodash";
import { isDivisible, isInt } from "./number";
import { rf } from "./utils";

export const factors: (x: number, facts?: number[], count?: number) => number[] = rf(
  (call, x, facts = [], count = 1) => {
    if (Math.sqrt(x) < count) { return facts; }
    if (x % count === 0) { facts.push(count, x / count); }
    return call(x, facts, count + 1);
  },
);

export const factorsIterative = (n: number) => {
  const facts = [];
  for (let i = 0; i <= Math.sqrt(n); i++) {
    if (isDivisible(n, i)) { facts.push(i, n / i); }
  }
  return facts;
};

export const factorSum = (x: number) => _.sum(factors(x));

export const primeFactors: (x: number, facts?: number[], check?: number) => number[] = rf(
  (call, x, facts = [], check = 2) => {
    if (x === 1) { return facts; }
    if (isDivisible(x, check)) {
      facts.push(check);
      x /= check;
      return call(x, facts, check);
    }
    return call(x, facts, check + 1);
  },
);

export const powers: (x: number, pows?: Array<[number, number]>, b?: number) => Array<[number, number]> = rf(
  (call, x, pows = [], b = 2) => {
    if (b > Math.log2(x)) { return pows; }
    if (isInt(x ** (1 / b))) { pows.push([x ** (1 / b), b]); }
    return call(x, pows, b + 1);
  },
);

export const isAbundant = (x: number) => factorSum(x) > 2 * x;
export const isPerfect = (x: number) => factorSum(x) === 2 * x;
export const isDeficient = (x: number) => factorSum(x) < 2 * x;
