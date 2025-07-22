// EXERSICE 8 : LEVEL 1

// Q1 : Create an empty object called dog

const dog_ = {};

//===================================================================================================

// Q2 : Print the the dog object on the console

console.log(dog_)

//===================================================================================================

// Q3 : Add name, legs, color, age and bark properties for the dog object. The bark property is a 
// method which return woof woof

const dog = {
    name: "Bruno",
    legs: 4,
    color: "Brown",
    age: 3,
    bark: function () {
        return "woof woof";
    }
};
console.log(dog.bark());

//====================================================================================================

// Q4 : Get name, legs, color, age and bark value from the dog object

console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);
console.log(dog.bark());

//=====================================================================================================

// Q5 : 

dog.breed = "Labrador";

dog.getDogInfo = function () {
    return `My name is ${this.name}, I am a ${this.color} ${this.breed} with ${this.legs} legs, and I am ${this.age} years old.`;
};

console.log(dog.getDogInfo())

//======================================================================================================

// EXERSICE 8 : LEVEL 2

const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}


// Q! : Find the person who has many skills in the users object.

let mostSkilledPerson = '';
let maxSkills = 0;

for (let user in users) {
    const skillCount = users[user].skills.length;
    if (skillCount > maxSkills) {
        maxSkills = skillCount;
        mostSkilledPerson = user;
    }
}

console.log(`${mostSkilledPerson} has the most skills.`);

//======================================================================================================

// Q2 : Count logged in users, count users having greater than equal to 50 points from the
// following object.

let loggedInCount = 0;
let highPointsCount = 0;

for (let user in users) {
    if (users[user].isLoggedIn) {
        loggedInCount++;
    }
    if (users[user].points >= 50) {
        highPointsCount++;
    }
}

console.log(`Logged in users: ${loggedInCount}`);
console.log(`Users with points >= 50: ${highPointsCount}`);

//=======================================================================================================

// Q3 : Find people who are MERN stack developer from the users object

for (let user in users) {
    const skills = users[user].skills;

    if (
        skills.includes('MongoDB') &&
        skills.includes('Express') &&
        skills.includes('React') &&
        skills.includes('Node')
    ) {
        console.log(`${user} is a MERN stack developer`);
    }
}

//========================================================================================================

// Q4 : Set your name in the users object without modifying the original users object

const copyusers = Object.assign({}, users)
console.log(copyusers)
copyusers.asad = {
    email: 'asad28d@gmail.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 18,
    isLoggedIn: false,
    points: 40
}
console.log(copyusers)
console.log(users)

//========================================================================================================

// Q5 : Get all keys or properties of users object

const keys = Object.keys(copyusers)
console.log(keys)

//=========================================================================================================

// Q6 : Use the countries object to print a country name, capital, populations and languages.

const countries = {
    Pakistan: {
        capital: "Islamabad",
        population: 240000000,
        languages: ["Urdu", "English"]
    },
    Japan: {
        capital: "Tokyo",
        population: 125000000,
        languages: ["Japanese"]
    }
};

function getCountry(country) {
    for (let country in countries) {
        let info = countries[country];

        console.log(`Country : ${country}`);
        console.log(`capital : ${info.capital}`);
        console.log(`population : ${info.population}`);
        console.log(`language : ${info.languages}`);
        break
    }
}

getCountry(countries.Japan)

//=========================================================================================================

