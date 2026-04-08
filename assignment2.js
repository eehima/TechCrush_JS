// Question 1:
const str = "Nigeria is awesome";
// extract Nigeria using substring
const country = str.substring(0, 7);
console.log(country); 

// extract awesome using slice
const adjective = str.slice(11);
console.log(adjective); 

// extract is using slice
const words = str.slice(8 , 10);
console.log(words);

// Question 2:
const names = "john,jane,doe";
// split into an array using comma
const arrayOfnames = names.split(" , ")
console.log(arrayOfnames);

// join the array into a string using space
const joinedNames = arrayOfnames.join(" ");
console.log(joinedNames);
// split by /
const path = "/user/home/docs";
const url = path.split("/");
console.log(url);
// get home using split and index.
const home = url[2];
console.log(home);

// Question 3:
const email = "user@example.com";
// get user using slice
const userName = email.slice(0, 4);
console.log(userName);
// check if it ends with .com
const isValidEmail = email.endsWith(".com");
console.log(isValidEmail);
// replace @ with at
const replaceEmail = email.replace("@" , "AT")
console.log(replaceEmail);
