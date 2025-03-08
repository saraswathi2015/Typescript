class Coder {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Peeps {
  static count: number = 0;

  static getCount(): number {
    return Peeps.count;
  }

  public id: number;

  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count;
  }
}

const john = new Peeps("john");
const steve = new Peeps("steve");
const amy = new Peeps("amy");

console.log(Peeps.count);
console.log(steve.id);

class Bands {
  private dataState: string[];

  constructor() {
    this.dataState = [];
  }

  public get data(): string[] {
    return this.dataState;
  }

  public set data(value: string[]) {
    if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
      this.dataState = value;
      return;
    } else throw new Error("param is not an array of strings");
  }
}

const MyBands = new Bands();
MyBands.data = ["neil", "led"];

MyBands.data = [...MyBands.data, "cccc"];
console.log(MyBands.data);
