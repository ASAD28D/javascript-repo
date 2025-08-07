let pageBody = document.querySelectorAll('#container')

let headings = document.querySelectorAll('h1 , h4 ,h5')

let countryBoxDiv = document.createElement("div")
countryBoxDiv.style.marginLeft = '140px'
countryBoxDiv.style.marginRight = '140px'
countryBoxDiv.style.paddingTop = '50px'
countryBoxDiv.style.paddingBottom = '50px'
countryBoxDiv.style.display = 'flex'
countryBoxDiv.style.flexWrap = 'wrap'




const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
    "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain",
    "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
    "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria",
    "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada",
    "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros",
    "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia", "Cuba", "Cyprus",
    "Czech Republic", "Democratic Republic of the Congo", "Denmark", "Djibouti",
    "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador",
    "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji",
    "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece",
    "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti",
    "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland",
    "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan",
    "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon",
    "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
    "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands",
    "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia",
    "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal",
    "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea",
    "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama",
    "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
    "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia",
    "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe",
    "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore",
    "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa",
    "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname",
    "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand",
    "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey",
    "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates",
    "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", "Vanuatu",
    "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];
console.log(countries.length)

let input = document.querySelector('.search-input')
let searchAnyBtn = document.querySelector('.search-any')
let startWithBtn = document.querySelector('.starts-with')
let orderBtn = document.querySelector('.order-btn')

let lowercaseCountries = [];

for (let i = 0; i < countries.length; i++) {
    lowercaseCountries.push(countries[i].toLocaleLowerCase())
}

function renderCountries(countryList) {
    countryBoxDiv.innerHTML = ""; // Clear existing boxes
    for (let country of countryList) {
        let countryBox = document.createElement("div")
        let countryBoxP = document.createElement("p")
        countryBox.style.backgroundImage = "url('map_image.jpg')"
        countryBox.style.backgroundPosition = 'center'
        countryBox.style.backgroundSize = 'cover'
        countryBox.style.backgroundRepeat = "no-repeat";
        countryBox.style.display = 'flex'
        countryBox.style.justifyContent = 'center'
        countryBox.style.width = '150px'
        countryBox.style.margin = '6px'
        countryBox.style.border = '1px solid #e6e6e6ff'
        countryBox.style.paddingTop = '55px'
        countryBox.style.paddingBottom = '55px'

        countryBoxP.style.margin = '0px'
        countryBoxP.style.width = '100px'
        countryBoxP.style.paddingTop = '5px'
        countryBoxP.style.paddingBottom = '5px'
        countryBoxP.style.color = '#fbff19ff'
        countryBoxP.style.fontWeight = 'bold'
        countryBoxP.style.borderRadius = '10px'
        countryBoxP.textContent = country;

        countryBox.appendChild(countryBoxP)
        countryBoxDiv.appendChild(countryBox)
    }
}

// Initial render
renderCountries(lowercaseCountries)

let isReversed = false;
const originalCountries = [...lowercaseCountries]; // keep a copy of original

orderBtn.addEventListener('click', () => {
    isReversed = !isReversed;

    if (isReversed) {
        orderBtn.textContent = 'Z-A';
        orderBtn.style.backgroundColor = 'rgb(182, 104, 255)';
        lowercaseCountries.reverse();
        renderCountries(lowercaseCountries);
    } else {
        orderBtn.textContent = 'A-Z';
        orderBtn.style.backgroundColor = 'blueviolet';
        lowercaseCountries = [...originalCountries];
        renderCountries(lowercaseCountries);
    }
});



