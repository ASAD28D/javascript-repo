const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]
const prices = [1200, 800, 400, 300, 100, 0, null, undefined];

// forEach callback
function logItem(item) {
    console.log(item);
}

// map callbacks
function toUpperCase(str) {
    return str.toUpperCase();
}
function getLength(str) {
    return str.length;
}
function squareNum(num) {
    return num * num;
}
function getPrice(product) {
    return product.price;
}

// filter callbacks
function containsLand(country) {
    return country.toLowerCase().includes('land');
}
function isSixChar(country) {
    return country.length === 6;
}
function sixOrMoreChars(country) {
    return country.length >= 6;
}
function startsWithE(country) {
    return country.startsWith('E');
}
function hasValue(price) {
    return Boolean(price);  // filters out 0, null, undefined, false, ''
}

// forEach callback
function logItem(item) {
    console.log(item);
}

// map callbacks
function toUpperCase(str) {
    return str.toUpperCase();
}
function getLength(str) {
    return str.length;
}
function squareNum(num) {
    return num * num;
}
function getPrice(product) {
    return product.price;
}

// filter callbacks
function containsLand(country) {
    return country.toLowerCase().includes('land');
}
function isSixChar(country) {
    return country.length === 6;
}
function sixOrMoreChars(country) {
    return country.length >= 6;
}
function startsWithE(country) {
    return country.startsWith('E');
}
function hasValue(price) {
    return Boolean(price);  // filters out 0, null, undefined, false, ''
}


// Countries uppercase
const countriesUpper = countries.map(toUpperCase);
console.log(countriesUpper);

// Countries length
const countriesLength = countries.map(getLength);
console.log(countriesLength);

// Numbers squared
const numbersSquared = numbers.map(squareNum);
console.log(numbersSquared);

// Names uppercase
const namesUpper = names.map(toUpperCase);
console.log(namesUpper);

// Products mapped to prices
const productPrices = products.map(getPrice);
console.log(productPrices);

// Countries containing "land"
const countriesWithLand = countries.filter(containsLand);
console.log(countriesWithLand);

// Countries with exactly six characters
const sixCharCountries = countries.filter(isSixChar);
console.log(sixCharCountries);

// Countries with six or more characters
const sixOrMoreCharCountries = countries.filter(sixOrMoreChars);
console.log(sixOrMoreCharCountries);

// Countries starting with 'E'
const countriesStartE = countries.filter(startsWithE);
console.log(countriesStartE);

// Prices with truthy values (removes 0, null, undefined)
const validPrices = prices.filter(hasValue);
console.log(validPrices);

function getStringLists(arr) {
    return arr.filter(item => typeof item === 'string');
}


const mixedArray = [1, 'apple', true, 'banana', 5];
console.log(getStringLists(mixedArray));

{
    const numbers = [1, 2, 3, 4, 5];
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    console.log(sum);
}

const countries1 = ['Estonia', 'Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];
const sentence = countries1.reduce((acc, curr, index) => {
  if (index === countries1.length - 1) {
    return acc + ' and ' + curr;
  } else {
    return acc + ', ' + curr;
  }
}) + ' are north European countries.';
console.log(sentence);


const names1 = ['Asad', 'Mohammad', 'AmeerHamza', 'Zain'];
const hasLongName = names1.some(name => name.length > 7);
console.log(hasLongName); 


const allContainLand = countries.every(country => country.toLowerCase().includes('land'));
console.log(allContainLand); 

const sixLetterCountry = countries.find(country => country.length === 6);
console.log(sixLetterCountry); 

const sixLetterIndex = countries.findIndex(country => country.length === 6);
console.log(sixLetterIndex); 

const norwayIndex = countries.findIndex(country => country === 'Norway');
console.log(norwayIndex);


const russiaIndex = countries.findIndex(country => country === 'Russia');
console.log(russiaIndex);



