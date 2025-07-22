let firstName = 'asad';
let lastName = 'mehmoood';
let country = 'pakistan';
let city = 'lahore';
let age = 18;
let ismarried = false;
let year1 = 2025;
console.log(typeof firstName, typeof lastName, typeof country, typeof city, typeof age, typeof ismarried, typeof year1)

console.log('10' === 10)
console.log(parseInt('9.8') === 10)

console.log(3 < 8)
console.log(1 + 1 >= 2)
console.log(8 * 1 < 10)

console.log(3 > 8)
console.log(1 + 1 < 2)
console.log(8 * 1 > 10)

console.log(4 > 3)
console.log(4 >= 3)
console.log(4 <= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')

let word1 = 'python'
let word2 = 'jargon'
let word1_len = word1.length;
let word2_len = word2.length;
console.log(word1_len, word2_len);
console.log(word1_len != word2_len);

console.log(4 > 3 && 10 < 12)
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 || 10 < 12)
console.log(4 > 3 || 10 > 12)
console.log(!(4 > 3))
console.log(!(4 < 3))
console.log(!(false))
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4'))
console.log(!(word1.match('on')) && !(word2.match('on')))

const now1 = new Date()
console.log(now1.getFullYear())
console.log(now1.getMonth())
console.log(now1.getDate())
console.log(now1.getDay())
console.log(now1.getHours())
console.log(now1.getMinutes())
console.log(now1.getTime())

// exersice 3 level 2 question 1

// let base = prompt("Enter base:", '');
// let height = prompt("Enter height:", '');
// base = parseInt(base);
// height = parseInt(height);
// let area = 0.5 * base * height;
// alert("The area of the triangle is " + area);
// console.log("The area of the triangle is " + area);

// exersice 3 level 2 question 2 

// let sideA = prompt("Enter side a:", '');
// let sideB = prompt("Enter side b:", '');
// let sideC = prompt("Enter side c:", '');
// sideA = parseInt(sideA);
// sideB = parseInt(sideB);
// sideC = parseInt(sideC);
// let perimeter = sideA + sideB + sideC;
// alert("The perimeter of the triangle is " + perimeter);
// console.log("The perimeter of the triangle is " + perimeter);

// exersice 3 level 2 question 3 : area and perimeter of rectangle


// let length = prompt("Enter lenght:", '');
// let width = prompt("Enter width:", '');
// length = parseInt(length);
// width = parseInt(width);
// let area = length * width;
// let perimeter = 2 * (length + width); 
// alert("The area of the rectangle is " + area);
// console.log("The area of the rectangle is " + area);
// alert("The perimeter of the rectangle is " + perimeter);
// console.log("The perimeter of the rectangle is " + perimeter);

// exersice 3 level 2 question 4 : area and circumference of circle

// const PI = 3.14;
// const c = 2;
// let radius = prompt("Enter radius:", '');
// let area = PI * radius * radius;
// let circumference = c * PI * radius;
// alert("The area of the circle is " + area);
// console.log("The area of the circle is " + area);
// alert("The circumference of the circle is " + circumference);
// console.log("The circumference of the circle is " + circumference);

// exersice 3 level 2 question 9

// let hours = prompt("Enter hours:", '');
// let payPerHour = prompt("Enter pay per hour:", '');
// hours = parseInt(hours);
// payPerHour=parseInt(payPerHour);
// let perDay = hours * payPerHour;
// let perWeak = perDay * 5;
// perDay = parseInt(perDay);
// perWeak = parseInt(perWeak);
// alert('Your weekly earning is Rs ' + perWeak)
// console.log('Your weekly earning is Rs ' + perWeak)

// exersice 3 level 2 question 10

let lenghtName = 7
lenghtName > firstName.length
    ? console.log('name is short')
    : console.log('name is long')

// exersice 3 level 2 question 10

firstName.length > lastName.length
    ? console.log('Your first name, ' + firstName + ' is longer than your family name, ' + lastName)
    : console.log('Your first name, ' + firstName + ' is shorter to your family name, ' + lastName);

// exersice 3 level 2 question 11
let myAge = 18
let yourAge = 20

// exersice 3 level 2 question 13

// let birthYear = prompt("Enter your birth year:", ' ');
// let currentYear = new Date().getFullYear();
// let Age = currentYear - birthYear;

// Age >= 18
//     ? console.log(`You are ${Age}. You are allowed to drive.`)
//     : console.log(`You are ${Age}. You are not allowed to drive. Please wait ${18 - Age} more year(s).`);


// exersice 3 level 2 question 14

// let yearsLived = prompt("Enter number of years you live:", ' ');
// let Now = new Date();
// let past = new Date();
// past.setFullYear(Now.getFullYear() - yearsLived);

// let millisecondsLived = Now.getTime() - past.getTime();
// let secondsLived = Math.floor(millisecondsLived / 1000);

// alert('you lived' + secondsLived    )
// console.log(`You lived ${secondsLived} seconds.`);

const now = new Date()
const year = now.getFullYear() 
const month = now.getMonth() + 1
const date = now.getDate() 
let hours = now.getHours() 
let minutes = now.getMinutes()

hours = hours < 10 ? '0' + hours : hours;
minutes = minutes < 10 ? '0' + minutes : minutes;

let format1 = `${year}-${month}-${date} ${hours}:${minutes}`;
let format2 = `${date}-${month}-${year} ${hours}:${minutes}`;
let format3 = `${date}/${month}/${year} ${hours}:${minutes}`;

console.log(format1)
console.log(format2)
console.log(format3)