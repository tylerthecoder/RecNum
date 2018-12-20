import { digits } from "./number";

export const toRomanNumeral = (x: number) => {
  if (x > 3999) { return "Romans can't count this high"; }
  const numerals = "IVXLCDM".split("");
  return digits(x)
    .slice(-4)
    .reverse()
    .map((n, index) => {
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
