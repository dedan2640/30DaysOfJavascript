
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

console.log("The of the triangle: " + area)

//perimeter of triangle
let a = prompt("Enter side a: ")
let b = prompt("Enter side b: ")
let c = prompt("Enter side c: ")
let perimeter = a + b +c

console.log("The perimeter of the triangle is: " + perimeter)

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

