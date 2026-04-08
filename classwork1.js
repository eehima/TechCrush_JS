// using ,map method get a new array when the number is doubled
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((number) => {
    return number * 2;
});
console.log(doubledNumbers);

// filter method to get the number greater than 300
const scores = [250, 300, 350, 200, 400, 180, 160];
const highScores = scores.filter((score) => {
    return score >= 300;
});
console.log(highScores);

// get the sum of all the numbers in the array using reduce method
const cartPrices = [2000, 3000, 400, 100, 600];
const totalPrice = cartPrices.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
console.log(totalPrice);

// add green to the end of the array using push method
const colors = ["blue", "yellow", "red"];
colors.push("green");
console.log(colors);
