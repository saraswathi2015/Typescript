"use strict";
//utility types
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: "com123",
    title: "final project",
    grade: 0,
};
console.log(updateAssignment(assign1, { grade: 60 }));
const assignGraded = updateAssignment(assign1, { grade: 90 });
//Required and Readonly
const recordAssignment = (assign) => {
    //send to database, etc.
    return assign;
};
const assignVerified = Object.assign(Object.assign({}, assignGraded), { verified: true });
console.log(recordAssignment(Object.assign(Object.assign({}, assignGraded), { verified: true })));
//Record
const hexColorMap = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF",
};
const finalGrades = {
    sara: "B",
    kelly: "U",
};
const gradeData = {
    sara: { assign1: 60, assign2: 70 },
    kelly: { assign1: 30, assign2: 10 },
};
const score = {
    studentId: "ggg123",
    grade: 70,
};
const preview = {
    studentId: "jj12",
    title: "hhh",
};
//ReturnType
// type newAssign = { title: string, points: number }
const createNewAssign = (title, points) => {
    return { title, points };
};
const tsAssign = createNewAssign("utility types", 100);
console.log(tsAssign);
const assignArgs = ["Generics", 100];
const tsAssign2 = createNewAssign(...assignArgs);
console.log(tsAssign2);
