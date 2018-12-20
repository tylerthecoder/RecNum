export const getDigit = (n: number, index: number) => {
  const power = 10 ** index;
  const diff = n % (power * 10);
  return (diff - diff % power) / power;
};

export const digits = (n: number) => {
  const result: number[] = [];
  for (let i = numOfDigits(n); i >= 0; i--) {
    result.push(getDigit(n, i));
  }
  return result;
};

export const sliceDigits = (n: number, start: number, end?: number | undefined) => {
  const len = numOfDigits(n);
  if (end === undefined) {
    end = len + 1;
  }
  let result = 0;
  for (let i = start; i < end; i++) {
    result = result * 10 + getDigit(n, len - i);
  }
  return result;
};

export const numOfDigits = (n: number) => {
 return Math.floor(Math.log10(n));
};

export const reverseDigits = (n: number) => {
  const result: number[] = [];
  for (let i = 0; i < Math.log10(n); i++) {
    result.push(getDigit(n, i));
  }
  return result;
};

export const reverseNum = (n: number) => {
  let num = n;
  let result = 0;
  for (let i = 0; i < Math.log10(n); i++) {
    const ones = num % 10;
    num = Math.floor(num / 10);
    result = result * 10 + ones;
  }
  return result;
};

export const digitSum = (n: number) => {
  let num = n;
  let result = 0;
  for (let i = 0; i < numOfDigits(n) + 1; i++) {
    const ones = num % 10;
    num = Math.floor(num / 10);
    result += ones;
  }
  return result;
};

export const isDivisible = (n: number, d: number) => {
  return n % d === 0;
};

export const isInt = (n: number) => {
  return Math.floor(n) === n;
};
