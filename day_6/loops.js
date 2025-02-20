//LEVEL ONE
// 1. Iterate 0 to 10 using for loop
for (let i = 0; i <= 10; i++) {
    console.log(i);
  }
  
  // 2. Iterate 0 to 10 using while loop
  let i = 0;
  while (i <= 10) {
    console.log(i);
    i++;
  }
  
  // 3. Iterate 0 to 10 using do-while loop
  let j = 0;
  do {
    console.log(j);
    j++;
  } while (j <= 10);
  
  // 4. Iterate 10 to 0 using for loop
  for (let i = 10; i >= 0; i--) {
    console.log(i);
  }
  
  // 5. Iterate 10 to 0 using while loop
  let k = 10;
  while (k >= 0) {
    console.log(k);
    k--;
  }
  
  // 6. Iterate 10 to 0 using do-while loop
  let l = 10;
  do {
    console.log(l);
    l--;
  } while (l >= 0);
  
  // 7. Iterate 0 to n using for loop (n = 10 as an example)
  const n = 10;
  for (let i = 0; i <= n; i++) {
    console.log(i);
  }
  
  // 8. Print pattern using loop
  let pattern = '';
  for (let i = 1; i <= 7; i++) {
    pattern += '#';
    console.log(pattern);
  }
  
  // 9. Print multiplication table using loop
  for (let i = 0; i <= 10; i++) {
    console.log(`${i} x ${i} = ${i * i}`);
  }
  
  // 10. Print i, i^2, i^3 pattern using loop
  for (let i = 0; i <= 10; i++) {
    console.log(`${i}   ${i * i}   ${i * i * i}`);
  }
  
  // 11. Print only even numbers from 0 to 100 using for loop
  for (let i = 0; i <= 100; i += 2) {
    console.log(i);
  }
  
  // 12. Print only odd numbers from 0 to 100 using for loop
  for (let i = 1; i <= 100; i += 2) {
    console.log(i);
  }
  
  // 13. Print only prime numbers from 0 to 100 using for loop
  for (let num = 2; num <= 100; num++) {
    let isPrime = true;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) console.log(num);
  }
  
  // 14. Print the sum of all numbers from 0 to 100 using for loop
  let sum = 0;
  for (let i = 0; i <= 100; i++) {
    sum += i;
  }
  console.log("The sum of all numbers from 0 to 100 is:", sum);
  
  // 15. Print the sum of all evens and odds from 0 to 100
  let evenSum = 0, oddSum = 0;
  for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
      evenSum += i;
    } else {
      oddSum += i;
    }
  }
  console.log(`The sum of all evens from 0 to 100 is: ${evenSum}`);
  console.log(`The sum of all odds from 0 to 100 is: ${oddSum}`);
  
  // 16. Print sum of evens and sum of odds as array
  console.log([evenSum, oddSum]);
  
  // 17. Generate an array of 5 random numbers
  const randomNumbers = [];
  for (let i = 0; i < 5; i++) {
    randomNumbers.push(Math.floor(Math.random() * 100));
  }
  console.log(randomNumbers);
  
  // 18. Generate an array of 5 unique random numbers
  const uniqueRandomNumbers = [];
  while (uniqueRandomNumbers.length < 5) {
    const num = Math.floor(Math.random() * 100);
    if (!uniqueRandomNumbers.includes(num)) {
      uniqueRandomNumbers.push(num);
    }
  }
  console.log(uniqueRandomNumbers);
  
  // 19. Generate a six-character random ID
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let randomID = '';
  for (let i = 0; i < 6; i++) {
    randomID += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  console.log(randomID);
  
  //LEVEL TWO
  // 1. Generate a random id with any number of characters
function generateRandomID(length) {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let randomID = '';
    for (let i = 0; i < length; i++) {
      randomID += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return randomID;
  }
  console.log(generateRandomID(12)); // Example: 'fe3jo1gl124g'
  
  // 2. Generate a random hexadecimal color
  function generateRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  console.log(generateRandomHexColor()); // Example: '#ee33df'
  
  // 3. Generate a random rgb color
  function generateRandomRgbColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
  }
  console.log(generateRandomRgbColor()); // Example: 'rgb(240,180,80)'
  
  // 4. Create the array with countries in uppercase
  const countries = [
    'Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 
    'Hungary', 'Ireland', 'Japan', 'Kenya'
  ];
  const upperCaseCountries = countries.map(country => country.toUpperCase());
  console.log(upperCaseCountries);
  
  // 5. Create an array for countries' lengths
  const countriesLength = countries.map(country => country.length);
  console.log(countriesLength);
  
  // 6. Create the array of arrays with country, abbreviation, and length
  const countriesArray = countries.map(country => [
    country, 
    country.slice(0, 3).toUpperCase(), 
    country.length
  ]);
  console.log(countriesArray);
  
  // 7. Check countries containing the word 'land'
  const countriesWithLand = countries.filter(country => country.includes('land'));
  if (countriesWithLand.length > 0) {
    console.log(countriesWithLand);
  } else {
    console.log('All these countries are without land');
  }
  
  // 8. Check countries ending with 'ia'
  const countriesWithIa = countries.filter(country => country.endsWith('ia'));
  if (countriesWithIa.length > 0) {
    console.log(countriesWithIa);
  } else {
    console.log('These are countries ends without ia');
  }
  
  // 9. Find the country with the biggest number of characters
  const countryWithMaxChars = countries.reduce((longest, current) => 
    current.length > longest.length ? current : longest
  );
  console.log(countryWithMaxChars);
  
  // 10. Find countries with only 5 characters
  const countriesWithFiveChars = countries.filter(country => country.length === 5);
  console.log(countriesWithFiveChars);
  
  // 11. Find the longest word in the webTechs array
  const webTechs = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB'];
  const longestWebTech = webTechs.reduce((longest, current) => 
    current.length > longest.length ? current : longest
  );
  console.log(longestWebTech);
  
  // 12. Create array of arrays with tech name and length
  const webTechsArray = webTechs.map(tech => [tech, tech.length]);
  console.log(webTechsArray);
  
  // 13. Create the acronym MERN using mernStack array
  const mernStack = ['MongoDB', 'Express', 'React', 'Node'];
  const mernAcronym = mernStack.map(tech => tech.charAt(0)).join('');
  console.log(mernAcronym); // 'MERN'
  
  // 14. Iterate through the array and print the items
  const techStack = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];
  for (let tech of techStack) {
    console.log(tech);
  }
  
  // 15. Reverse the order of fruit array without using reverse method
  const fruits = ['banana', 'orange', 'mango', 'lemon'];
  let reversedFruits = [];
  for (let i = fruits.length - 1; i >= 0; i--) {
    reversedFruits.push(fruits[i]);
  }
  console.log(reversedFruits);
  
  // 16. Print all the elements of the fullStack array
  const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ];
  fullStack.forEach(stack => stack.forEach(item => console.log(item.toUpperCase())));

  
  //LEVEL THREE
