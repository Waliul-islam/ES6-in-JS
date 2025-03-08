const numbers = [5, 65, 85, 71, 46];

// forEach
numbers.forEach(number => {
    console.log(number * number);
});

// filter
const greaterNumber = numbers.filter(number => number > 50);
console.log(greaterNumber);

// find
const lowerNumber = numbers.find(numbers => numbers < 40);
console.log(typeof lowerNumber);

// replace (only used in Strings)

let friends = "asad";
let newFriends = friends.replace("d", "dullah");
console.log(newFriends)