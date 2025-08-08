let pageBody = document.querySelector('.wrapper')
let playersContainer = document.createElement('div');
pageBody.appendChild(playersContainer);

let firstName = document.getElementById('first-name-input')
let lastName = document.getElementById('last-name-input')
let country = document.getElementById('country-input')
let score = document.getElementById('score-input')
let addbtn = document.getElementById('add-btn')

let errorText = document.querySelector('.error-text')
errorText.style.color = '#e38991'
errorText.style.fontWeight = 'bold';

class player {
    constructor(firstName, lastName, country, score) {
        this.firstName = firstName
        this.lastName = lastName
        this.country = country
        this.score = score
        this.time = new Date().toString().slice(4, 21);
    }
}

let playersArr = []
// let time;
addbtn.addEventListener('click', () => {
    let isValid = true;
    if (firstName.value === "" || lastName.value === "" || country.value == "" || score.value == "") {
        errorText.textContent = 'ALL INPUTS ARE REQUIERD'
        isValid = false
    } else {
        errorText.textContent = ''
        isValid = true
    }
    if (isValid) {
        playersArr.push(new player(firstName.value, lastName.value, country.value, score.value))
        // firstName.value = ""
        // lastName.value = ""
        // country.value = ""
        // score.value = ""

        playersContainer.innerHTML = "";

        playersArr.forEach(p => {
            let mainDiv = document.createElement('div')
            mainDiv.style.display = 'flex'
            mainDiv.style.flexWrap = 'wrap'
            mainDiv.style.padding = '25px'
            mainDiv.style.marginBottom = '22px'
            mainDiv.style.border = '1px solid #5e9eff'
            mainDiv.style.borderRadius = '10px'
            mainDiv.style.color = '#bcbdbe'
            mainDiv.style.backgroundColor = '#182631'

            let nameDiv = document.createElement('div')
            nameDiv.style.width = '200px'
            let nameP = document.createElement('p')
            nameP.style.fontSize = '22px'
            nameP.style.marginTop = '0px'
            nameP.style.marginBottom = '8px'
            let timeP = document.createElement('p')
            timeP.style.margin = '0px'
            nameP.textContent = `${p.firstName} ${p.lastName}`.toUpperCase();
            timeP.textContent = p.time

            let countryP = document.createElement('p')
            countryP.style.fontSize = '22px'
            countryP.style.padding = '14px'
            countryP.style.width = '230px'
            countryP.textContent = p.country.toUpperCase();

            let scoreP = document.createElement('p')
            scoreP.style.fontSize = '22px'
            scoreP.style.padding = '14px'
            scoreP.style.width = '190px'
            scoreP.textContent = p.score

            let playerBtn1 = document.createElement('div')
            playerBtn1.style.height = '40px'
            playerBtn1.style.width = '40px'
            playerBtn1.style.marginTop = '7px'
            playerBtn1.style.marginRight = '7px'
            playerBtn1.style.borderRadius = '50%'
            playerBtn1.style.backgroundColor = '#322f16'
            playerBtn1.style.border = '1px solid #afa100'

            let playerBtn2 = document.createElement('div')
            // playerBtn2.style.height = '40px'
            // playerBtn2.style.width = '40px'
            playerBtn2.style.padding = '7px'
            playerBtn2.style.marginTop = '7px'
            playerBtn2.style.marginRight = '7px'
            playerBtn2.style.borderRadius = '50%'
            playerBtn2.textContent = '+5'
            playerBtn2.style.backgroundColor = '#322f16'
            playerBtn2.style.border = '1px solid #afa100'

            let playerBtn3 = document.createElement('div')
            // playerBtn3.style.height = '40px'
            // playerBtn3.style.width = '40px'
            playerBtn3.style.padding = '7px'
            playerBtn3.style.marginTop = '7px'
            playerBtn3.style.borderRadius = '50%'
            playerBtn3.textContent = '-5'
            playerBtn3.style.backgroundColor = '#322f16'
            playerBtn3.style.border = '1px solid #afa100'

            nameDiv.appendChild(nameP)
            nameDiv.appendChild(timeP)
            mainDiv.appendChild(nameDiv);
            mainDiv.appendChild(countryP)
            mainDiv.appendChild(scoreP)
            mainDiv.appendChild(playerBtn1)
            mainDiv.appendChild(playerBtn2)
            mainDiv.appendChild(playerBtn3)

            playersContainer.appendChild(mainDiv)

        })

    }
})


//
// 