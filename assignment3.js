// Question 1: forEach
const numbers = [2, 4, 6, 8, 10];
numbers.forEach((number) => {
    console.log(number * 2);
});

// Question 2: forEach
const names = ["Esther", "John", "Ada", "Mike"];
names.forEach((name) => {
    console.log("Hello, " + name);
});

// Question 3: map
const numbersArray = [1, 2, 3, 4, 5];
const squaredNumbers = numbersArray.map((number) => {
    return number * number;
})
console.log(squaredNumbers); 

// Question 4: map
const prices = [100, 200, 300];
const discountedPrices = prices.map((price) => {
    return price * 0.9; 
});
console.log(discountedPrices);

// Question 5: filter
const crushScores = [5, 12, 8, 20, 3];
const highScores = crushScores.filter((score) => {
    return score > 10;
});
console.log(highScores);

// Question 6: filter
const ages = [15, 22, 17, 30, 18];
const adults = ages.filter((age) => {
    return age >= 18;
});
console.log(adults);

// Question 7: filter and map Bonus.
const numbersList = [10, 15, 20, 25, 30];
const evenSquares = numbersList.filter((number) => {
    return number > 20;
}).map((number) => {
    return number * 2;
});
console.log(evenSquares);


