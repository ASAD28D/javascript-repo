let htmlContent = document.querySelector('.wrapper')

let challengeDivMain = document.querySelectorAll('#challengeDivMain')
htmlContent.style.marginLeft = '300px'
htmlContent.style.marginRight = '300px'
htmlContent.style.fontFamily = 'sans-serif'

let challengeDiv = document.querySelectorAll('.challengeDiv')
let challengeP = document.querySelectorAll('.challengeP')
let headings = document.querySelectorAll('h1 , h2')
let clockDiv = document.querySelectorAll('h4');




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
    // console.clear();
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

challengeDivMain.forEach(item => {
    item.style.paddingInlineStart = '0px'
})

let textContentString;
let lastWord;

challengeP.forEach((Item, index) => {
    Item.style.padding = '25px'
    Item.style.marginTop = '0px'
    Item.style.marginBottom = '0px'
    Item.style.listStyleType = 'none'
    textContentString = Item.textContent.split(" ")
    lastWord = textContentString.pop()
    if (lastWord === "Done") {
        challengeDiv[index].style.backgroundColor = '#21bf73'
    } else if (lastWord === "Ongoing") {
        challengeDiv[index].style.backgroundColor = '#fddb3a'
    } else if (lastWord === "Coming") {
        challengeDiv[index].style.backgroundColor = '#fd5e53'
    }
})

