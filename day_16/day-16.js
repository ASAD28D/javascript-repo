// EXERCISE 16 : LEVEL 1

// Q1 : Change skills array to JSON using JSON.stringify()

const skills = ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python']
const skillJson = JSON.stringify(skills);
console.log(skillJson);

//======================================================================================================

// Q2 : Stringify the age variable

let age = 250;
const ageJson = JSON.stringify(age);
console.log(ageJson);

//======================================================================================================

// Q3 : Stringify the isMarried variable

let isMarried = true
const isMarriedJson = JSON.stringify(isMarried);
console.log(isMarriedJson)

//======================================================================================================

// Q4 : Stringify the student object

const student = {
    firstName: 'Asabeneh',
    lastName: 'Yetayehe',
    age: 250,
    isMarried: true,
    skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python',]
}
const studentJson = JSON.stringify(student);
console.log(studentJson);

//=======================================================================================================

// EXERCISE : LEVEL 2

// Q1 : Stringify the students object with only firstName, lastName and skills properties

const studentJson2 = JSON.stringify(student,['firstName','lastName','skills'])
console.log(studentJson2)

//=======================================================================================================

// EXERCISE : LEVEL 3 


const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`

// Q1 : Parse the txt JSON to object.

const parsedTxt = JSON.parse(txt)
console.log(parsedTxt)

//=======================================================================================================

// Q2 : Find the user who has many skills from the variable stored in txt.

let mostSkilledPerson = '';
let maxSkills = 0;

for (let user in parsedTxt) {
    const skillCount = parsedTxt[user].skills.length;
    if (skillCount > maxSkills) {
        maxSkills = skillCount;
        mostSkilledPerson = user;
    }
}

console.log(`${mostSkilledPerson} has the most skills.`);

//=======================================================================================================

