let sentence = '30 days of javascript challenge 2020 by asabenah yetheya';
let sentenceArr = sentence.split('');
const fonts = [
    'Georgia, serif',
    'Helvetica, sans-serif',
    'Courier New, monospace',
    'Garamond, serif',
    'Tahoma, sans-serif'
];

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getRandomFont() {
    return fonts[Math.floor(Math.random() * fonts.length)];
}

const outputElement = document.getElementById('output');
outputElement.style.paddingTop = '70px'
outputElement.style.paddingBottom = '70px'
outputElement.style.paddingLeft = '30px'
outputElement.style.paddingRight = '30px'


sentenceArr.forEach(letter => {
    const span = document.createElement('span');
    span.textContent = letter;
    span.style.fontSize = '100px';
    span.style.transition = 'color 0.8s ease, font-family 0.8s ease';
    outputElement.appendChild(span);
});

outputElement.style.transition = 'background-color 0.8s ease';

function textStyleChange() {
    outputElement.querySelectorAll('span').forEach(span => {
        span.style.color = getRandomColor();
        span.style.fontFamily = getRandomFont();
    });
    outputElement.style.backgroundColor = getRandomColor();
}

setInterval(textStyleChange, 2000);
