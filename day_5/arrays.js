//LEVEL ONE

// 1. Declare an empty array
let emptyArray = [];

// 2. Declare an array with more than 5 elements
let numbersArray = [1, 2, 3, 4, 5, 6, 7];

// 3. Find the length of the array
console.log("Length of numbersArray: ", numbersArray.length);

// 4. Get the first item, the middle item, and the last item of the array
let firstItem = numbersArray[0];
let middleItem = numbersArray[Math.floor(numbersArray.length / 2)];
let lastItem = numbersArray[numbersArray.length - 1];
console.log("First item: ", firstItem);
console.log("Middle item: ", middleItem);
console.log("Last item: ", lastItem);

// 5. Declare an array with mixed data types and find the length
let mixedDataTypes = [42, "Hello", true, null, undefined, { name: "John" }];
console.log("Length of mixedDataTypes array: ", mixedDataTypes.length);

// 6. Declare an array of IT companies
let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

// 7. Print the array using console.log()
console.log("IT Companies: ", itCompanies);

// 8. Print the number of companies in the array
console.log("Number of companies: ", itCompanies.length);

// 9. Print the first, middle, and last companies
let firstCompany = itCompanies[0];
let middleCompany = itCompanies[Math.floor(itCompanies.length / 2)];
let lastCompany = itCompanies[itCompanies.length - 1];
console.log("First company: ", firstCompany);
console.log("Middle company: ", middleCompany);
console.log("Last company: ", lastCompany);

// 10. Print out each company
itCompanies.forEach(company => {
    console.log(company);
});

// 11. Change each company name to uppercase one by one and print them out
itCompanies.forEach((company, index) => {
    itCompanies[index] = company.toUpperCase();
    console.log(itCompanies[index]);
});

// 12. Print the array like a sentence
console.log(itCompanies.join(", ") + " are big IT companies.");

// 13. Check if a certain company exists in the itCompanies array
let companyToCheck = "Google"; // Change this to any company name you want to check
if (itCompanies.includes(companyToCheck)) {
    console.log(companyToCheck + " exists in the IT companies array.");
} else {
    console.log(companyToCheck + " is not found.");
}

// 14. Filter out companies which have more than one 'o' without using filter method
let companiesWithMoreThanOneO = [];
for (let company of itCompanies) {
    let oCount = (company.match(/o/g) || []).length; // Count occurrences of 'o'
    if (oCount > 1) {
        companiesWithMoreThanOneO.push(company);
    }
}
console.log("Companies with more than one 'o': ", companiesWithMoreThanOneO);

// 15. Sort the array using sort() method
itCompanies.sort();
console.log("Sorted IT companies: ", itCompanies);

// 16. Reverse the array using reverse() method
itCompanies.reverse();
console.log("Reversed IT companies: ", itCompanies);

// 17. Slice out the first 3 companies from the array
let firstThreeCompanies = itCompanies.slice(0, 3);
console.log("First 3 companies: ", firstThreeCompanies);

// 18. Slice out the last 3 companies from the array
let lastThreeCompanies = itCompanies.slice(-3);
console.log("Last 3 companies: ", lastThreeCompanies);

// 19. Slice out the middle IT company or companies
let middleCompanies;
if (itCompanies.length % 2 === 0) {
    middleCompanies = itCompanies.slice(itCompanies.length / 2 - 1, itCompanies.length / 2 + 1);
} else {
    middleCompanies = itCompanies.slice(Math.floor(itCompanies.length / 2), Math.floor(itCompanies.length / 2) + 1);
}
console.log("Middle company or companies: ", middleCompanies);

// 20. Remove the first IT company from the array
itCompanies.shift();
console.log("After removing the first company: ", itCompanies);

// 21. Remove the middle IT company or companies from the array
if (itCompanies.length % 2 === 0) {
    itCompanies.splice(itCompanies.length / 2 - 1, 2);
} else {
    itCompanies.splice(Math.floor(itCompanies.length / 2), 1);
}
console.log("After removing the middle company or companies: ", itCompanies);

// 22. Remove the last IT company from the array
itCompanies.pop();
console.log("After removing the last company: ", itCompanies);

// 23. Remove all IT companies from the array
itCompanies = [];
console.log("After removing all companies: ", itCompanies);


