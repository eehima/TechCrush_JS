// if / else statements
let userAge = 16;
if (userAge >= 18) {
    console.log("Welcome to club Naija!");
} else {
    console.log("Sorry, you are too young to enter!");
};


let gender = "female";

if (gender === "female") {
    console.log("Welcome to the ladies' lounge!");
} else if (gender === "male") {
    console.log("Welcome to the gentlemen's lounge!");
} else if (gender === "other") {
    console.log("Welcome to the lounge!");
}else {
    console.log("Invalid gender input!");
}


let userName = "Ephraim";
let userPassword = "password123";

if (userName === "Ephraim" && userPassword === "password123") {
    console.log("Login successful! Welcome, " + userName + "!");
} else if (userName === "Ephraim" || userPassword === "password123") {
    console.log("Login failed! Incorrect username or password.");
} else {
    console.log("Login failed! Invalid username or password.");
};


let voterAge = 18;

if (voterAge >= 18) {
    console.log("You are eligible to vote in the forth coming election.");
} else {
    console.log("You are not eligible to vote.");
};


let temperature = 20;

if (temperature > 30) {
    console.log("It's a hot day! Stay hydrated.");
} else if (temperature >= 20 && temperature <= 30) {
    console.log("It's a pleasant day! Enjoy the weather.");
} else {
    console.log("It's a cold day! Wear warm clothes.");
};