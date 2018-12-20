import * as _ from "lodash";

export const tail = (arr: any[], length = 1) => arr[arr.length - length];
export const rest = ([f, ...rst]: any[]) => rst;
export const isUniq = (arr: number[]) => _.uniq(arr).length === arr.length;

export function rf<A extends any[], R>(fn: (call: (...args: A) => A, ...args: A) => R | A): (...args: A) => R {
  let keepGoing = false;
  function call(...args: A) {
    keepGoing = true;
    return args;
  }

  return (...args: A): R => {
    let res = fn(call, ...args);
    while (keepGoing) {
      keepGoing = false;
      res = fn(call, ...res as A);
    }
    return res as R;
  };
}
