//LEVEL ONE
// 1. Declare a function fullName and it prints out your full name.
function fullName() {
    console.log("John Doe");
  }
  fullName(); // Output: John Doe
  
  // 2. Declare a function fullName and it takes firstName, lastName as a parameter and returns your full name.
  function fullNameWithParams(firstName, lastName) {
    return `${firstName} ${lastName}`;
  }
  console.log(fullNameWithParams("John", "Doe")); // Output: John Doe
  
  // 3. Declare a function addNumbers and it takes two parameters and it returns sum.
  function addNumbers(num1, num2) {
    return num1 + num2;
  }
  console.log(addNumbers(5, 7)); // Output: 12
  
  // 4. Function to calculate the area of a rectangle: area = length x width
  function areaOfRectangle(length, width) {
    return length * width;
  }
  console.log(areaOfRectangle(5, 10)); // Output: 50
  
  // 5. Function to calculate the perimeter of a rectangle: perimeter = 2 x (length + width)
  function perimeterOfRectangle(length, width) {
    return 2 * (length + width);
  }
  console.log(perimeterOfRectangle(5, 10)); // Output: 30
  
  // 6. Function to calculate the volume of a rectangular prism: volume = length x width x height
  function volumeOfRectPrism(length, width, height) {
    return length * width * height;
  }
  console.log(volumeOfRectPrism(5, 10, 3)); // Output: 150
  
  // 7. Function to calculate the area of a circle: area = π x r x r
  function areaOfCircle(radius) {
    return Math.PI * radius * radius;
  }
  console.log(areaOfCircle(5)); // Output: 78.53981633974483
  
  // 8. Function to calculate the circumference of a circle: circumference = 2πr
  function circumOfCircle(radius) {
    return 2 * Math.PI * radius;
  }
  console.log(circumOfCircle(5)); // Output: 31.41592653589793
  
  // 9. Function to calculate the density: density = mass / volume
  function density(mass, volume) {
    return mass / volume;
  }
  console.log(density(10, 2)); // Output: 5
  
  // 10. Function to calculate the speed of a moving object: speed = distance / time
  function speed(distance, time) {
    return distance / time;
  }
  console.log(speed(100, 2)); // Output: 50
  
  // 11. Function to calculate the weight: weight = mass x gravity
  function weight(mass) {
    const gravity = 9.81; // in m/s^2
    return mass * gravity;
  }
  console.log(weight(70)); // Output: 687.7
  
  // 12. Function to convert Celsius to Fahrenheit: oF = (oC * 9/5) + 32
  function convertCelsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }
  console.log(convertCelsiusToFahrenheit(0)); // Output: 32
  
  // 13. Function to calculate BMI: bmi = weight / (height * height)
  function bmi(weight, height) {
    const result = weight / (height * height);
    if (result < 18.5) return "Underweight";
    if (result >= 18.5 && result <= 24.9) return "Normal weight";
    if (result >= 25 && result <= 29.9) return "Overweight";
    return "Obese";
  }
  console.log(bmi(70, 1.75)); // Output: Normal weight
  
  // 14. Function to check season based on the month
  function checkSeason(month) {
    const seasons = {
      "December": "Winter", "January": "Winter", "February": "Winter",
      "March": "Spring", "April": "Spring", "May": "Spring",
      "June": "Summer", "July": "Summer", "August": "Summer",
      "September": "Autumn", "October": "Autumn", "November": "Autumn"
    };
    return seasons[month] || "Invalid month";
  }
  console.log(checkSeason("March")); // Output: Spring
  
  // 15. Function to find the maximum of three numbers without using Math.max
  function findMax(a, b, c) {
    if (a >= b && a >= c) return a;
    if (b >= a && b >= c) return b;
    return c;
  }
  console.log(findMax(0, 10, 5)); // Output: 10
  console.log(findMax(0, -10, -2)); // Output: 0
  

  //LEVEL TWO
  // 1. Solve linear equation: ax + by + c = 0