function startsWithSearch() {
    let searchResult = lowercaseCountries.filter(country => country.startsWith(input.value.toLocaleLowerCase()));
    countryBoxDiv.innerHTML = "";
    for (let country of searchResult) {
        let countryBox = document.createElement("div")
        let countryBoxP = document.createElement("p")
        countryBox.style.backgroundImage = "url('map_image.jpg')"
        countryBox.style.backgroundPosition = 'center'
        countryBox.style.backgroundSize = 'cover'
        countryBox.style.backgroundRepeat = "no-repeat";
        countryBox.style.display = 'flex'
        countryBox.style.justifyContent = 'center'
        countryBox.style.width = '150px'
        countryBox.style.marginLeft = '6px'
        countryBox.style.marginRight = '6px'
        countryBox.style.marginTop = '6px'
        countryBox.style.marginBottom = '6px'
        countryBox.style.border = '1px solid #e6e6e6ff'
        countryBoxP.style.margin = '0px'
        countryBoxP.style.width = '100px'
        countryBoxP.style.paddingTop = '5px'
        countryBoxP.style.paddingBottom = '5px'
        countryBoxP.style.color = '#fbff19ff'
        countryBoxP.style.fontWeight = 'bold'
        countryBoxP.style.borderRadius = '10px'
        countryBox.style.paddingTop = '55px'
        countryBox.style.paddingBottom = '55px'
        countryBoxP.textContent = country;
        countryBox.appendChild(countryBoxP)
        countryBoxDiv.appendChild(countryBox)
    }

}

function anyWordSearch() {
    let searchResult = lowercaseCountries.filter(country => country.includes(input.value.toLocaleLowerCase()));
    countryBoxDiv.innerHTML = "";
    for (let country of searchResult) {
        let countryBox = document.createElement("div")
        let countryBoxP = document.createElement("p")
        countryBox.style.backgroundImage = "url('map_image.jpg')"
        countryBox.style.backgroundPosition = 'center'
        countryBox.style.backgroundSize = 'cover'
        countryBox.style.backgroundRepeat = "no-repeat";
        countryBox.style.display = 'flex'
        countryBox.style.justifyContent = 'center'
        countryBox.style.width = '150px'
        countryBox.style.marginLeft = '6px'
        countryBox.style.marginRight = '6px'
        countryBox.style.marginTop = '6px'
        countryBox.style.marginBottom = '6px'
        countryBox.style.border = '1px solid #e6e6e6ff'
        countryBoxP.style.margin = '0px'
        countryBoxP.style.width = '100px'
        countryBoxP.style.paddingTop = '5px'
        countryBoxP.style.paddingBottom = '5px'
        countryBoxP.style.color = '#fbff19ff'
        countryBoxP.style.fontWeight = 'bold'
        countryBoxP.style.borderRadius = '10px'
        countryBox.style.paddingTop = '55px'
        countryBox.style.paddingBottom = '55px'
        countryBoxP.textContent = country;
        countryBox.appendChild(countryBoxP)
        countryBoxDiv.appendChild(countryBox)
    }

}

startWithBtn.addEventListener('click', () => {
    startWithBtn.style.backgroundColor = 'rgb(182, 104, 255)'
    searchAnyBtn.style.backgroundColor = 'blueviolet'
    input.removeEventListener('input', anyWordSearch)
    input.addEventListener('input', startsWithSearch)
})

searchAnyBtn.addEventListener('click', () => {
    searchAnyBtn.style.backgroundColor = 'rgb(182, 104, 255)'
    startWithBtn.style.backgroundColor = 'blueviolet'
    input.removeEventListener('input', startsWithSearch)
    input.addEventListener('input', anyWordSearch)
})

pageBody.forEach(item => {
    item.style.textAlign = 'center'
    item.style.fontFamily = 'sans-serif'
    item.style.backgroundColor = '#010409'
    item.style.color = "white"
    item.appendChild(countryBoxDiv)
    orderBtn.addEventListener('click', () => {
        orderBtn.style.backgroundColor = 'rgb(182, 104, 255)'
        orderReverse()
        item.appendChild(countryBoxDiv)
    })
})

headings.forEach(item => {
    item.style.marginTop = '6px'
    item.style.marginBottom = '6px'

})
