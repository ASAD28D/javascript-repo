// EXERCISE 21 : LEVEL 1 

// Q1 : Create an index.html file and put four p elements as above: Get the first paragraph by using 
// document.querySelector(tagname) and tag name

let paragraph = document.querySelector('p')
console.log(paragraph)

//=======================================================================================================  

// Q2 : Get each of the the paragraph using document.querySelector('#id') and by their id

let firstById = document.querySelector('#first-para')
let seccondById = document.querySelector('#second-para')
let thirdById = document.querySelector('#third-para')
let fourthById = document.querySelector('#fourth-para')

console.log(firstById, seccondById, thirdById, fourthById)

//========================================================================================================

// Q3 : Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name

let allParas = document.querySelectorAll('p')
console.log(allParas);

//========================================================================================================

// Q4 : Loop through the nodeList and get the text content of each paragraph

function getParaText() {
    let paraText;
    for (let i = 0; i < allParas.length; i++) {
        paraText = allParas[i].textContent;
        console.log(paraText)
    }
}
getParaText()

//========================================================================================================

// Q5 : Set a text content to paragraph the fourth paragraph,Fourth Paragraph

allParas[3].textContent += ', and this is added text to fourth para';
console.log(allParas[3].textContent)

//========================================================================================================

// Q6 : Set id and class attribute for all the paragraphs using different attribute setting methods

allParas[0].className = 'para';
allParas[1].setAttribute('class', 'para')
allParas[2].className = 'para'
allParas[3].classList.add('class', 'para')

//========================================================================================================

// EXERCISE : LEVEL 2

// Q1 : Change stye of each paragraph using JavaScript(eg. color, background, border, 
// font-size, font-family)

allParas.forEach((allParas, i) => {
    allParas.style.fontSize = '20px'
    allParas.style.fontFamily = 'sans-serif'
    if (i % 2 === 0) {
        allParas.style.padding = '30px'
        allParas.style.color = '#4493f8'
        allParas.style.backgroundColor = '#151b23'
        allParas.style.border = '1px solid rgb(44 51 59)'
    } else {
        allParas.style.padding = '30px'
        allParas.style.color = '#1535c1'
        allParas.style.backgroundColor = '#0d1117'
        allParas.style.border = '1px solid rgb(44 51 59)'
    }
})

//========================================================================================================



