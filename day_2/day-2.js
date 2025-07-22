let challenge = "30 Days Of JavaScript"
console.log(challenge);
console.log(challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())
console.log(challenge.substring(3, 7))
console.log(challenge.substring(3, 21))
console.log(challenge.includes('Script'))
console.log(challenge.split(''))
console.log(challenge.split(' '))
let apps = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon"
console.log(apps.split(','))
console.log(challenge.replace('JavaScript', 'Python'))
console.log(challenge.charAt(15))
console.log(challenge.charCodeAt(11))
console.log(challenge.indexOf('a'))
console.log(challenge.lastIndexOf('a'))
let sentence = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.indexOf('because'))
console.log(sentence.lastIndexOf('because'))
console.log(sentence.search('because'))
console.log(challenge.trim())
console.log(challenge.startsWith('30'))
console.log(challenge.endsWith('JavaScript'))
console.log(challenge.match(/a/gi))
let str1 = '30 Days Of';
let str2 = ' JavaScript';
let result = str1.concat(str2);
console.log(result);
console.log(challenge.repeat(2))
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");
let str = '10';
let num = 10;
console.log(typeof '10' === 10);
console.log(Number(str) === num);
console.log(parseFloat('9.8') === 10);
console.log(Math.round(parseFloat('9.8')) === 10);
let word1 = 'python';
let word2 = 'jargon';

console.log(word1.includes('on'));
console.log(word2.includes('on'));
let sentence2 = 'I hope this course is not full of jargon.';
console.log(sentence2.includes('jargon'));
let randomNum = Math.random()
let numBtnZeroAndhundred = randomNum * 101

let randomNumRoundToFloor = Math.floor(numBtnZeroAndhundred)
console.log(randomNumRoundToFloor)

let randomNum2 = Math.random();
let numBetween50And100 = randomNum2 * 51;
let finalNum = Math.floor(numBetween50And100 + 50);
console.log(finalNum);

let randomNum3 = Math.random()
let numBtnZeroAndtwofiftyfive = randomNum3 * 256

let randomNumRoundToFloor2 = Math.floor(numBtnZeroAndtwofiftyfive)
console.log(randomNumRoundToFloor2)

let str3 = 'JavaScript';
let randomIndex = Math.floor(Math.random() * str3.length);
let randomChar = str3[randomIndex];

console.log(`Random character: ${randomChar}`);

console.log('1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125');

console.log(sentence.substring(31,55))

const sentence3 = "Love is the best thing in this world. Some found their love and some are still looking for their love.";
console.log(sentence3.match(/love/gi).length);

console.log(sentence.match(/because/gi).length)

const sentence4 = `%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching`;

const cleaned = sentence4.replace(/[^a-zA-Z0-9 ]/g, '');
console.log(cleaned)
