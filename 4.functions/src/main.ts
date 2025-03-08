//Type Aliases
type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type Guitarist = {
  name?: string;
  active: boolean;
  albums: (string | number)[];
};

type UserId = stringOrNumber;

//Literal types
let myName: "Dave";

let userName: "Dave";

//functions
const add = (a: number, b: number): number => {
  return a + b;
};

const logMsg = (message: any): void => {
  console.log(message);
};

logMsg("hello");
logMsg(add(2, 6));

// type mathFunction = (a: number, b: number) => number;
interface mathFunction {
  (a: number, b: number): number;
}

let multiply: mathFunction = function (c, d) {
  return c * d;
};
logMsg(multiply(6, 5));

//optional parameter
const addAll = (a: number, b: number, c?: number) => {
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};
logMsg(addAll(1, 2, 3));

const sumAll = (a: number, b: number, c: number = 2): number => {
  return a + b + c;
};
logMsg(sumAll(8, 8));

//Rest Parameters
const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr);
};

logMsg(total(1, 2, 3));

//custom type guard
const isNumber = (value: any): boolean => {
  return typeof value === "number" ? true : false;
};

const numberOrString = (value: number | string): string => {
  if (typeof value === "string") return "string";
  if (isNumber(value)) return "number";
  return createError("this should never happen!");
};
