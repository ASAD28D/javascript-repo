// EXERCISE 12 : LEVEL 1

// Q1 : Calculate the total annual income of the person from the following text. ‘He earns 4000 euro 
// from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’

const text = "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.";

const numbers = text.match(/\d+/g).map(Number);
const salaryPerMonth = numbers[0];
const bonusPerYear = numbers[1];
const courseIncomePerMonth = numbers[2];
const annualSalary = salaryPerMonth * 12;
const annualCourseIncome = courseIncomePerMonth * 12;
const totalAnnualIncome = annualSalary + bonusPerYear + annualCourseIncome;
console.log("Total Annual Income: €" + totalAnnualIncome);

//======================================================================================================

// Q2 : The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative 
// direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the
// distance between the two furthest particles.

const points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8'];
const numericPoints = points.map(Number);
const min = Math.min(...numericPoints);
const max = Math.max(...numericPoints);
const distance = max - min;
console.log(`The distance between the two furthest particles is ${distance}`);

//=======================================================================================================

// Q3 : Write a pattern which identify if a string is a valid JavaScript variable

function isValidVariable(name) {
  const pattern = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;
  return pattern.test(name);
}

console.log(isValidVariable('first_name'));
console.log(isValidVariable('first-name'));
console.log(isValidVariable('1first_name'));
console.log(isValidVariable('firstname'));

//=======================================================================================================

// Exercises: Level 2

// Q1 :Write a function called tenMostFrequentWords which get the ten most frequent word from a string?

function tenMostFrequentWords(text) {
  const cleaned = text.replace(/[^\w\s]/g, '').toLowerCase();
  const words = cleaned.split(/\s+/);
  const wordCounts = {};
  for (let word of words) {
    wordCounts[word] = (wordCounts[word] || 0) + 1;
  }
  const sortedWords = Object.entries(wordCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);

  return sortedWords.map(([word, count]) => ({ word, count }));
}
const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;
console.log(tenMostFrequentWords(paragraph));

//=========================================================================================================
