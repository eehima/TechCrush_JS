// length of a sting
let stringText = "Hello, My name is Ephraim";

console.log(stringText.length);
console.log(stringText.toUpperCase());
console.log(stringText.toLowerCase());

// trim method
let str = " Hello, World! ";
let trimmedStr = str.trim();
let frontTrimmedStr = str.trimStart();
let endTrimmedStr = str.trimEnd();
console.log(trimmedStr);
console.log(frontTrimmedStr);
console.log(endTrimmedStr);


let signupName = " Ephraim";
let signinName = "Ephraim";

if ((signupName.trim()) === signinName) {
    console.log("Welcome back, " + signinName + "!");
} else {
    console.log("Invalid username. Please try again.");
};

// indexOf and includes

let user_email = "ehima87@gmail.com";
let email_index = user_email.indexOf("@");

console.log(email_index); // Output: 6

let email_contains_at = user_email.includes("@");
console.log(email_contains_at); // Output: true

let userName = "techCrush Ephraim 6";

let starts = userName.startsWith("techCrush");
console.log(starts); // Output: true

let ends = userName.endsWith("6");
console.log(ends); // Output: true


// slice and substring

let testString = "my name is Ephraim!";
let slicedString = testString.slice(0, 10);
let substringString = testString.substring(0, 10);
console.log(slicedString); // Output: "my name is"
console.log(substringString); // Output: "my name is"

// replace and replace all methods

let text = "Ephraim is a techie, Ephraim loves coding, Ephraim is learning JavaScript.";
let replacedText = text.replace("Ephraim", "He");
let replacedAllText = text.replaceAll("Ephraim", "He");
console.log(replacedText);
console.log(replacedAllText);

// split method
const sentence = "LANUAGES: JavaScript, Python, Java, C++";
const words = sentence.split(" ");
console.log(words); // Output: ["LANGUAGES:", "JavaScript", " Python", " Java", " C++"

let example = "she is a girl , she is a teacher, she loves eating.";
console.log(example.split("she")); // Output