const asabenehChallenges2020 = {
    description: 'Asabeneh Yetayeh challenges',
    challengeTitle: 'Asabeneh Yetayeh challenges',
    challengeSubtitle: '30DaysOfJavaScript Challenge',
    challengeYear: 2020,
    keywords: [
        'HTML',
        'HTML5',
        'CSS',
        'CSS3',
        'JS',
        'JavaScript',
        'ES6',
        'Promise',
        'async await',
        'Database',
        'React',
        'React Hooks',
        'Context API',
        'React Router',
        'Web Storage',
        'localStorage',
        'sessionStorage',
        'Redux',
        'Node',
        'MongoDB',
        'SQL',
        'API',
        'DOM',
        'data science',
        'MERN',
        'Python',
        'Flask',
        'Statistics',
        'Linear Algebra',
        'Numpy',
        'Pandas',
        'Scipy',
        'Scikit-learn',
        'Visualization',
        'D3.js'
    ],
    author: {
        firstName: 'Asabeneh',
        lastName: 'Yetayeh',
        titles: [
            ['🌱', 'Educator'],
            ['💻', 'Programmer'],
            ['🌐', 'Developer'],
            ['🔥', 'Motivator'],
            ['📔', 'Content Creator']
        ],
        qualifications: [
            ['📖','MSc. Computer Science Ongoing'],
            ['👨‍🎓','BSc. Information and Communication Eng.'],
            ['👨‍🎓','MSc. Food Technology'],
            ['👨‍🎓','BSc.Food Technology']
        ],
        socialLinks: [
            {
                social: 'LinkedIn',
                url: 'https://www.linkedin.com/in/asabeneh/',
                fontawesomeIcon: '<i class="fab fa-linkedin">'
            },
            {
                social: 'Twitter',
                url: 'https://twitter.com/Asabeneh',
                fontawesomeIcon: '<i class="fab fa-twitter-square"></i>'
            },
            {
                social: 'Github',
                fontawesomeIcon: '<i class="fab fa-github-square"></i>',
                url: 'https://github.com/Asabeneh'
            },
            // {
            //     social: 'DEV.to',
            //     fontawesomeIcon: '',
            //     url: 'https://dev.to/asabeneh'
            // }
        ],
        skills: [
            ['✅','Web Development'],
            ['✅','Data Analysis'],
            ['✅','Data Visualization'],
            ['✅','Programming'],
            ['✅','Databases'],
            ['✅','Developing API'],
        ],
        bio:
            'I am an educator, developer, motivator and content creator. I am a life-long learner. If you like to know more about me checkout my LinkedIn or Github profile. Thank you so much for joining in my quest of changing everyone to developer.'
    },
    challenges: [
        {
            name: '30 Days Of Python',
            topics: [
                'Python',
                'Flask',
                'Numpy',
                'Pandas',
                'Statistics',
                'API',
                'MongoDB'
            ],
            days: 30,
            status: 'Done',
            questions: 'Above 500',
            projects: 'Two',
            interviewQns: '',
            githubUrl: 'https://github.com/Asabeneh/30-Days-Of-Python'
        },
        {
            name: '30 Days Of JavaScript',
            topics: ['JavaScript', 'ES6', 'Promise', 'async and await', 'DOM'],
            days: 30,
            status: 'Ongoing',
            questions: 'Above 500',
            projects: 'About 30',
            interviewQns: '',
            githubUrl: 'https://github.com/Asabeneh/30DaysOfJavaScript'
        },
        {
            name: '30 Days Of HTML_&_CSS',
            topics: ['CSS', 'Flex', 'Grid', 'CSS Animation'],
            days: 30,
            status: 'Coming',
            questions: 'Above 500',
            projects: 'Two',
            interviewQns: '',
            githubUrl: ''
        },
        {
            name: '30 Days Of React',
            topics: [
                'React',
                'React Router',
                'Redux',
                'Context API',
                'React Hooks',
                'MERN'
            ],
            days: 30,
            status: 'Coming',
            questions: '',
            projects: '',
            interviewQns: '',
            githubUrl: ''
        },
        {
            name: '30 Days Of ReactNative',
            topics: ['ReactNative', 'Redux'],
            days: 30,
            status: 'Coming',
            questions: '',
            projects: 'Two',
            interviewQns: '',
            githubUrl: ''
        },
        {
            name: '30 Days Of Fullstack',
            topics: ['React', 'Redux', 'MongoDB', 'Node', 'MERN'],
            days: 30,
            status: 'Coming',
            questions: '',
            projects: '',
            interviewQns: '',
            githubUrl: ''
        },
        {
            name: '30 Days Of Data_Analysis',
            topics: ['Python', 'Numpy', 'Pandas', 'Statistics', 'Visualization'],
            days: 30,
            status: 'Coming',
            questions: '',
            projects: '',
            interviewQns: '',
            githubUrl: ''
        },
        {
            name: '30 Days Of Machine_Learning',
            topics: [
                'Python',
                'Numpy',
                'Pandas',
                'Scikit-learn',
                'Scipy',
                'Linear Algebra',
                'Statistics',
                'Visualization'
            ],
            days: 30,
            status: 'Coming',
            questions: '',
            projects: '',
            interviewQns: '',
            githubUrl: ''
        }
    ]
}

challengeDiv.forEach((div, index) => {
    div.style.display = 'flex'
    div.style.flexWrap = 'wrap'
    div.style.marginBottom = '3px'
    let challenge = asabenehChallenges2020.challenges[index]
    let detailTag = document.createElement("details")
    let summaryTag = document.createElement("summary")
    let summaryText = document.createElement("p")

    let challengeTitle = challenge.name.split(" ").pop()
    summaryTag.innerHTML = challengeTitle

    let skillTopics = challenge.topics.join("<br>")
    summaryText.innerHTML = skillTopics

    detailTag.style.padding = '25px'

    detailTag.appendChild(summaryTag)
    detailTag.appendChild(summaryText)

    div.appendChild(detailTag)
})

let maindiv = document.createElement("div")
maindiv.style.textAlign = 'center'
htmlContent.appendChild(maindiv);

let nameDiv = document.createElement("h1");
function nameing(property) {
    nameDiv.innerHTML = `${property.firstName} ` + ` ${property.lastName}`;
}
nameing(asabenehChallenges2020.author)
maindiv.appendChild(nameDiv)