// Original countries array
const countries = [
    'Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 
    'Hungary', 'Ireland', 'Japan', 'Kenya'
  ];
  
  // 1. Copy countries array (Avoid mutation)
  const countriesCopy = [...countries]; // Create a copy using the spread operator
  
  // 2. Sort the copied array and store in a variable sortedCountries
  const sortedCountries = [...countries].sort();
  console.log(sortedCountries);
  
  // 3. Sort the webTechs array and mernStack array
  const webTechs = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB'];
  const mernStack = ['MongoDB', 'Express', 'React', 'Node'];
  
  const sortedWebTechs = [...webTechs].sort();
  const sortedMernStack = [...mernStack].sort();
  
  console.log(sortedWebTechs); // Sorted webTechs array
  console.log(sortedMernStack); // Sorted mernStack array
  
  // 4. Extract all the countries containing the word 'land' and print it as an array
  const countriesWithLand = countries.filter(country => country.includes('land'));
  console.log(countriesWithLand); // ['Finland', 'Ireland', 'Iceland']
  
  // 5. Find the country containing the highest number of characters in the countries array
  const longestCountry = countries.reduce((longest, current) => 
    current.length > longest.length ? current : longest
  );
  console.log(longestCountry); // 'Ethiopia'
  
  // 6. Extract all the countries containing only four characters and print it as an array
  const countriesWithFourChars = countries.filter(country => country.length === 4);
  console.log(countriesWithFourChars); // ['Japan', 'Kenya']
  
  // 7. Extract all the countries containing two or more words and print it as an array
  // For this, we assume countries with two or more words are those with spaces.
  const countriesWithTwoOrMoreWords = countries.filter(country => country.includes(' '));
  console.log(countriesWithTwoOrMoreWords); // Example might be countries with multiple words like 'New York', 'South Korea', etc., if applicable
  
  // 8. Reverse the countries array, capitalize each country, and store it as an array
  const reversedCapitalizedCountries = [...countries]
    .reverse()
    .map(country => country.toUpperCase());
  
  console.log(reversedCapitalizedCountries); // Example: ['KENYA', 'JAPAN', 'IRELAND', ...]
  