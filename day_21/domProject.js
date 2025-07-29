// Exercise: Level 3

// DOM: Mini project 1

//Develop the following application, use the following HTML elements to get started with. You will get
// the same code on starter folder. Apply all the styles and functionality using JavaScript only.

// The year color is changing every 1 second
// The date and time background color is changing every on seconds
// Completed challenge has background green
// Ongoing challenge has background yellow
// Coming challenges have background red

let htmlContent = document.querySelectorAll('.wrapper')
let liContent = document.querySelectorAll('li')
let listTag = document.querySelectorAll('ul')
let headings = document.querySelectorAll('h1 , h2')
let clockDiv = document.querySelectorAll('h4');


htmlContent.forEach(item => {
    item.style.marginLeft = '300px'
    item.style.marginRight = '300px'
    item.style.fontFamily = 'sans-serif'
});

headings.forEach(item => {
    item.style.textAlign = 'center'
})

let coloredWord = document.getElementById('coloredWord')
let colors = ['#fd5e53', '#fddb3a', '#21bf73']
let colorIndex = 0;
function changeWordColor() {
    coloredWord.style.color = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
}
setInterval(changeWordColor, 1000);

let clockDisplay = document.getElementById('clock')
setInterval(() => {
    console.clear();
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    clockDisplay.textContent = timeString;
}, 1000);

clockDiv.forEach(item => {
    item.style.textAlign = "center"
    item.style.marginLeft = "300px";
    item.style.marginRight = "300px";
    item.style.paddingTop = "10px";
    item.style.paddingBottom = "10px";
})

function changeclockColor() {
    clockDisplay.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
}
setInterval(changeclockColor, 1000);

listTag.forEach(item => {
    item.style.paddingInlineStart = '0px'
})

let textContentString;
let lastWord;

liContent.forEach(Item => {
    Item.style.padding = '16px'
    Item.style.marginBottom = '3px'
    Item.style.listStyleType = 'none'
    textContentString = Item.textContent.split(" ")
    lastWord = textContentString.pop()
    if (lastWord === "Done") {
        Item.style.backgroundColor = '#21bf73'
    } else if (lastWord === "Ongoing") {
        Item.style.backgroundColor = '#fddb3a'
    } else if (lastWord === "Coming") {
        Item.style.backgroundColor = '#fd5e53'

    }
})

