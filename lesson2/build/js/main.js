"use strict";
// let myName: string = "dave";
// let stringArr = ["one", "hey"];
let guitars = ["start", 122];
// let mixie = ["nn", 55, true];
// stringArr[0] = "john";
// stringArr.push("bb");
// console.log(stringArr);
// guitars[0] = "jim";
// console.log(guitars);
let obj;
obj = [];
console.log(typeof obj);
obj = guitars;
console.log(obj);
const exampleObj = {
    prop1: "dave",
    prop2: "true",
};
let evh = {
    name: "edd",
    active: false,
    albums: [1984, "kk"],
};
console.log("evh", evh);
const greetGuitarist = (guitarist) => {
    return `hello ${guitarist.name} and born ${guitarist.albums} active ${guitarist.active}`;
};
console.log(greetGuitarist(evh));
