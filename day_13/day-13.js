const users = [
    {
        name: 'Asabeneh',
        title: 'Programmer',
        country: 'Finland',
        city: 'Helsinki',
        age: 250
    },
    {
        name: 'Eyob',
        title: 'Teacher',
        country: 'Sweden',
        city: 'London',
        age: 25
    },
    {
        name: 'Asab',
        title: 'Instructor',
        country: 'Norway',
        city: 'Oslo',
        age: 22
    },
    {
        name: 'Matias',
        title: 'Developer',
        country: 'Denmark',
        city: 'Copenhagen',
        age: 28
    }
]
const user = {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
}
const names = ['Asabeneh', 'Brook', 'David', 'John']
const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
]

// EXAMPALES
console.table(names)
console.table(user)
console.table(users)
console.info('30 Days Of JavaScript challenge is trending on Github')
console.info('30 Days Of fullStack challenge might be released')
console.info('30 Days Of HTML and CSS challenge might be released')
console.group('Names')
console.log(names)
console.groupEnd()
console.group('Countries')
console.log(countries)
console.groupEnd()
console.group('Users')
console.log(user)
console.log(users)
console.groupEnd()

//====================================================================================================

// Exercise 13 : level 1 

console.info('================EXERCISE STARTS FROM HERE================')

// Q1 : Display the countries array as a table

console.table(countries)

//====================================================================================================

// Q2 : Display the countries object as a table

const countries2 = {
    Pakistan: {
        capital: "Islamabad",
        population: 241499431,
        languages: ["Urdu", "English"],
        currency: "Pakistani Rupee",
        region: "Asia"
    },
    USA: {
        capital: "Washington, D.C.",
        population: 331893745,
        languages: ["English"],
        currency: "US Dollar",
        region: "North America"
    },
    Germany: {
        capital: "Berlin",
        population: 83240525,
        languages: ["German"],
        currency: "Euro",
        region: "Europe"
    },
    Japan: {
        capital: "Tokyo",
        population: 124214766,
        languages: ["Japanese"],
        currency: "Japanese Yen",
        region: "Asia"
    },
    Egypt: {
        capital: "Cairo",
        population: 112716599,
        languages: ["Arabic"],
        currency: "Egyptian Pound",
        region: "Africa"
    }
};

console.table(countries2);

//====================================================================================================

// Q3 : Use console.group() to group logs

console.group('arrays')
console.log(names)
console.log(countries)
console.groupEnd()

//=====================================================================================================

// Exercises : Level 2

// Q1 : 10 > 2 * 10 use console.assert()

console.assert(10 > 2 * 10, '10 is not greater then 20')

//=====================================================================================================

// Q2 : Write a warning message using console.warn()

console.warn('this is a warninng')

//=====================================================================================================

// Q3 : Write an error message using console.error()

console.error('This is an error message')

//=====================================================================================================

// Exercises : Level 3

// Q1 :  Check the speed difference among the following loops: while, for, for of, forEach

console.time('while loop')
let i = 0;
while (i < names.length) {
    console.log(names[i])
    i++
}
console.timeEnd('while loop')

console.time('for loop')
for (let i = 0; i < names.length; i++) {
    console.log(names[i])
}
console.timeEnd('for loop')

console.time('for of loop')
for (let name of names) {
    console.log(name)
}
console.timeEnd('for of loop')

console.time('foreach loop')
names.forEach((name, index) => {
    console.log(`index : ${index} name : ${name}  `)
})
console.timeEnd('foreach loop')

//=====================================================================================================