function solveLinEquation(a, b, c) {
    const x = -c / a;
    const y = -c / b;
    return { x, y };
  }
  console.log(solveLinEquation(2, 3, -6)); // Output: { x: 3, y: 2 }
  
  // 2. Solve quadratic equation: ax^2 + bx + c = 0
  function solveQuadEquation(a, b, c) {
    const discriminant = b * b - 4 * a * c;
    if (discriminant > 0) {
      const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      return { root1, root2 };
    } else if (discriminant === 0) {
      const root = -b / (2 * a);
      return { root };
    } else {
      return { 0 };
    }
  }
  console.log(solveQuadEquation(1, 4, 4)); // Output: {-2}
  console.log(solveQuadEquation(1, -1, -2)); // Output: {2, -1}
  console.log(solveQuadEquation(1, 7, 12)); // Output: {-3, -4}
  console.log(solveQuadEquation(1, 0, -4)); // Output: {2, -2}
  console.log(solveQuadEquation(1, -1, 0)); // Output: {1, 0}
  
  // 3. Function to print an array
  function printArray(arr) {
    arr.forEach(item => console.log(item));
  }
  printArray([1, 2, 3, 4]); // Output: 1 2 3 4
  
  // 4. Function to show date and time in format 08/01/2020 04:08
  function showDateTime() {
    const now = new Date();
    const date = ("0" + now.getDate()).slice(-2);
    const month = ("0" + (now.getMonth() + 1)).slice(-2);
    const year = now.getFullYear();
    const hours = ("0" + now.getHours()).slice(-2);
    const minutes = ("0" + now.getMinutes()).slice(-2);
    console.log(`${date}/${month}/${year} ${hours}:${minutes}`);
  }
  showDateTime(); // Output: 08/01/2020 04:08
  
  // 5. Swap values of x and y
  function swapValues(x, y) {
    [x, y] = [y, x];
    console.log(`x => ${x}, y => ${y}`);
  }
  swapValues(3, 4); // Output: x => 4, y => 3
  swapValues(4, 5); // Output: x => 5, y => 4
  
  // 6. Function to reverse an array without using reverse method
  function reverseArray(arr) {
    const reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      reversed.push(arr[i]);
    }
    return reversed;
  }
  console.log(reverseArray([1, 2, 3, 4, 5])); // Output: [5, 4, 3, 2, 1]
  console.log(reverseArray(['A', 'B', 'C'])); // Output: ['C', 'B', 'A']
  
  // 7. Function to capitalize each element of an array
  function capitalizeArray(arr) {
    return arr.map(item => item.toUpperCase());
  }
  console.log(capitalizeArray(['apple', 'banana', 'cherry'])); // Output: ['APPLE', 'BANANA', 'CHERRY']
  
  // 8. Function to add an item to an array
  function addItem(arr, item) {
    arr.push(item);
    return arr;
  }
  console.log(addItem([1, 2, 3], 4)); // Output: [1, 2, 3, 4]
  
  // 9. Function to remove an item from an array by index
  function removeItem(arr, index) {
    arr.splice(index, 1);
    return arr;
  }
  console.log(removeItem([1, 2, 3, 4], 2)); // Output: [1, 2, 4]
  
  // 10. Function to sum all numbers up to a given number
  function sumOfNumbers(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
      sum += i;
    }
    return sum;
  }
  console.log(sumOfNumbers(5)); // Output: 15
  
  // 11. Function to sum all odd numbers up to a given number
  function sumOfOdds(num) {
    let sum = 0;
    for (let i = 1; i <= num; i += 2) {
      sum += i;
    }
    return sum;
  }
  console.log(sumOfOdds(5)); // Output: 9
  
  // 12. Function to sum all even numbers up to a given number
  function sumOfEven(num) {
    let sum = 0;
    for (let i = 2; i <= num; i += 2) {
      sum += i;
    }
    return sum;
  }
  console.log(sumOfEven(5)); // Output: 6
  
  // 13. Function to count number of evens and odds in a number
  function evensAndOdds(num) {
    let evens = 0, odds = 0;
    for (let i = 1; i <= num; i++) {
      if (i % 2 === 0) evens++;
      else odds++;
    }
    console.log(`The number of evens are ${evens}.`);
    console.log(`The number of odds are ${odds}.`);
  }
  evensAndOdds(100); // Output: The number of evens are 51. The number of odds are 50.
  
  // 14. Function to sum any number of arguments
  function sum(...args) {
    return args.reduce((acc, num) => acc + num, 0);
  }
  console.log(sum(1, 2, 3)); // Output: 6
  console.log(sum(1, 2, 3, 4)); // Output: 10
  
  // 15. Function to generate a random user IP address
  function randomUserIp() {
    return `192.168.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`;
  }
  console.log(randomUserIp()); // Output: 192.168.1.45 (random example)
  
  // 16. Function to generate a random MAC address
  function randomMacAddress() {
    const hexDigits = '0123456789ABCDEF';
    let mac = '';
    for (let i = 0; i < 6; i++) {
      mac += hexDigits[Math.floor(Math.random() * 16)] + hexDigits[Math.floor(Math.random() * 16)] + ':';
    }
    return mac.slice(0, -1); // Remove the last colon
  }
  console.log(randomMacAddress()); // Output: 3F:9A:8C:AD:56:72 (random example)
  
  // 17. Function to generate a random hexadecimal number
  function randomHexaNumberGenerator() {
    const hexChars = '0123456789ABCDEF';
    let hex = '#';
    for (let i = 0; i < 6; i++) {
      hex += hexChars[Math.floor(Math.random() * 16)];
    }
    return hex;
  }
  console.log(randomHexaNumberGenerator()); // Output: '#EE33DF' (random example)
  
  // 18. Function to generate a 7-character user ID
  function userIdGenerator() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let id = '';
    for (let i = 0; i < 7; i++) {
      id += chars[Math.floor(Math.random() * chars.length)];
    }
    return id;
  }
  console.log(userIdGenerator()); // Output: '41XTDbE' (random example)
  