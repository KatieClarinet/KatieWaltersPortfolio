import bookreviews from '../Assets/becks_bookcover.png'
import eviechargers from "../Assets/evie_bookcover.png";
import scalespractice from "../Assets/scales_bookcover.png";


let info = [
    {
        image: bookreviews,
        title: "Book Reviews",
        text: `
For my first react project I created this simple app where users can
    search and view my book reviews. 

    All reviews and photos are my own.
    `,
    livelink: 'https://becksbookreviews.netlify.app/',
    repolink: 'https://github.com/KatieClarinet/BookReviews_FrontEnd',
    stack: [
        {   html: 'akar-icons:html-fill',
            javascript: 'akar-icons:javascript-fill',
            css: 'akar-icons:css-fill',
            react: 'akar-icons:react-fill',
            express: 'logos:express',
            node: 'fa6-brands:node',
            postgres: 'akar-icons:postgresql-fill',
            postman: 'simple-icons:postman',
            heroku: 'simple-icons:heroku',
            netlify: 'simple-icons:netlify'
        }
    ]
    },
    {
        image: eviechargers,
        title: "EVie Chargers",
        text: `
A Route Planning app for users with Electric Vehicles, this was our 'Final Team Project' at School of Code. 
Users can plan a route, see chargers on the way, and read and leave reviews. 
    `,
    livelink: 'https://ev-ie.netlify.app',
    repolink: 'https://github.com/SchoolOfCode/final-project_front-end-evie',
    stack: [
        {   html: 'akar-icons:html-fill',
            javascript: 'akar-icons:javascript-fill',
            css: 'akar-icons:css-fill',
            react: 'akar-icons:react-fill',
            express: 'logos:express',
            node: 'fa6-brands:node',
            postgres: 'akar-icons:postgresql-fill',
            postman: 'simple-icons:postman',
            heroku: 'simple-icons:heroku',
            netlify: 'simple-icons:netlify'
        }
    ]
    },
    {
        image: scalespractice,
        title: "Scales Practice",
        text: `

Designed to aid classical musicians preparing for ABRSM examinations, the Practice Scales app allows the user to select their instrument and grade, then produces a random scale for them to practice. All ABRSM articulations have been included. 
`,
livelink: 'https://scales-practice.netlify.app/',
repolink: 'https://github.com/KatieClarinet/MusicalScales_FrontEnd',
stack: [
    {   html: 'akar-icons:html-fill',
        javascript: 'akar-icons:javascript-fill',
        mui: 'simple-icons:mui',
        react: 'akar-icons:react-fill',
        express: 'logos:express',
        node: 'fa6-brands:node',
        postman: 'simple-icons:postman',
        mongodb: 'simple-icons:mongodb',
        netlify: 'simple-icons:netlify'
    }
]
    },
];

export default info