
// Normal function

function sum(a, b) {
    return a + b;
}

// with arrow function

// For single line
const sum2 = (a, b) => a + b;
console.log(sum2(68, 28))


// for multiple line code (return must)

const sum3 = (a, b) => {
    const result = a + b;
    return result
}

console.log(sum3(100, 50));