
let mobile = {
    brand: "Iphone",
    price: 100000,
    color: "Gold",
    year: 2025,
};

// for in loop

for (let key in mobile) {
    console.log(` key: ${key} value: ${mobile[key]}`);
}

// for of loop

for (let [key, value] of Object.entries(mobile)) {
    console.log(`key: ${key} value: ${value}`);
}
