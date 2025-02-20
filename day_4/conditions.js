//LEVEL ONE

// 1. Age check for driving
let age = prompt("Enter your age:");

if (age >= 18) {
    // If the user is 18 or older, they are old enough to drive
    console.log("You are old enough to drive.");
} else {
    // If the user is younger than 18, calculate how many years they have left
    let yearsLeft = 18 - age;
    console.log("You are left with " + yearsLeft + " years to drive.");
}

// 2. Age comparison between me and you
let myAge = 25; // You can change this to your actual age
let yourAge = prompt("Enter your age:");

if (yourAge > myAge) {
    // If the user's age is greater, log that they are older
    console.log("You are older than me.");
} else if (yourAge < myAge) {
    // If the user's age is smaller, log that you are older
    console.log("I am older than you.");
} else {
    // If both ages are the same, log that you are the same age
    console.log("We are the same age.");
}

// 3. Comparing two numbers (a and b) using if else and ternary operator
let a = 4;
let b = 3;

// Using if else to compare a and b
if (a > b) {
    console.log(a + " is greater than " + b);
} else {
    console.log(a + " is less than " + b);
}

// Using ternary operator to compare a and b
console.log(a > b ? a + " is greater than " + b : a + " is less than " + b);

// 4. Checking if a number is even or odd
let number = prompt("Enter a number:");

if (number % 2 === 0) {
    // If the number is divisible by 2, it is even
    console.log(number + " is an even number.");
} else {
    // If not, it is odd
    console.log(number + " is an odd number.");
}

//LEVEL TWO
// 1. Assigning grades based on the score
let score = prompt("Enter the student's score:");

if (score >= 80 && score <= 100) {
    console.log("Grade: A");
} else if (score >= 70 && score <= 89) {
    console.log("Grade: B");
} else if (score >= 60 && score <= 69) {
    console.log("Grade: C");
} else if (score >= 50 && score <= 59) {
    console.log("Grade: D");
} else if (score >= 0 && score <= 49) {
    console.log("Grade: F");
} else {
    console.log("Invalid score entered.");
}

// 2. Checking the season based on the month
let month = prompt("Enter the month:");

if (month === "September" || month === "October" || month === "November") {
    console.log("The season is Autumn.");
} else if (month === "December" || month === "January" || month === "February") {
    console.log("The season is Winter.");
} else if (month === "March" || month === "April" || month === "May") {
    console.log("The season is Spring.");
} else if (month === "June" || month === "July" || month === "August") {
    console.log("The season is Summer.");
} else {
    console.log("Invalid month entered.");
}

// 3. Checking if the day is a weekend or working day
let day = prompt("What is the day today?").toLowerCase(); // Convert input to lowercase to handle case-insensitive input

if (day === "saturday" || day === "sunday") {
    console.log(day.charAt(0).toUpperCase() + day.slice(1) + " is a weekend.");
} else if (day === "monday" || day === "tuesday" || day === "wednesday" || day === "thursday" || day === "friday") {
    console.log(day.charAt(0).toUpperCase() + day.slice(1) + " is a working day.");
} else {
    console.log("Invalid day entered.");
}


//LEVEL THREE
// Function to check if the year is a leap year
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true; // It's a leap year
    } else {
        return false; // Not a leap year
    }
}

// Program to tell the number of days in a month
let month = prompt("Enter a month:").toLowerCase(); // Convert the input to lowercase to handle case-insensitivity
let year = parseInt(prompt("Enter the year:")); // Prompt for the year to check leap year

let days;

if (month === "january" || month === "march" || month === "may" || month === "july" || month === "august" || month === "october" || month === "december") {
    days = 31; // These months have 31 days
} else if (month === "april" || month === "june" || month === "september" || month === "november") {
    days = 30; // These months have 30 days
} else if (month === "february") {
    // February has 28 days in a common year, or 29 in a leap year
    if (isLeapYear(year)) {
        days = 29;
    } else {
        days = 28;
    }
} else {
    console.log("Invalid month entered.");
}

// Output the result
if (days) {
    console.log(`${month.charAt(0).toUpperCase() + month.slice(1)} has ${days} days.`);
}
