
//variables
var firstName = "Dedan";
var lastName = "Ireri";
var country = "Kenya";
var city = "Nairobi";
var isMarried = true;
var year = "2025";

//checking datatypes
typeof(firstName)
typeof(lastName)
typeof(country)
typeof(isMarried)
typeof(year)

//determine if two variables are of same datatype
var number10 = 10;
var string ="10";
if (number = string) {
    console.log("equal")
}else{
    console.log("not equal")
}

var float =parseInt(9.8)
var number10 = 10;
var string ="10";

//determine if two variables are of same datatype
if (number10 = float) {
    console.log("equal")
}else{
    console.log("not equal")
}

//three statements set to truth value
var student = true
var philadelphian = true
var km_settler = true

//three statements set to false value
var finalist = false
var issacharite = false
var lecturer = false

//confirm the result values
console.log(4 > 3)
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')

//find length and compare
var text1 = "python"
var text2 = "jargon"

var length1 =text1.length
var lenght2 = text2.length



console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log((!4 > 3));
console.log((!4 < 3));
console.log(!(false));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));

//year today
const currentYear = new Date().getFullYear();
console.log(currentYear);

//current month
const currentMonth = new Date().getMonth();
console.log(currentMonth);

//current day date
const currentDate = new Date().Date();
console.log(currentDate);

//date as a number
const now = new Date()
console.log(now.getHours()) // 0

//hours now
const now = new Date()
console.log(now.getHours()) // 0

//minutes now
const now = new Date()
console.log(now.getMinutes()) 

//seconds since 1970
const now = new Date();
console.log(now.getTime())


//level 2

//area of triangle
let base = prompt("Enter base: ")
let height = prompt("Enter height: ")
let area = 0.5 *base * height

console.log("The of the triangle: " , area)

//perimeter of triangle
let a = prompt("Enter side a: ")
let b = prompt("Enter side b: ")
let c = prompt("Enter side c: ")
let perimeter = a + b +c

console.log("The perimeter of the triangle is: " , perimeter)

//perimeter and area of rectangle
let length = prompt("Enter length: ")
let width = prompt("Enter width: ")
let rec_perimeter = 2 (length + width)
let rec_area = length * width

//area and circumference of cicle
let radius = prompt("Enter radius: ")
const PI = 5.142
let area = PI *radius *radius
let cicumference = 2 * PI * radius

//print
console.log("Area: " ,area )
console.log("Circumference: ", cicumference )

//calculate slope,x and y intercepts
const x1 = 2, y1 = 2; //first point
const x2 = 6, y2 = 10; //second point

const slope = (y2 - y1) / (x2 - x1);

// Print the slope
console.log("Slope (m):", slope);


//solve quadrartic equation
function calculateY(x) {
    return x * x + 6 * x + 9; // y = x^2 + 6x + 9
  }
  
  // Try different values of x
  for (let x = -5; x <= 5; x++) {
    const y = calculateY(x);
    console.log(`When x = ${x}, y = ${y}`);
  }
  
//calculate pay according to hours worked
const hours = prompt("Enter hours: ")
const rate_per_hour = prompt("Enter rate per hour: ")
let pay = hours * rate_per_hour

//length of my name
const name = "Dedan";

if (name>7){
    console.log("Long")
}else{
    console.log("short")
}

//compare firstname length and my family name
let firstName ="dedan"
let firstNameLen = length.firstName
let surname = "ngaruiya"
let surnameLength = length.surname
if (firstNameLen>surnameLength){
    console.log("Your first name", firstName, "is longer than your family name", surname)
}

//determin who is older
let myAge = 18
let yourAge = 27
let age_diff = yourAge-myAge 
console.log("I am", age_diff, "older than you")

//determine is user can drive
const user_age = prompt("Enter your age: ")
if (user_age>= 18){
    console.log("You are", user_age,"old. You are allowed to drive")
}
