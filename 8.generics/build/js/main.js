"use strict";
const echo = (arg) => arg;
const isObj = (arg) => {
    return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};
console.log(isObj(true));
console.log(isObj("john"));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: "john" }));
console.log(isObj(null));
const isTrue = (arg) => {
    {
        if (Array.isArray(arg) && !arg.length) {
            return { arg, is: false };
        }
        if (isObj(arg) && !Object.keys(arg).length) {
            return { arg, is: false };
        }
        return { arg, is: !!arg };
    }
};
console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue(true));
console.log(isTrue(1));
console.log(isTrue("dave"));
console.log(isTrue(""));
console.log(isTrue(null));
console.log(isTrue(undefined));
console.log(isTrue({}));
console.log(isTrue({ name: "dave" }));
