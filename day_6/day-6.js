//EXERSICE 6 : LEVEL 1

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']

// Q1 : Iterate 0 to 10 using for loop, do the same using while and do while loop

// for loop
console.log('OUTPUT WITH for LOOP')
for (let i = 0; i <= 10; i++) {
    console.log(countries[i])
}

// while loop
console.log('OUTPUT WITH WHILE LOOP')
let i2 = 0;
while (i2 <= 10) {
    console.log(countries[i2])
    i2++
}

// do while loop
console.log('OUTPUT WITH DO WHILE LOOP')
let i3 = 0;
do {
    console.log(countries[i3])
    i3++
} while (i3 <= 10)

//====================================================================================================

// Q2 : Iterate 10 to 0 using for loop, do the same using while and do while loop

// for loop
console.log('OUTPUT WITH for LOOP reversed')
for (let i4 = 10; i4 >= 0; i4--) {
    console.log(countries[i4])
}

// while loop
console.log('OUTPUT WITH WHILE LOOP reversed')
let i5 = 10;
while (i5 >= 0) {
    console.log(countries[i5])
    i5--
}

// do while loop
console.log('OUTPUT WITH DO WHILE LOOP reversed')
let i6 = 10;
do {
    console.log(countries[i6])
    i6--
} while (i6 >= 0)

//=====================================================================================================

// Q4 : Write a loop that makes the following pattern using console.log():

//  #
//  ##
//  ###
//  ####
//  #####
//  ######
//  #######

let n = 10;

for (let i = 1; i <= n; i++) {
    let stars = '';
    for (let j = 1; j <= i; j++) {
        stars += '*';
    }
    console.log(stars);
}

//====================================================================================================

// Q5 : Use loop to print the following pattern:

// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100

for (let i = 0; i <= 10; i++) {
    console.log(i + ' x ' + i + ' = ' + i * i)
}

//=====================================================================================================

// Q6 : Use for loop to iterate from 0 to 100 and print only even numbers

console.log('EVEN NUMBER : ')
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}

//=====================================================================================================

// Q7 : Use for loop to iterate from 0 to 100 and print only odd numbers

console.log('ODD NUMBER : ')
for (let i = 0; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(i)
    }
}

//=====================================================================================================

// Q7 : Use for loop to iterate from 0 to 100 and print only prime numbers

console.log('PRIME NUMBERS')
for (let num = 2; num <= 100; num++) {
    let isPrime = true;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(num);
    }
}

//======================================================================================================

// Q8 : Use for loop to iterate from 0 to 100 and print the sum of all numbers.

let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum += i;
}
console.log('The sum of all numbers from 0 to 100 is : ' + sum)

//======================================================================================================


// Q9 : Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

let sum2 = 0;
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        sum2 += i;
    }
}
console.log('The sum of all even numbers from 0 to 100 is : ' + sum2)

let sum3 = 0;
for (let i = 0; i <= 100; i++) {
    if (i % 2 !== 0) {
        sum3 += i;
    }
}
console.log('The sum of all odd numbers from 0 to 100 is : ' + sum3)

//======================================================================================================

// Q10 : Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. 
// Print sum of evens and sum of odds as array

let sum4 = 0;
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        sum4 += i;
    }
}
let sum5 = 0;
for (let i = 0; i <= 100; i++) {
    if (i % 2 !== 0) {
        sum5 += i;
    }
}

const evenOddSum = [];
evenOddSum.push(sum4, sum5)

console.log(evenOddSum)

//======================================================================================================

// Q11 : Develop a small script which generate array of 5 random numbers
let randomNumarr = [];
for (let i = 0; i < 5; i++) {
    let randomNum = Math.floor(Math.random() * 101);
    randomNumarr.push(randomNum)
}

console.log(randomNumarr);

//======================================================================================================

// Q12 : Develop a small script which generate array of 5 random numbers and the numbers must be unique

let uniqueRandoms = [];

for (let i = 0; uniqueRandoms.length < 5;) {
    let randomNum = Math.floor(Math.random() * 11); // 0 to 10

    if (!uniqueRandoms.includes(randomNum)) {
        uniqueRandoms.push(randomNum);
        i++;
    }
}
console.log(uniqueRandoms);

//======================================================================================================

// Q13 : Develop a small script which generate a six characters random id: 

let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let id = '';

for (let i = 0; i < 6; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    id += characters[randomIndex];
}

console.log("Random ID:", id);

//======================================================================================================

// EXERSICE 6 : LEVEL 2

// Q1 : Develop a small script which generate any number of characters random id:

let randomLenght = Math.floor(Math.random() * 101);
let characters2 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let id2 = '';

for (let i = 0; i < randomLenght; i++) {
    let randomIndex = Math.floor(Math.random() * characters2.length);
    id2 += characters2[randomIndex];
}

console.log("Random ID:", id2);

//======================================================================================================

// Q2 : Write a script which generates a random hexadecimal number.

let hex = '#';

let hexChars = '0123456789ABCDEF';

for (let i = 0; i < 6; i++) {
    let randomIndex = Math.floor(Math.random() * hexChars.length);
    hex += hexChars[randomIndex];
}

console.log("Random Hex Code:", hex);

//=====================================================================================================

// Q3 : Write a script which generates a random rgb color number.

let r = Math.floor(Math.random() * 256);
let g = Math.floor(Math.random() * 256);
let b = Math.floor(Math.random() * 256);

let rgbColor = `rgb(${r},${g},${b})`;

console.log("Random RGB Color:", rgbColor);

//=====================================================================================================

// Q4 : Using the above countries array, create the following new array.

let upperCaseCountries = [];

for (let i = 0; i < countries.length; i++) {
    upperCaseCountries.push(countries[i].toUpperCase());
}

console.log(upperCaseCountries);

//======================================================================================================

// Q5 : Using the above countries array, create an array for countries length'.

let countryLengths = [];

for (let i = 0; i < countries.length; i++) {
    countryLengths.push(countries[i].length);
}

console.log(countryLengths);

//======================================================================================================
