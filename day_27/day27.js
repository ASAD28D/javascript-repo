let textOptons = [
    ['🌱', 'Educator'],
    ['💻', 'Programmer'],
    ['🌐', 'Developer'],
    ['🔥', 'Motivator'],
    ['📔', 'Content Creator']
]
let skillsarr = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
    'SQL',
    'MERN',
    'Python',
    'Flask',
    'Numpy',
    'Pandas',
]
let targetDiv = document.querySelector(".skills-div")
console.log(targetDiv)
let currentIndex = 0;
function changeText() {
    targetDiv.textContent = "";

    let newP = document.createElement('p')
    newP.className = "skills-p"
    newP.textContent = textOptons[currentIndex].join(' ')
    targetDiv.appendChild(newP)

    currentIndex = (currentIndex + 1) % textOptons.length;

}
// changeText();

setInterval(changeText, 1500)

let targetDiv2 = document.querySelector(".skills-p2")
function changeText2() {
    targetDiv2.textContent = "";
    targetDiv2.textContent = skillsarr[currentIndex];


    currentIndex = (currentIndex + 1) % textOptons.length;
}

setInterval(changeText2, 1500)
