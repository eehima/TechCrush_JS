let items = ["milk" , "milo" , "rice" , "garri"];
console.log(items[0]);
console.log(items.length);

// ForEach
let fruits = ["apple" , "banana" , "orange" , "grape" , "mango"];
let names = ["Ephraim" , "Helen" , "Gideon" , "Priscillia" , "Alice"];

names.forEach(function(name){
    console.log("TECH_CRUSH_2026 " + name);
});

fruits.forEach(function(fruit){
    console.log("i like " + fruit);
});

let scores = [85, 90, 78, 92, 88];
let newScores = scores.map( x => {
   console.log("as a good techer, i will add 5 marks to each score");
    return x + 5;
});
console.log(newScores); // Output: [90, 95, 83, 97, 93]

let students = ["Ephraim" , "Helen" , "Gideon" , "Priscillia" , "Alice"];

let nameTag = students.map(function(tag){
    return "TechCrush2026 " + tag;
});
console.log(nameTag);
  
// filter
let meritScore = [50, 55, 60, 65, 70];
let passMarks = meritScore.filter(function(score){
    return score >= 60;
});
console.log(passMarks); // Output: [60, 65, 70]

// find

const studentsNames = ["Ephraim" , "Helen" , "Gideon" , "Priscillia" , "Alice" , "Ephraim"];
const foundName = studentsNames.find((name ) => {
    return name === "Ephraim"
});
console.log(foundName); // Output: "Ephraim"

// reduce

const cartPrices = [1500, 800, 2200, 450, 1000];
const totalPrice = cartPrices.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
console.log(totalPrice); // Output: 5950

// push , pop , shift , unshift

let colors = ["red", "green", "blue"];
colors.push("yellow");
console.log(colors); // Output: ["red", "green", "blue", "yellow"]

// pop
let lastColor = colors.pop();
console.log(lastColor); // Output: "yellow"

// shift
let firstColor = colors.shift();
console.log(firstColor); // Output: "red"

// unshift
colors.unshift("purple");
console.log(colors); // Output: ["purple", "green", "blue"]

