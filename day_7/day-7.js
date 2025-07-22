// EXERSICE 7 : LEVEL 1 

// Q1 :  
function fullName() {
    console.log("Asad Laiq");
}
fullName()

//======================================================================================================

// Q2 : 

function fullName2(firstName, lastName) {
    return firstName + " " + lastName;
}

console.log(fullName2("Asad", "Laiq"));

//======================================================================================================

// Q3 : 

function addNumbers(num1, num2) {
    return num1 + num2;
}
console.log(addNumbers(5, 7));

//======================================================================================================

// Q4 : 

function areaOfRectangle(length, width) {
    return length * width;
}

console.log(areaOfRectangle(5, 10));

//======================================================================================================

// Q5 : 

function perimeterOfRectangle(length, width) {
    return 2 * (length + width);
}

console.log(perimeterOfRectangle(5, 10));

//======================================================================================================

// Q6 : 

function volumeOfRectPrism(length, width, height) {
    return length * width * height;
}

console.log(volumeOfRectPrism(4, 5, 6));

//======================================================================================================

// Q7 : 

function areaOfCircle(radius) {
    return Math.PI * radius * radius;
}

console.log(areaOfCircle(5));

//======================================================================================================

// Q8 : 

function circumOfCircle(radius) {
    return 2 * Math.PI * radius;
}

console.log(circumOfCircle(5));

//======================================================================================================

// Q9 : 

function density(mass, volume) {
    return mass / volume;
}

console.log(density(10, 2));

//======================================================================================================

// Q10 : 

function speed(distance, time) {
    return distance / time;
}

console.log(speed(100, 2));

//======================================================================================================

// Q11 : 

function weight(mass, gravity) {
    return mass * gravity;
}

console.log(weight(50, 9.81));

//======================================================================================================

// Q12 : 

function convertCelsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

console.log(convertCelsiusToFahrenheit(25));

//======================================================================================================

// Q13 : 

function calculateBMI(weight, height) {
    let bmi = weight / (height * height);

    if (bmi < 18.5) {
        return `Your BMI is ${bmi.toFixed(2)}. You are Underweight.`;
    } else if (bmi >= 18.5 && bmi < 25) {
        return `Your BMI is ${bmi.toFixed(2)}. You have Normal weight.`;
    } else if (bmi >= 25 && bmi < 30) {
        return `Your BMI is ${bmi.toFixed(2)}. You are Overweight.`;
    } else {
        return `Your BMI is ${bmi.toFixed(2)}. You are Obese.`;
    }
}

console.log(calculateBMI(65, 1.75));

//======================================================================================================

// Q14 : 

function checkSeason(month) {
    month = month.toLowerCase();

    if (["september", "october", "november"].includes(month)) {
        return "Autumn";
    } else if (["december", "january", "february"].includes(month)) {
        return "Winter";
    } else if (["march", "april", "may"].includes(month)) {
        return "Spring";
    } else if (["june", "july", "august"].includes(month)) {
        return "Summer";
    } else {
        return "Invalid month name";
    }
}

console.log(checkSeason("March"));

//======================================================================================================

// Q15 : 

function findMax(a, b, c) {
    let max = a;

    if (b > max) {
        max = b;
    }

    if (c > max) {
        max = c;
    }

    return max;
}

console.log(findMax(0, 10, 5));
console.log(findMax(0, -10, -2));

//======================================================================================================

// EXERSICE 7 LEVEL : 2

// Q1 : Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates 
// value of a linear equation, solveLinEquation.

let a = 2, b = 3, c = -6, x = 1, y = 2;
let linearResult = a * x + b * y + c;
console.log("Linear Equation Result:", linearResult);

//======================================================================================================

// Q3 : Declare a function name printArray. It takes array as a parameter and it prints out each 
// value of the array.

let arrayToPrint = [1, 2, 3, 4, 5];
for (let i = 0; i < arrayToPrint.length; i++) {
    console.log(arrayToPrint[i]);
}

//======================================================================================================

// Q4 : Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using 
// the Date object.

