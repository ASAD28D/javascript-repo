// EXERSISE 5 : LEVEL 1

// Q1 : Declare an empty array;

let arr1 = Array();

//=================================================================================================

//Q2 : Declare an array with more than 5 number of elements

let arr2 = Array(5).fill('x');
console.log(arr2)

//=================================================================================================

// Q3 : Find the length of your array

console.log(arr2.length)

//=================================================================================================

// Q4 : Get the first item, the middle item and the last item of the array

let arr3 = [1, 2, 3, 4, 5];
let first = arr3[0];
let middle = arr3[Math.floor(arr3.length / 2)];
let last = arr3[arr3.length - 1];
console.log(first, middle, last)

//=================================================================================================

// Q5 : Declare an array called mixedDataTypes, put different data types in the array and 
// find the length of the array. The array size should be greater than 5

let mixedDataTypes = [
    'Asabeneh',
    'asad',
    250,
    true,
    { country: 'Finland', city: 'Helsinki' },
    { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }
]
console.log(mixedDataTypes.length);

//==================================================================================================

// Q6 : Declare an array name it Companies and assign initial values Facebook, Google, 
// Microsoft, Apple, IBM, Oracle and Amazon

let Companies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

//Print the array using console.log()
console.log(Companies)
//Print the number of companies in the array
console.log(Companies.length)

//==================================================================================================

// Q9 : Print the first company, middle and last company

let first_company = Companies[0];
let middle_company = Companies[Math.floor(Companies.length / 2)];
let last_company = Companies[Companies.length - 1];
console.log(first_company, middle_company, last_company)

//==================================================================================================

// Q10 : Print out each company 

console.log(Companies[0]);
console.log(Companies[1]);
console.log(Companies[2]);
console.log(Companies[3]);
console.log(Companies[4]);
console.log(Companies[5]);

//==================================================================================================

// Q11 : Change each company name to uppercase one by one and print them ou

console.log(Companies[0].toUpperCase());
console.log(Companies[1].toUpperCase());
console.log(Companies[2].toUpperCase());
console.log(Companies[3].toUpperCase());
console.log(Companies[4].toUpperCase());
console.log(Companies[5].toUpperCase());

//==================================================================================================

// Q12 : Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle 
// and Amazon are big IT companies.

let sentence = `${Companies.slice(0, -1).join(', ')} and ${Companies[Companies.length - 1]} are big IT companies.`;
console.log(sentence);

//==================================================================================================

// Q13 : Check if a certain company exists in the itCompanies array. If it exist return the 
// company else return a company is not found

let index = Companies.indexOf('Apple')

if (index === -1) {
    console.log('This company does not exist in the array')
} else {
    console.log('This company exists in the array')
}

//===================================================================================================

// Q14 : Sort the array using sort() method

Companies.sort()
console.log(Companies)

//===================================================================================================

// Q15 : Reverse the array using reverse() method

Companies.reverse()
console.log(Companies)

//===================================================================================================

// Q16 : Slice out the first 3 companies from the array

console.log(Companies.slice(0, 3))

//===================================================================================================

// Q17 : Slice out the last 3 companies from the array

console.log(Companies.slice(4, 7))

//===================================================================================================

// Q18 : Remove the first IT company from the array

Companies.shift()
console.log(Companies)

//===================================================================================================

// Q19 : Remove the last IT company from the array

Companies.pop()
console.log(Companies)

//===================================================================================================

// EXERSICE 5 : LEVEL 2

// Q1 : Create a separate countries.js file and store the countries array in to this file, create 
// a separate file web_techs.js and store the webTechs array in to this file.
//  Access both file in main.js file

console.log(webTechs)
console.log(countries)

//====================================================================================================

// Q2 : First remove all the punctuations and change the string to array and count the number of 
// words in the array

let sentence2 = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
sentence2 = sentence2.replace(/[.,]/g, '')
sentence2 = sentence2.split(' ')
console.log(sentence2)
console.log(sentence2.length)

//====================================================================================================

// Q3 : In the following shopping cart add, remove, edit items

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('meat')
console.log(shoppingCart)
shoppingCart.push('sugar')
console.log(shoppingCart)
index1 = shoppingCart.indexOf('honey')
console.log(shoppingCart.splice())

//====================================================================================================