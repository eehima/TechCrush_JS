// Create a variables for the following
let customerName = "Ephraim";
console.log(customerName); // Output: Ephraim
let customerAge = 25;
let bookTitle = "The Richest Man in Babylon";
console.log(bookTitle);
let bookPrice = 200;
let quantity = 3;
let isStudent = true;

// calculate the total price of the books
let totalPrice = bookPrice * quantity;
console.log("Total Price: " + totalPrice); // Output: Total Price: 600

// Check if the customer is more than 18 years old using comparison operator
let isAdult = customerAge > 18;
console.log("Is the customer an adult? " + isAdult); // Output: Is the customer an adult? true
let buyingManyBooks = quantity > 3;
console.log("Is the customer buying more than 3 books? " + buyingManyBooks); // Output: Is the customer buying more than 3 books? false
let isBookFiveThousand = bookPrice === 5000;
console.log("Is the book price 5000? " + isBookFiveThousand); // Output: Is the book price 5000? false

// customer order using objects

const customerOrder = {
    customerName: "Ephraim",
    bookTitle: "The Richest Man in Babylon",
    quantity: 3,
    totalPrice
};

const arrayofBooks =[
    {
        customerName: "Ephraim",
        bookTitle: "The Richest Man in Babylon",
        quantity: 3,
        totalPrice
    },
    {
        customerName: "Helen",
        bookTitle: "The Richest Man in Babylon",
        quantity: 3,
        totalPrice
    },
    {
        customerName: "Gideon",
        bookTitle: "The Richest Man in Babylon",
        quantity: 3,
        totalPrice
    }
];
