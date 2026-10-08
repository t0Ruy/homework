const firstName = "David";
const lastName = "McCall";
const isStudent = true;

const age = 25;
const currentYear = 2026;
const birthYear = currentYear - age;

console.log(
  "меня зовут",
  firstName,
  lastName,
  " я родился в",
  birthYear,
  "году", //решил  просто так добавить чтобы переменная не сидела без дела :)
  "мне",
  age,
  "лет.",
  "Я ученик курса:",
  isStudent,
);

let a = "123";
let b = +"453";
let c = Number("789");
let d = Boolean(0);
let e = Boolean(" ");
let result = a + b + c + d + e;
console.log(result);