let biotext = document.createElement('p')
biotext.innerHTML = asabenehChallenges2020.author.bio;
maindiv.appendChild(biotext)

let authorInfoMain = document.createElement("div")
authorInfoMain.style.display = 'flex'
authorInfoMain.style.flexWrap = 'wrap'
authorInfoMain.style.textAlign = 'start'
let authorinfo1Div = document.createElement("div")
authorinfo1Div.style.marginRight = "55px"
let authorinfo1h = document.createElement("h3")
authorinfo1h.innerHTML = "titles";
let authorinfo1p = document.createElement("p")
let titleContent = asabenehChallenges2020.author.titles.join("<br>")
authorinfo1p.innerHTML = titleContent;
authorinfo1Div.appendChild(authorinfo1h)
authorinfo1Div.appendChild(authorinfo1p)
authorInfoMain.appendChild(authorinfo1Div)
maindiv.appendChild(authorInfoMain)

let authorinfo2Div = document.createElement("div")
authorinfo2Div.style.marginRight = "55px"
let authorinfo2h = document.createElement("h3")
authorinfo2h.innerHTML = "skills";
let authorinfo2p = document.createElement("p")
let skillsContent = asabenehChallenges2020.author.skills.join("<br>")
authorinfo2p.innerHTML = skillsContent;
authorinfo2Div.appendChild(authorinfo2h)
authorinfo2Div.appendChild(authorinfo2p)
authorInfoMain.appendChild(authorinfo2Div)
maindiv.appendChild(authorInfoMain)

let authorinfo3Div = document.createElement("div")
authorinfo3Div.style.marginRight = '0px'
let authorinfo3h = document.createElement("h3")
authorinfo3h.innerHTML = "qualification";
let authorinfo3p = document.createElement("p")
let qualificationContent = asabenehChallenges2020.author.qualifications.join("<br>")
authorinfo3p.innerHTML = qualificationContent;
authorinfo3Div.appendChild(authorinfo3h)
authorinfo3Div.appendChild(authorinfo3p)
authorInfoMain.appendChild(authorinfo3Div)
maindiv.appendChild(authorInfoMain)

let keywordsH = document.createElement("h2")
keywordsH.innerHTML = "keywords";
keywordsH.style.textAlign = "start"
maindiv.appendChild(keywordsH)

let keywordsMain = document.createElement("div")
keywordsMain.style.display = 'flex'
keywordsMain.style.flexWrap = "wrap"

let keywordBox = document.createElement("div")
keywordBox.style.marginRight = '20px'
keywordBox.style.paddingTop = '6px'
keywordBox.style.paddingBottom = '6px'
keywordBox.style.paddingRight = '20px'
keywordBox.style.paddingLeft = '20px'

keywordBox.style.borderRadius = '35%'
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
keywordBox.style.backgroundColor = getRandomColor()

for (let i = 0; i < asabenehChallenges2020.keywords.length; i++) {
    let keywordBox = document.createElement("div")
    keywordBox.style.marginRight = '12px'
    keywordBox.style.marginBottom = '10px'
    keywordBox.style.paddingTop = '6px'
    keywordBox.style.paddingBottom = '6px'
    keywordBox.style.paddingRight = '20px'
    keywordBox.style.paddingLeft = '20px'

    keywordBox.style.borderRadius = '100px'
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    keywordBox.style.backgroundColor = getRandomColor()

    keywordBox.innerHTML = "#" + asabenehChallenges2020.keywords[i]
    keywordsMain.appendChild(keywordBox)

}
maindiv.appendChild(keywordsMain)




// let iconsdiv = document.createElement("div")
// iconsdiv.style.display = 'flex';
// iconsdiv.style.flexWrap = 'wrap';
// function addingicons(property) {
//     for (let icon in property.socialLinks) {
//         iconsdiv.innerHTML = icon;
//     }
// }
// addingicons(asabenehChallenges2020.author)
// maindiv.appendChild(iconsdiv)