let now = new Date();
let day = String(now.getDate()).padStart(2, '0');
let month = String(now.getMonth() + 1).padStart(2, '0');
let year = now.getFullYear();
let hours = String(now.getHours()).padStart(2, '0');
let minutes = String(now.getMinutes()).padStart(2, '0');
console.log(`${day}/${month}/${year} ${hours}:${minutes}`);

//======================================================================================================

// Q5 : Declare a function name swapValues. This function swaps value of x to y.

let xVal = 3, yVal = 4;
console.log(`x => ${yVal}, y => ${xVal}`);

//======================================================================================================

// Q6 : Declare a function name reverseArray. It takes array as a parameter and it returns the reverse 
// of the array (don't use method).

let originalArray = [1, 2, 3, 4, 5];
let reversedArray = [];
for (let i = originalArray.length - 1; i >= 0; i--) {
    reversedArray.push(originalArray[i]);
}
console.log(reversedArray);

//======================================================================================================

// Q7 : Declare a function name capitalizeArray. It takes array as a parameter and it returns the - 
// capitalizedarray.

let lowerArray = ['apple', 'banana', 'cherry'];
let capitalizedArray = [];
for (let i = 0; i < lowerArray.length; i++) {
    capitalizedArray.push(lowerArray[i].toUpperCase());
}
console.log(capitalizedArray);

//======================================================================================================

// Q8 : Declare a function name addItem. It takes an item parameter and it returns an array after 
// adding the item

let items = [];
let newItem = "NewItem";
items.push(newItem);
console.log(items);

//======================================================================================================

// Q9 : Declare a function name removeItem. It takes an index parameter and it returns an array 
// after removing an item

let removeIndex = 0;
if (removeIndex >= 0 && removeIndex < items.length) {
    items.splice(removeIndex, 1);
}
console.log(items);

//======================================================================================================

// Q10 : Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers 
// in that range.

let n = 10;
let totalSum = 0;
for (let i = 0; i <= n; i++) {
    totalSum += i;
}
console.log("Sum of numbers:", totalSum);

//======================================================================================================

// Q11 : Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers
// in that - range.

let oddSum = 0;
for (let i = 0; i <= n; i++) {
    if (i % 2 !== 0) oddSum += i;
}
console.log("Sum of odds:", oddSum);

//======================================================================================================

// Q12 : Declare a function name sumOfEven. It takes a number parameter and it adds all the even 
// numbers in that - range.

let evenSum = 0;
for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) evenSum += i;
}
console.log("Sum of evens:", evenSum);

//======================================================================================================

// Q13 : Declare a function name evensAndOdds . It takes a positive integer as parameter and it 
// counts number of evens and odds in the number.

let evens = 0, odds = 0;
for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) evens++;
    else odds++;
}
console.log(`The number of odds are ${odds}.`);
console.log(`The number of evens are ${evens}.`);

//======================================================================================================

// Q14 : Write a function which takes any number of arguments and return the sum of the arguments

let args = [1, 2, 3, 4];
let argsSum = 0;
for (let i = 0; i < args.length; i++) {
    argsSum += args[i];
}
console.log("Sum:", argsSum);

//======================================================================================================

// Q15 : Writ a function which generates a randomUserIp.

let ip = `${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`;
console.log("Random IP:", ip);

//======================================================================================================

// Q16 : Write a function which generates a randomMacAddress

let mac = '';
for (let i = 0; i < 6; i++) {
    mac += Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
    if (i < 5) mac += ':';
}
console.log("Random MAC:", mac);

//======================================================================================================

// Q17 : Declare a function name randomHexaNumberGenerator. When this function is called it generates 
// a random hexadecimal number. The function return the hexadecimal number.

let hexColor = '#';
for (let i = 0; i < 6; i++) {
    hexColor += '0123456789abcdef'[Math.floor(Math.random() * 16)];
}
console.log("Random Hex Color:", hexColor);

//======================================================================================================

// Q18 : Declare a function name userIdGenerator. When this function is called it generates 
// seven character id. The function return the id.

