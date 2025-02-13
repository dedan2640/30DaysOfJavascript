var challenge = "30 Days of JavaScript";
console.log(challenge)

console.log(challenge.length)

challenge.toUpperCase
challenge.toLowerCase
challenge.substr(0,4)
challenge.slice(3)
challenge.includes("Script")
challenge.split(" ")


let companies = "'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
companies.split(" ")
challenge.replace("JavaScript","Python")
challenge.charAt(15)
challenge.charCodeAt()
challenge.indexOf("a")
challenge.lastindexof("a")


let sentence ="You cannot end a sentence with because because because is a conjunction";
sentence.lastIndexOf("because")
sentence.search("because")

let text = "30 Days Of JavaScript"
text.startsWith("30",0)
text.endsWith("JavaScript",1)
text.match("a")

let text1 = "30 Days of"
let text2 = "JavaScript"
text1.concat("",text2)

console.log(text.repeat(2))



console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")

//converting string to interger
let str = '10';
if (typeof str !== 'number') {
  str = Number(str);
}
console.log(str);


let num = parseFloat('9.8');
if (num !== 10) {
  num = 10;
}
console.log(num);


//check if on is in "python" and "jargon"
str1 = 'Python'
str2 = 'Jargon'
if ("on" in str1 && str2){
    print ("Yes, 'on' is in both")
}else{
    print("No, 'on' is not in both")
}


//Check if "jargon" is in the sentence
let sentence = "I hope this course is not full of jargon"
if("jargon" in sentence) {
    print("Yes, 'jargon' is in the sentence.")
}else{
    print("No, 'jargon' is not in the sentence.")}

//generate random number between 0 and 100 inclusively
let randomNum = Math.floor(Math.random() * 101);
console.log(randomNum);


//generate random number between 50 and 100 inclusively

//generate random number between 0 and 255 inclusively

//access "javascript" string characters using random numbers

//print the following patter
console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");

//count the number of all "love"
let text1lv3 = "'Love is the best thing in this world. Some found their love and some are still looking for their love";
const lovecount = textlv3.match("love").length;
console.log(lovecount);

//count the number of all "because"
let text2lv3 = "You cannot end a sentence with because because because is a conjunction"
const bcozcount = text2lv3.match("because").length;
console.log(bcozcount);

//calculate annual salary
let salary_per_month = 5000
let bonus = 10000
let online_course_charges = 15000

let total_annual_income = ((salary_per_month + bonus)-online_course_charges)*12;