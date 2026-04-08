let msg = " Hello world!";
// trim
console.log(msg.trim()); // Output: "Hello world!"
// startsWith
console.log(msg.startsWith(" Hello")); // Output: true
// endswith
console.log(msg.endsWith("world!")); // Output: true
// toLowerCase
console.log(msg.toLowerCase()); // Output: " hello world!"
// indexOf
console.log(msg.indexOf("world")); // Output: 7
// replace
console.log(msg.replace("world", "Nigeria")); // Output: " Hello Nigeria!"
// replaceAll
console.log(msg.replaceAll("L", "1")); // Output: " Hell0 w0rld!"
// slice
console.log(msg.slice(3, 8)); 
// substring
console.log(msg.substring(3, 8));



let str = "Coding is fun"
let word = str.slice(7,9);
console.log(word); // Output: "is"


const colors = "red, green, blue, yellow";
const comma = colors.split(", ");
console.log(comma);
const joined = comma.join(" - ");
console.log(joined); // Output: "red - green - blue - yellow"


const url = "/api/v1/users";
const slash = url.split("/");
console.log(slash[2]); // Output: "v1"


const email ="test@school.edu"
const words = email.slice(0, 4);
console.log(words); // Output: "test"

const ends = email.endsWith(".edu");
console.log(ends); // Output: true

const replace =email.replace("@" , " at ");
console.log(replace); // Output: "test at school.edu"


const matricNumber = "TECHCRUSH-EPHRAIM-2026";
const splitMatric = matricNumber.split("-");
console.log(splitMatric[1]); // Output: "EPHRAIM"
