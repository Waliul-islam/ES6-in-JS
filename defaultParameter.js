// function without default parameter

function sum(a, b) {
  return a + b;
}

console.log(sum(10, 20));
// if i check with a single argument it will give error
console.log(sum(15));

// function with default parameter\

function sum2(a, b = 0) {
    return a + b;
}

console.log(sum2(50));

// Another Example

function multiple(a, b = 1) {
    return a * b;
}
console.log(multiple(10))
