class Person {
  constructor(firstName, lastName) {
    console.log(this) // Check the output from here
    this.firstName = firstName
    this.lastName = lastName
  }
}

const person = new Person()

console.log(person)

// Q1 : Create an Animal class. The class will have name, age, color, legs properties and create 
// different methods

class Animal {
  constructor(name, age, color, legs) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }

  describe() {
    return `${this.name} is a ${this.color} animal, ${this.age} years old with ${this.legs} legs.`;
  }

  makeSound() {
    return "Some generic animal sound.";
  }
}

class Dog extends Animal {
  constructor(name, age, color) {
    super(name, age, color, 4);
  }
  makeSound() {
    return "Woof! Woof!";
  }
}

class Cat extends Animal {
  constructor(name, age, color) {
    super(name, age, color, 4);
  }

  makeSound() {
    return "Meow~";
  }
}

const dog = new Dog("Bruno", 3, "Brown");
const cat = new Cat("Whiskers", 2, "White");

console.log(dog.describe());
console.log(dog.makeSound());

console.log(cat.describe());
console.log(cat.makeSound());

//======================================================================================================

// Q2 :Let's try to develop a program which calculate measure of central tendency of a sample
// (mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to 
// those measures find the min, max, count, percentile, and frequency distribution of the sample. 
// You can create a class called Statistics and create all the functions which do statistical calculations
// as method for the Statistics class. Check the output below.


class Stats {
  constructor(data) {
    this.data = data.sort((a, b) => a - b);
  }

  count() {
    return this.data.length
  }
  sum() {
    let sum = 0;
    for (let i = 0; i < this.data.length; i++) {
      sum += this.data[i];
    }
    return sum;
  }
  min() {
    return this.data[0]
  }
  max() {
    return this.data[this.data.length - 1]
  }

  range() {
    return this.max() - this.min();
  }

  mean() {
    return this.sum() / this.count();
  }

  median() {
    const mid = Math.floor(this.count() / 2);
    if (this.count() % 2 === 0) {
      return (this.data[mid - 1] + this.data[mid]) / 2;
    }
    return this.data[mid];
  }

  mode() {
    const freqMap = {};
    this.data.forEach(num => {
      freqMap[num] = (freqMap[num] || 0) + 1;
    });
    const maxFreq = Math.max(...Object.values(freqMap));
    const modes = Object.keys(freqMap).filter(key => freqMap[key] === maxFreq);
    return modes.length === this.data.length ? [] : modes.map(Number);
  }

  variance() {
    const mean = this.mean();
    const squaredDiffs = this.data.map(x => (x - mean) ** 2);
    return squaredDiffs.reduce((a, b) => a + b, 0) / this.count();
  }

  standardDeviation() {
    return Math.sqrt(this.variance());
  }

  percentile(p) {
    if (p < 0 || p > 100) return null;
    const index = (p / 100) * (this.count() - 1);
    const lower = Math.floor(index);
    const upper = Math.ceil(index);
    if (lower === upper) return this.data[lower];
    return this.data[lower] + (index - lower) * (this.data[upper] - this.data[lower]);
  }

  frequencyDistribution() {
    const freq = {};
    this.data.forEach(num => {
      freq[num] = (freq[num] || 0) + 1;
    });
    return freq;
  }
}

let ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
const Statistics = new Stats(ages)

console.log("count : ", Statistics.count());
console.log("sum : ", Statistics.sum())
console.log("min : ", Statistics.min())
console.log("max : ", Statistics.max())
console.log("Range:", Statistics.range());
console.log("Mean:", Statistics.mean());
console.log("Median:", Statistics.median());
console.log("Mode:", Statistics.mode());
console.log("Variance:", Statistics.variance());
console.log("Standard Deviation:", Statistics.standardDeviation());
console.log("25th Percentile:", Statistics.percentile(25));
console.log("Frequency Distribution:", Statistics.frequencyDistribution());
