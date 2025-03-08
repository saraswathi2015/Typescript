"use strict";
class Coder {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const john = new Peeps("john");
const steve = new Peeps("steve");
const amy = new Peeps("amy");
console.log(Peeps.count);
console.log(steve.id);
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
            this.dataState = value;
            return;
        }
        else
            throw new Error("param is not an array of strings");
    }
}
const MyBands = new Bands();
MyBands.data = ["neil", "led"];
MyBands.data = [...MyBands.data, "cccc"];
console.log(MyBands.data);
