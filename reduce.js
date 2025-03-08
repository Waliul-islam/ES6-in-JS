
let numbers = [2, 5, 8, 14, 18, 25];
let sum = numbers.reduce((acc, current) => acc + current, 0);
console.log(`sum = ${sum}`)

let maxNumber = numbers.reduce((acc, current) => (acc < current ? current : acc), numbers[0]);
console.log(`Max Number = ${maxNumber}`)


const products = [
    { name: "Laptop", price: 50000 },
    { name: "Phone", price: 30000 },
    { name: "Tablet", price: 20000 }
];
  
const totalPrize = products.reduce((acc, product) => (acc + product.price), 0);
console.log(`Total Prize is = ${totalPrize}`);