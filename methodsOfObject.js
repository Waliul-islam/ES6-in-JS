let mobile = {
  brand: "Iphone",
  price: 100000,
  color: "Gold",
  year: 2025,
};

console.log(Object.keys(mobile));
console.log(Object.values(mobile));
console.log(Object.entries(mobile));
// Object.freeze(mobile);
delete mobile.year;
console.log(mobile);
