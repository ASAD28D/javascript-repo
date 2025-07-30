// Exercises: Level 1

// Create a div container on HTML document and create 100 to 100 numbers dynamically and append to 
// the container div.
// Even numbers background is green
// Odd numbers background is yellow
// Prime numbers background is red

let pageBody = document.querySelectorAll('.warapper')
let divContainer = document.createElement("div")
divContainer.className = 'container'
let list = document.createElement("ul")
list.className = 'ulList';
list.style.display = 'flex';
list.style.flexWrap = 'wrap';

function isPrime(num) {
    if (num < 2) return false
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false
    }
    return true
}

for (let i = 0; i <= 100; i++) {
    let numsLi = document.createElement("li")
    numsLi.className = 'number'
    numsLi.style.listStyleType = 'none'
    numsLi.style.fontSize = '38px'
    numsLi.style.paddingTop = '35px'
    numsLi.style.height = '80px'
    numsLi.style.width = '150px'
    numsLi.style.marginLeft = '4px'
    numsLi.style.marginRight = '4px'
    numsLi.style.marginTop = '4px'
    numsLi.style.marginBottom = '4px'
    numsLi.style.color = 'white'
    numsLi.textContent = i
    if (isPrime(i)) {
        numsLi.style.backgroundColor = '#fd5e53'
    } else if (i % 2 === 0) {
        numsLi.style.backgroundColor = '#21bf73'
    } else {
        numsLi.style.backgroundColor = '#fddb3a'
    }
    list.appendChild(numsLi)
    divContainer.appendChild(list)
}

pageBody.forEach(item => {
    item.style.textAlign = 'center'
    item.style.marginLeft = '140px'
    item.style.marginRight = '140px'
    item.style.fontFamily = 'sans-serif'
    item.appendChild(divContainer)
})


// list.forEach((item, i) => {

//  })