// Object destructuring

const person = {
  name: "wali",
  age: 30,
  gender: "male",
};

const { name, age, gender } = person;

console.log(name, age, gender);

// Array Destructuring

const number = [5, 58, 85, 35];
const [a, b, c, d] = number;
console.log(a, b, c, d);