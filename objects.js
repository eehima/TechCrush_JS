// create a new object
let obj = {
    name: "Ephraim",
    age: 25,
    profession: "Software Developer"
};
let student = {
    name: "Helen Amobeda",
    age: 21,
    department: "Computer Science",
    isEnrolled: true
};
console.log(student.name); // Output: "Ngozi Adeyemi"
console.log(student["name"]);

let employee = {
    name: "Ekojawe Ephraim",
    role: "Frontend Developer",
    salary: 450000,
    city: "Lagos"
};

let newName = employee.name;
let newRole = employee.role;

const {name , salary } = employee;
console.log(name);
console.log(salary);

let courses = {
    CSC401 : "Data Structures",
    CSC402 : "Algorithms",
    CSC403 : "Operating Systems",
    CSC404 : "Database Systems"
};

let {CSC401 : CSC400} = courses;
console.log(CSC400);

let person = {
    name: "Amina",
    opay: true,
};
console.log(person);
let {opay: palmpay , name: myName} = person;
console.log(palmpay);
console.log(myName);

let profile = {
    name: "Ada",
    age: 22
};
let updatedProfile = {
    ...profile,
    city: "Abuja"
};
console.log(updatedProfile);
const {nombre, ...rest} = {
    nombre: "Ephraim",
    age: 25,
    city: "Lagos"
};
console.log(nombre);
console.log(rest);

const user = {
    name: "Ephraim",
    password: "12345",
    isMale: true,
    city: "Lagos",
    age: 25
};
console.log(Object.keys(user));
console.log(Object.values(user))
console.log(Object.entries(user));

// for in loop to iterate over the properties of an object
for (let key in user) {
    console.log( "thesee are the keys : " + key);
    console.log("these are the values : " + user[key]);
};


