// EXERCISE 11 : LEVEL 1 

// Q1 : Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp,
// waterBoilingTemp.

const constants = [2.72, 3.14, 9.81, 37, 100]
let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
console.log(gravity)

//====================================================================================================

// Q2 : Destructure and assign the elements of countries array to fin, est, sw, den, nor

const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']

const [fin, est, sw, den, nor] = countries

console.log(fin) // Finland
console.log(est) // Estonia
console.log(sw)  // Sweden
console.log(den) // Denmark
console.log(nor) // Norway

//=====================================================================================================

//Q3 : Destructure the rectangle object by its properties or keys.

const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
const { width, height, area, perimeter } = rectangle

console.log(width)
console.log(height)
console.log(area)
console.log(perimeter)

//=====================================================================================================

//EXERCISE 11 : LEVEL 2

// Q1 :Iterate through the users array and get all the keys of the object using destructuring


const users = [
  {
    name: 'Brook',
    scores: 75,
    skills: ['HTML', 'CSS', 'JS'],
    age: 16
  },
  {
    name: 'Alex',
    scores: 80,
    skills: ['HTML', 'CSS', 'JS'],
    age: 18
  },
  {
    name: 'David',
    scores: 75,
    skills: ['HTML', 'CSS'],
    age: 22
  },
  {
    name: 'John',
    scores: 85,
    skills: ['HTML'],
    age: 25
  },
  {
    name: 'Sara',
    scores: 95,
    skills: ['HTML', 'CSS', 'JS'],
    age: 26
  },
  {
    name: 'Martha',
    scores: 80,
    skills: ['HTML', 'CSS', 'JS'],
    age: 18
  },
  {
    name: 'Thomas',
    scores: 90,
    skills: ['HTML', 'CSS', 'JS'],
    age: 20
  }
]

for (const { name, scores, skills, age } of users) {
  console.log(`Name: ${name}, Scores: ${scores}, Skills: ${skills.join(', ')}, Age: ${age}`)
}

//=====================================================================================================

// Q2:  Find the persons who have less than two skills

for (const { name, scores, skills, age } of users) {
  if (skills.length < 2) {
    console.log(`${name} has less then 2 Skills: ${skills.join(', ')}`)
  }
}

//=====================================================================================================

// EXERCISE 11 : LEVEL 3 

// Q1 : Destructure the countries object print name, capital, population and languages of all countries

const countries_1 = [
  {
    name: 'Pakistan',
    capital: 'Islamabad',
    population: 240000000,
    languages: ['Urdu', 'Punjabi', 'Sindhi', 'Pashto', 'Balochi'],
    continent: 'Asia'
  },
  {
    name: 'Canada',
    capital: 'Ottawa',
    population: 38000000,
    languages: ['English', 'French'],
    continent: 'North America'
  },
  {
    name: 'Germany',
    capital: 'Berlin',
    population: 83000000,
    languages: ['German'],
    continent: 'Europe'
  },
  {
    name: 'Brazil',
    capital: 'Brasília',
    population: 213000000,
    languages: ['Portuguese'],
    continent: 'South America'
  },
  {
    name: 'Japan',
    capital: 'Tokyo',
    population: 125000000,
    languages: ['Japanese'],
    continent: 'Asia'
  }
];

for (const { name, capital, population, languages, continent } of countries_1) {
  console.log(`country : ${name}, capital : ${capital}
   , population : ${population}, language : ${languages.join(', ')}`)
}

//=====================================================================================================

// Q2 : A junior developer structure student name, skills and score in array of arrays which may 
// not easy to read. Destructure the following array name to name, skills array to skills, scores
// array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.

function destructuringStudent() {
  const student = ['David', ['HTML', 'CSS', 'JS', 'React'], [98, 85, 90, 95]];
  let [name, skillsArr, scoresArr] = student;

  for (let i = 0; i < skillsArr.length; i++) {
    console.log(`name: ${name}, skill: ${skillsArr[i]}, score: ${scoresArr[i]}`);
  }
}

destructuringStudent();

//=====================================================================================================

// Q3 : Write a function called convertArrayToObject which can convert the array to a structure object.

const students = [
  ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
  ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
];

function convertArrayToObject(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    let [name, skills, scores] = arr[i];
    const obj = { name, skills, scores };
    result.push(obj);
  }

  return result;
}

console.log(convertArrayToObject(students));

//=====================================================================================================

// Q4 : Copy the student object to newStudent without mutating the original object. In the new 
// object add the following ?

const student = {
  name: 'David',
  age: 25,
  skills: {
    frontEnd: [
      { skill: 'HTML', level: 10 },
      { skill: 'CSS', level: 8 },
      { skill: 'JS', level: 8 },
      { skill: 'React', level: 9 }
    ],
    backEnd: [
      { skill: 'Node', level: 7 },
      { skill: 'GraphQL', level: 8 },
    ],
    dataBase: [
      { skill: 'MongoDB', level: 7.5 },
    ],
    dataScience: ['Python', 'R', 'D3.js']
  }
}

const newStudent = { ...student };
console.log(newStudent)

newStudent.skills.frontEnd.push({ skill: 'Bootstrap', level: 8 });
newStudent.skills.backEnd.push({ skill: 'Express', level: 9 });
newStudent.skills.dataBase.push({ skill: 'SQL', level: 8 });
newStudent.skills.dataScience.push('SQL');

console.log(newStudent);

//=====================================================================================================
