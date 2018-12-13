export const getDigit = (n: number, index: number) => {
  const power = 10 ** index;
  const diff = n % (power * 10);
  return (diff - diff % power) / power;
};

export const digits = (n: number) => {
  const result: number[] = [];
  const len = Math.floor(Math.log10(n));
  for (let i = len; i >= 0; i--) {
    result.push(getDigit(n, i));
  }
  return result;
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
  for (let i = 0; i < Math.log10(n); i++) {
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
