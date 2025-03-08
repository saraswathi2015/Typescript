//index signatures

// interface TransctionObj {
//   pizza: number;
//   books: number;
//   job: number;
// }

interface TransctionObj {
  [index: string]: number;
}

const todayTransctions: TransctionObj = {
  pizza: -10,
  books: -5,
  job: 50,
};

console.log(todayTransctions.pizza);
console.log(todayTransctions);

let props: string = "pizza";
console.log(todayTransctions[props]);

const todaysNet = (transactions: TransctionObj): number => {
  let total = 0;
  for (const transaction in transactions) {
    total += transactions[transaction];
  }
  return total;
};
console.log(todaysNet(todayTransctions));

////////////////////////////

interface Student {
  // [key: string]: string | number | number[] | undefined;
  name: string;
  gpa: number;
  classes?: number[];
}

const student: Student = {
  name: "buu",
  gpa: 7,
  classes: [100, 200],
};

// console.log(student.test);
console.log(student);

for (const key in student) {
  // console.log(`${key} : ${student[key]}`)
  console.log(`${key} : ${student[key as keyof Student]}`);
}

Object.keys(student).map((key) => {
  console.log(student[key as keyof typeof student]);
});

const logStudentkey = (student: Student, key: keyof Student): void => {
  console.log(`Student ${key} : ${student[key]}`);
};

logStudentkey(student, "name");

//////////////////

type Streams = "salary" | "bonus" | "sidd";

type incomes = Record<Streams, number | string>;

const monthlyIncome: incomes = {
  salary: 500,
  bonus: 100,
  sidd: 250,
};

for (const revenue in monthlyIncome) {
  console.log(monthlyIncome[revenue as keyof incomes]);
}
