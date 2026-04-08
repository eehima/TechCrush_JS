// const names = ["Helen", "Gideon", "Priscillia", "Alice"];
// names.forEach((name) => {
//     console.log(name + " is a naughty girl");
// });

// try and catch
try {
let result = 10 / 0;
console.log(result);
undefinedFunction(); // This will throw an error
console.log("This line will not be executed due to the error above");
} catch (error) {
console.error("An error occurred:", error.message);
};
console.log("The program continues here after handling the error.");


try {
   let age = 25
   console.log(age.length()) 
} catch (error) {
  console.error("An error occurred:", error.message);  
};

// loading user data
function loadUserData(userId) {
    console.log("starting to load data...");
    try {
        if (!userId.startsWith("BAD")) {
            throw new Error("User ID must start with BAD");

        }
        console.log("Data loaded for user: " + userId);
    } catch (error) {
        console.log("Failed:", error.message);
    } finally {
        console.log("Loading complete.Closing connection.");
    };
};

loadUserData("BAD-1234");