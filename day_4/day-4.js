//EXERSISE_4

// Q1 : Get user input using prompt(“Enter your age:”). If user is 18 or older ,
// give feedback:'You are old enough to drive' but if not 18 give another feedback stating to 
// wait for the number of years he needs to turn 18.

let age = prompt('Enter your age : ', ' ')
if (age >= 18) {
    console.log('You are old enough to drive.')
} else {
    console.log('You are left with ' + (18 - age) + ' years to drive.')
}

//=========================================================================================================

// Q2 : Compare the values of myAge and yourAge using if … else. Based on the comparison and log the 
// result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

let myAge = 25;
let yourAge = prompt('Enter you age : ', '')
yourAge = parseInt(yourAge);
if (yourAge > myAge) {
    console.log('You are ' + (yourAge - myAge) + ' years older than me.')
} else if (yourAge < myAge) {
    console.log('You are ' + (myAge - yourAge) + ' years younger then me')
} else if (yourAge === myAge) {
    console.log('We have the same age')
} else {
    console.log('age not enterd')
}

//=========================================================================================================

//Q3 : If a is greater than b return 'a is greater than b' else 'a is less than b'. 
// Try to implement it in to ways
// using if else
// ternary operator.

let a = 4
let b = 3
if (a > b) {
    console.log(a + ' is greater then ' + b)
} else {
    console.log(a + ' is lesser then ' + b)
}

a > b
    ? console.log(a + ' is greater then ' + b)
    : console.log(a + ' is lesser then ' + b)

//==========================================================================================================    

// Q4 : Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number 
// is even or not using JavaScript?

let num = prompt('Enter a number : ', '');

if (num % 2 === 0) {
    console.log(num + " is even.");
} else {
    console.log(num + " is odd.");
}

//==========================================================================================================

//EXERSISE 4 : LEVEL 2

//Q1 :Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

let persantage = prompt('Enter your persentage : ', '')
persantage = parseInt(persantage)
if (persantage >= 90 && persantage <= 100) {
    console.log('A')
} else if (persantage >= 70 && persantage <= 89) {
    console.log('B')
} else if (persantage >= 60 && persantage <= 69) {
    console.log('C')
} else if (persantage >= 50 && persantage <= 59) {
    console.log('D')
} else if (persantage >= 0 && persantage <= 49) {
    console.log('f')
}

//=========================================================================================================

//Q2: Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//September, October or November, the season is Autumn.
//December, January or February, the season is Winter.
//March, April or May, the season is Spring
//June, July or August, the season is Summer

let month1 = prompt('Enter the month : ', '').toLocaleLowerCase();
if (month1 == 'september' || month1 == 'october' || month1 == 'november') {
    console.log('Its autumn')
} else if (month1 == 'december' || month1 == 'january' || month1 == 'february') {
    console.log('Its winter')
} else if (month1 == 'march' || month1 == 'april' || month1 == 'may') {
    console.log('Its spring')
} else if (month1 == 'june' || month1 == 'july' || month1 == 'august') {
    console.log('Its summer')
} else {
    console.log('enter a valid month')
}

//========================================================================================================

// Q3 : Check if a day is weekend day or a working day. Your script will take day as an input.

let day = prompt('Enter the day : ', '').toLocaleLowerCase();
if (day == 'monday' || day == 'tuesday' || day == 'wednesday' || day == ' thursday' || day == 'friday') {
    console.log(day + ' is a working day.')
} else if (day == 'saturday' || day == 'sunday') {
    console.log(day + ' is a weekend day.')
} else {
    console.log('Enter a valid day')
}

//========================================================================================================

// EXERSICE 4 : LEVEL 3

// Q1 : Write a program which tells the number of days in a month

let month = prompt("Enter a month:", '').toLowerCase();
let year = parseInt(prompt("Enter a year:", ''));

if (month === "january" || month == "march" || month == "may" || month == "july" || month == "august"
    || month == "october" || month == "december") {
    console.log(`${month} has 31 days.`);
} else if (month === "april" || month == "june" || month == "september" || month == "november") {
    console.log(`${month} has 30 days.`);
} else if (month === "february") {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(`${month} has 29 days.`);
    } else {
        console.log(`${month} has 28 days.`);
    }
} else {
    console.log("Invalid month entered.");
}

//========================================================================================================