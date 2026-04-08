// 


function greet(){
    console.log("Welcome back Ephraim!");
};

greet();

function greetUser(name){
    console.log("How are you " + name + "!");
};
greetUser("Isioma");


function isStudent(Ephraim){
    return true;
};
console.log(isStudent("Ephraim"));


function addition(a , b){
    return a + b;
}
console.log(addition(5, 10)); // Output: 15

function isAdult(age){
    return age >= 18;
}
console.log(isAdult(25)); 
console.log(isAdult(15)); 
console.log(isAdult(18));