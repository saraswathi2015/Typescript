"use strict";
//Literal types
let myName;
let userName;
//functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg("hello");
logMsg(add(2, 6));
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(6, 5));
//optional parameter
const addAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
logMsg(addAll(1, 2, 3));
const sumAll = (a, b, c = 2) => {
    return a + b + c;
};
logMsg(sumAll(8, 8));
//Rest Parameters
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1, 2, 3));
