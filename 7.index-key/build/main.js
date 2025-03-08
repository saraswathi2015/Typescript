"use strict";
//index signatures
const todayTransctions = {
    pizza: -10,
    books: -5,
    job: 50,
};
console.log(todayTransctions.pizza);
console.log(todayTransctions);
let props = "pizza";
console.log(todayTransctions[props]);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todayTransctions));
const student = {
    name: "buu",
    gpa: 7,
    classes: [100, 200],
};
// console.log(student.test);
console.log(student);
for (const key in student) {
    // console.log(`${key} : ${student[key]}`)
    console.log(`${key} : ${student[key]}`);
}
Object.keys(student).map((key) => {
    console.log(student[key]);
});
const logStudentkey = (student, key) => {
    console.log(`Student ${key} : ${student[key]}`);
};
logStudentkey(student, "name");
