const number = [2, 4, 6, 8, 15];
const squareNumber = number.map(num => num * num);
console.log(squareNumber);

// over an object

let cars= [
    {
    brand: "Toyota",
    model: "Corolla",
    year: 2025
},
    {
    brand: "Benz",
    model: "Corolla",
    year: 2025
}
]

const brand = cars.map(car => car.brand);
console.log(brand);