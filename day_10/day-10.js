// EXERSICE 10 : LEVEL 1

// Q1 : create an empty set

const emptySet = new Set();
console.log(emptySet)

//=========================================================================================

// Q2 : Create a set containing 0 to 10 using loop

const loopSet = new Set()
for (let i = 0; i <= 10; i++) {
    loopSet.add(i)
}
console.log(loopSet)

//=========================================================================================

// Q3 : Remove an element from a set

loopSet.delete(0)
console.log(loopSet)

//=========================================================================================

// Q4 : Clear a set

loopSet.clear()
console.log(loopSet)

//=========================================================================================

// Q5 : Create a set of 5 string elements from array

let countries = ['paksitan', 'uk', 'india', 'usa', 'turkey']
const countriesSet = new Set(countries);
console.log(countriesSet);

//=========================================================================================

// Q6 : Create a map of countries and number of characters of a country

function countriesInMap() {
    const countries = ['pakistan', 'china', 'canada', 'italy', 'spain'];
    const countriesMap = new Map();

    countries.forEach(country => {
        countriesMap.set(country, country.length);
    });

    console.log(countriesMap);
}

countriesInMap();

//==========================================================================================

// EXERCISE 10 : LEVEL 2

// Q1 : Find a union b

let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]
let c = [...a, ...b]

let A = new Set(a)
let B = new Set(b)
let C = new Set(c)

console.log(C)

//==========================================================================================

// Q2 : Find a intersection b
function intersection() {
    let a = [1, 2, 3, 4, 5]
    let b = [3, 4, 5, 6]

    let A = new Set(a)
    let B = new Set(b)

    let c = a.filter((num) => B.has(num))
    let C = new Set(c)

    console.log(C)
}
intersection()

//===========================================================================================

// Q3 : Find a with b

function diffrence() {
    let a = [1, 2, 3, 4, 5]
    let b = [3, 4, 5, 6]

    let A = new Set(a)
    let B = new Set(b)

    let c = a.filter((num) => !B.has(num))
    let C = new Set(c)

    console.log(C)
}

//===========================================================================================