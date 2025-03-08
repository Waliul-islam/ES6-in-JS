// with Object
const user = {
  name: "Rahim",
  address: {
    city: "Dhaka",
    country: "Bangladesh",
  },
};

console.log(user.address.city);
console.log(user.address.country);
console.log(user.address?.district);

// with Array

const number = [
    { name: "rahim", age: 52 },
    { name: "karim", age: 25 },
    
];
console.log(number[0].name);
console.log(number[5]?.name);
