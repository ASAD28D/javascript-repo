let htmlContent = document.querySelectorAll('.wrapper')
let challengeDivMain = document.querySelectorAll('#challengeDivMain')
let challengeDiv = document.querySelectorAll('.challengeDiv')
let challengeP = document.querySelectorAll('.challengeP')
console.log(challengeP)
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

console.log()
challengeDiv.forEach(div => {
    div.style.display = 'flex'
    div.style.flexWrap = 'wrap'
    div.style.marginBottom = '3px'
    let detailTag = document.createElement("details");
    div.appendChild(detailTag)
})

let textContentString;
let lastWord;

challengeP.forEach((Item, index) => {
    Item.style.padding = '16px'
    Item.style.marginTop = '0px'
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
            'MSc. Computer Science Ongoing',
            'BSc. Information and Communication Eng.',
            'MSc. Food Technology',
            'BSc.Food Technology'
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
            {
                social: 'DEV.to',
                fontawesomeIcon: '',
                url: 'https://dev.to/asabeneh'
            }
        ],
        skills: [
            'Web Development',
            'Data Analysis',
            'Data Visualization',
            'Programming',
            'Databases',
            'Developing API'
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

for (let challenge of asabenehChallenges2020.challenges) {
    let summarytag = document.createElement("summary");
    let summarytext = document.createElement("p");
    challengeTitle = challenge.name.split(" ").pop()
    summarytag.textContent = challengeTitle
    console.log(summarytag)
    let skillTopics = challenge.topics.join("<br> ")
    summarytext.textContent = skillTopics
}

// detailTag.forEach(item => {
//     item.style.padding = '16px'
//     item.appendChild(summarytag)
//     item.appendChild(summarytext)
// })