//LEVEL TWO
// countries.js
const countries = ['USA', 'Canada', 'Germany', 'Ethiopia', 'Australia', 'India', 'Nigeria'];
export { countries };

// web_techs.js
const webTechs = ['HTML', 'CSS', 'JavaScript', 'React', 'Node', 'MongoDB', 'Sass'];
export { webTechs };

// main.js
import { countries } from './countries.js';
import { webTechs } from './web_techs.js';

// Task 1: Remove punctuations, convert string to array, and count the number of words
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
let words = text.replace(/[.]/g, '').split(' ');
console.log(words);
console.log(words.length);

// Task 2: Shopping Cart Manipulation
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// Add 'Meat' if not already added at the beginning
if (!shoppingCart.includes('Meat')) shoppingCart.unshift('Meat');

// Add 'Sugar' at the end if not already added
if (!shoppingCart.includes('Sugar')) shoppingCart.push('Sugar');

// Remove 'Honey' if allergic
const allergicToHoney = true;
if (allergicToHoney) {
  const index = shoppingCart.indexOf('Honey');
  if (index !== -1) shoppingCart.splice(index, 1);
}

// Modify 'Tea' to 'Green Tea'
const teaIndex = shoppingCart.indexOf('Tea');
if (teaIndex !== -1) shoppingCart[teaIndex] = 'Green Tea';

console.log(shoppingCart);

// Task 3: Countries array check for 'Ethiopia'
if (countries.includes('Ethiopia')) {
  console.log('ETHIOPIA');
} else {
  countries.push('Ethiopia');
  console.log(countries);
}

// Task 4: WebTechs array check for 'Sass'
if (webTechs.includes('Sass')) {
  console.log('Sass is a CSS preprocess');
} else {
  webTechs.push('Sass');
  console.log(webTechs);
}

// Task 5: Concatenate frontEnd and backEnd into fullStack
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];

const fullStack = [...frontEnd, ...backEnd];
console.log(fullStack);


//LEVEL THREE
// Given array of ages
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array
ages.sort((a, b) => a - b);

// Task 1: Find min and max age
const minAge = ages[0];
const maxAge = ages[ages.length - 1];
console.log("Min age:", minAge);
console.log("Max age:", maxAge);

// Task 2: Find the median age
let medianAge;
if (ages.length % 2 === 0) {
  const mid1 = ages[ages.length / 2 - 1];
  const mid2 = ages[ages.length / 2];
  medianAge = (mid1 + mid2) / 2;
} else {
  medianAge = ages[Math.floor(ages.length / 2)];
}
console.log("Median age:", medianAge);

// Task 3: Find the average age
const sum = ages.reduce((acc, age) => acc + age, 0);
const averageAge = sum / ages.length;
console.log("Average age:", averageAge);

// Task 4: Find the range of the ages
const range = maxAge - minAge;
console.log("Age range:", range);

// Task 5: Compare (min - average) and (max - average) using abs() method
const minMinusAverage = Math.abs(minAge - averageAge);
const maxMinusAverage = Math.abs(maxAge - averageAge);
console.log("Min - Average:", minMinusAverage);
console.log("Max - Average:", maxMinusAverage);

// Given countries array
const countries = ['USA', 'Canada', 'Germany', 'Ethiopia', 'Australia', 'India', 'Nigeria', 'Kenya', 'South Africa', 'Japan', 'China', 'Brazil'];

// Task 6: Slice the first ten countries from the countries array
const firstTenCountries = countries.slice(0, 10);
console.log("First ten countries:", firstTenCountries);

// Task 7: Find the middle country(ies)
const middleIndex = Math.floor(countries.length / 2);
let middleCountry;
if (countries.length % 2 === 0) {
  middleCountry = [countries[middleIndex - 1], countries[middleIndex]];
} else {
  middleCountry = countries[middleIndex];
}
console.log("Middle country(ies):", middleCountry);

// Task 8: Divide the countries array into two equal arrays
let firstHalf, secondHalf;
if (countries.length % 2 === 0) {
  firstHalf = countries.slice(0, middleIndex);
  secondHalf = countries.slice(middleIndex);
} else {
  firstHalf = countries.slice(0, middleIndex + 1);
  secondHalf = countries.slice(middleIndex + 1);
}
console.log("First half of countries:", firstHalf);
console.log("Second half of countries:", secondHalf);

