import * as _ from "lodash";
import { isDivisible, isInt } from "./number";

const rf = (fn: (...args: any) => any) => (...args: any) => {
  let res = fn(...args);
  while (res[0] === "CALL") {
    res = fn(...res.splice(1, res.length));
  }
  return res;
};

export const getFactorsRecursive = rf((x, facts = [], count = 1) => {
  if (Math.sqrt(x) < count) { return facts; }
  if (isDivisible(x, count)) { facts.push(count, x / count); }
  return ["CALL", x, facts, count + 1];
});

export const factors = (n: number) => {
  const facts = [];
  for (let i = 0; i <= Math.sqrt(n); i++) {
    if (isDivisible(n, i)) { facts.push(i, n / i); }
  }
  return facts;
};

export const factorSum = (x: number) => _.sum(factors(x));

export const primeFactors = rf((x, facts = [], check = 2) => {
  if (x === 1) { return facts; }
  if (isDivisible(x, check)) {
    facts.push(check);
    x /= check;
    return ["CALL", x, facts, check];
  }
  return ["CALL", x, facts, check + 1];
});

export const getPowers = rf((x, powers = [], b = 2) => {
  if (b > Math.log2(x)) { return powers; }
  if (isInt(x ** (1 / b))) { powers.push([x ** (1 / b), b]); }
  return ["CALL", x, powers, b + 1];
});

export const isAbundant = (x: number) => factorSum(x) > 2 * x;
export const isPerfect = (x: number) => factorSum(x) === 2 * x;
export const isDeficient = (x: number) => factorSum(x) < 2 * x;
