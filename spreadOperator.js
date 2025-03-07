// getting an array & adding two array

const number = [2, 5, 8, 9, 65];
const number2 = [8, 95, 65, 78, 32];
const newNumber = [...number, ...number2];

console.log(newNumber);

// adding property to an object

const car = {
  brand: "Toyota",
  model: "Corolla",
};
const newCar = { ...car, year: 2024 };
console.log(newCar);
