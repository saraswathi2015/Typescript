type one = string;
type two = string | number;
type three = "hello";

//convert to more or less specific
let a: one = "hello";
let b = a as two; // less specific
let c = a as three; //more specific

let d = <one>"world";
let e = <string | number>"world";

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") return a + b;
  return "" + a + b;
};

let myval: string = addOrConcat(2, 2, "concat") as string;

//be careful! TS sees no problem - but a string is returned
let nextVal: number = addOrConcat(2, 2, "concat") as number;
