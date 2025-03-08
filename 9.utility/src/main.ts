//utility types

//partial

interface Assignment {
  studentId: string;
  title: string;
  grade: number;
  verified?: boolean;
}

const updateAssignment = (
  assign: Assignment,
  propsToUpdate: Partial<Assignment>
): Assignment => {
  return { ...assign, ...propsToUpdate };
};

const assign1: Assignment = {
  studentId: "com123",
  title: "final project",
  grade: 0,
};

console.log(updateAssignment(assign1, { grade: 60 }));

const assignGraded: Assignment = updateAssignment(assign1, { grade: 90 });

//Required and Readonly

const recordAssignment = (assign: Required<Assignment>): Assignment => {
  //send to database, etc.
  return assign;
};

const assignVerified: Readonly<Assignment> = {
  ...assignGraded,
  verified: true,
};

console.log(recordAssignment({ ...assignGraded, verified: true }));

//Record
const hexColorMap: Record<string, string> = {
  red: "FF0000",
  green: "00FF00",
  blue: "0000FF",
};

type Students = "sara" | "kelly";
type LetterGrades = "A" | "B" | "C" | "D" | "U";

const finalGrades: Record<Students, LetterGrades> = {
  sara: "B",
  kelly: "U",
};

interface Grades {
  assign1: number;
  assign2: number;
}

const gradeData: Record<Students, Grades> = {
  sara: { assign1: 60, assign2: 70 },
  kelly: { assign1: 30, assign2: 10 },
};

//pick and omit

type AssignResult = Pick<Assignment, "studentId" | "grade">;

const score: AssignResult = {
  studentId: "ggg123",
  grade: 70,
};

type AssignPreview = Omit<Assignment, "grade" | "verified">;

const preview: AssignPreview = {
  studentId: "jj12",
  title: "hhh",
};

//Exclude and Extract

type adjustedGrade = Exclude<LetterGrades, "U">;

type highGrades = Extract<LetterGrades, "A" | "B">;

//Nonnullable

type AllPossibleGrades = "dave" | "john" | null | undefined;

type nameOnly = NonNullable<AllPossibleGrades>;

//ReturnType

// type newAssign = { title: string, points: number }

const createNewAssign = (title: string, points: number) => {
  return { title, points };
};

type newAssign = ReturnType<typeof createNewAssign>;

const tsAssign: newAssign = createNewAssign("utility types", 100);

console.log(tsAssign);

//Parameters

type AssignParams = Parameters<typeof createNewAssign>;

const assignArgs: AssignParams = ["Generics", 100];

const tsAssign2: newAssign = createNewAssign(...assignArgs);
console.log(tsAssign2);

//Awaited - helps us with the RetuenType of a promise