let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let userId = '';
for (let i = 0; i < 7; i++) {
    userId += characters[Math.floor(Math.random() * characters.length)];
}
console.log("User ID:", userId);

//======================================================================================================

// EXERSICE 7 : LEVEL 3 

// Q! : Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It 
// doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number
//  of characters and the second input is the number of ids which are supposed to be generated.

function userIdGeneratedByUser() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    let idLength = parseInt(/* prompt */('Enter number of characters per ID : ', ''));
    let numberOfIds = parseInt(/* prompt */('Enter number of IDs to generate : ', ''));

    if (isNaN(idLength) || isNaN(numberOfIds) || idLength <= 0 || numberOfIds <= 0) {
        console.log("Invalid input. Please enter positive numbers.");
        return;
    }

    for (let i = 0; i < numberOfIds; i++) {
        let userId = '';
        for (let j = 0; j < idLength; j++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            userId += characters[randomIndex];
        }
        console.log(userId);
    }
}

userIdGeneratedByUser()

//======================================================================================================

// Q2 : Write a function name rgbColorGenerator and it generates rgb colors.

function rgbColorGenerator() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    let rgbColor = `rgb(${r},${g},${b})`;

    console.log("Random RGB Color:", rgbColor);
}

rgbColorGenerator()

//======================================================================================================

// Q3 : Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.

function arrayOfHexaColors(num) {
    let result = [];

    for (let i = 0; i < num; i++) {
        let color = "#";

        for (let j = 0; j < 6; j++) {
            let hexDigit = Math.floor(Math.random() * 16).toString(16);
            color += hexDigit;
        }

        result.push(color);
    }

    console.log(result)
}

arrayOfHexaColors(10)

//======================================================================================================

// Q4 : Write a function arrayOfRgbColors which return any number of RGB colors in an array.

function arrayOfRgbColors(num) {
    let result2 = [];

    for (let i = 0; i < num; i++) {

        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);

        let rgbColor = `rgb(${r},${g},${b})`;

        result2.push(rgbColor);
    }

    console.log(result2)
}

arrayOfRgbColors(5)

//======================================================================================================

// Q5 : Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.

function convertHexaToRgb(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    return `rgb(${r}, ${g}, ${b})`;
}
console.log(convertHexaToRgb("#ebc375"));

//=======================================================================================================

// Q6 : Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.

function rgbToHex(r, g, b) {
    function toHex(n) {
        let hex = n.toString(16);
        if (hex.length === 1) {
            hex = '0' + hex;
        }
        return hex;
    }

    return '#' + toHex(r) + toHex(g) + toHex(b);
}
console.log(rgbToHex(10, 5, 250));

//======================================================================================================

// Q7 : Write a function generateColors which can generate any number of hexa or rgb colors.

function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

function convertHexaToRgb(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function rgbToHex(r, g, b) {
    function toHex(n) {
        let hex = n.toString(16);
        if (hex.length === 1) {
            hex = "0" + hex;
        }
        return hex;
    }

    return "#" + toHex(r) + toHex(g) + toHex(b);
}

function generateColors(type, count) {
    let colors = [];

    for (let i = 0; i < count; i++) {
        let r = getRandomInt(255);
        let g = getRandomInt(255);
        let b = getRandomInt(255);

        if (type === "hexa") {
            colors.push(rgbToHex(r, g, b));
        } else if (type === "rgb") {
            colors.push("rgb(" + r + ", " + g + ", " + b + ")");
        }
    }

    if (count === 1) {
        return colors[0];
    }

    return colors;
}

console.log(generateColors("hexa", 3));
console.log(generateColors("hexa", 1));
console.log(generateColors("rgb", 3));
console.log(generateColors("rgb", 1));

//=====================================================================================================

// Q8 : Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array

function shuffleArray(array) {
    let currentIndex = array.length;
    while (currentIndex != 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
    }
}

let arr = [9, 2, 11, 37, 42]
shuffleArray(arr)
console.log(arr);

//======================================================================================================

// Q9 : Call your function factorial, it takes a whole number as a parameter and it return a 
// factorial of the number

function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i
    }
    console.log(`factorail is ${result}`)
}
factorial(4)

//========================================================================================================

// Q10 : Call your function isEmpty, it takes a parameter and it checks if it is empty or not

function isEmpty(val) {
    if (val == undefined) {
        console.log('the perimeter is emptey')
    } else {
        console.log('the perimeter is not empty')
    }
}
isEmpty()

//========================================================================================================

// Q11 : Call your function sum, it takes any number of arguments and it returns the sum.

function sum(...numbers) {
    let total = 0;
    for (const num of numbers) {
        total += num;
    }
    return total;
}

console.log(sum(1, 2, 3));
console.log(sum(10, 20, 30, 40, 50));

//=======================================================================================================

// Q12 : Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all 
// the items. Check if all the array items are number types. If not give return reasonable feedback.

function sumOfArrayItems(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== "number") {
            console.log("All items in the array must be numbers.");
        }
    }

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    console.log(sum)
}
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8]
sumOfArrayItems(arr2)

//=======================================================================================================

// Q13 : Write a function called average, it takes an array parameter and returns the average of the
// items. Check if all the array items are number types. If not give return reasonable feedback.

function average(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    let averageNum = sum / arr.length;
    console.log(averageNum);
}
const arr3 = [1, 2, 3, 4, 5, 6, 7, 8]
average(arr3)

//========================================================================================================

// Q14 : Write a function called modifyArray takes array as parameter and modifies the fifth item of the 
// array and return the array. If the array length is less than five it return 'item not found'.

function modifyArray(arr) {
    if (arr.length < 5) {
        console.log('item not found')
    } else {
        arr[5] = "banana"
    }
    console.log(arr)
}
modifyArray(arr3)

//========================================================================================================

// Q15 : Write a function called isPrime, which checks if a number is prime number.

function isPrime() {
    let n = 17;
    let isPrime = true;

    if (n <= 1) {
        isPrime = false;
    } else {
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                isPrime = false;
                break;
            }
        }
    }

    console.log(isPrime ? `${n} is a prime number.` : `${n} is not a prime number.`);
}

isPrime()

//========================================================================================================

// Q16 : Write a functions which checks if all items are unique in the array.

function uniqueItems(array) {
    for (let i = 0; i < array.length; i++) {
        if (array.indexOf(array[i]) !== i) {
            console.log('array is not unique');
        } else {
            console.log('the array is unique');
        }
    }
}

const input1 = [7, 8, 1, 5, 9];
uniqueItems(input1);

const input2 = [7, 8, 1, 5, 9, 9];
uniqueItems(input2);

//========================================================================================================

// Q17 : Write a function which checks if all the items of the array are the same data type.

function areSameDataTypes(array) {
    if (array.length === 0) {
        console.log('array is empty, considered uniform');
        return;
    }

    const firstType = typeof array[0];

    for (let i = 1; i < array.length; i++) {
        if (typeof array[i] !== firstType) {
            console.log('the array items do NOT have the same data type');
            return;
        }
    }

    console.log('the array items have the same data type');
}

//========================================================================================================

// Q19 : Write a function which returns array of seven random numbers in a range of 0-9. All the 
// numbers must be unique.

function sevenRandomNumbers() {
    const numbers = [];
    for (let i = 0; numbers.length < 7; i++) {
        const random = Math.floor(Math.random() * 10);
        if (!numbers.includes(random)) {
            numbers.push(random);
        }
    }
    return numbers;
}

console.log(sevenRandomNumbers());

//========================================================================================================

// Q29 : Write a function called reverseCountries, it takes countries array and first it copy the 
// array and returns the reverse of the original array

function reverseCountries(countries) {
    const copy = countries.slice();
    return copy.reverse();
}

const countries = ['Pakistan', 'India', 'USA', 'Canada'];
const reversed = reverseCountries(countries);

console.log('Original:', countries);
console.log('Reversed:', reversed);

//=======================================================================================================