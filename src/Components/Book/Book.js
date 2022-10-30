import React, { useEffect } from "react";
import { useState } from "react";
import "../Book/book.scss";
import bookreviews from "../../Assets/becks_bookcover.png";
import eviechargers from "../../Assets/evie_bookcover.png"
import scalespractice from '../../Assets/scales_bookcover.png'

export default function Book({ book, link, text, title }) {
    const [project, setProject] = useState()
    const [clicked, setClicked] = useState(false)
    const openInNewTab = (url) => {
        window.open(url, "_blank", "noopener,noreferrer");
    };

    useEffect(() => {
        const handleChange = (event) => {
            // setinstrument(event.target.value);
            console.log(clicked)
            console.log(event)
        };
        handleChange()
    }, [clicked])
    // console.log(instrument);

    const clickedProject = (event) => {
        // setinstrument(event.target.value);
        setClicked(current => !current)
        console.log(clicked)
        console.log(event.target.value)
    };
    

    let info = [{
        "image": bookreviews,
        "title": "Book Reviews",
        "text": `

        I'm an avid reader, and also like to write book
        reviews.
    
        I created this simple app where users can
        search and view my book reviews.
        `
    },
    {
        "image": eviechargers,
        "title": "EVie Chargers",
        "text": `

        Some words about EVie charger project
        `
    },
{
    "image": scalespractice,
    "title": "Scales Practice",
    "text": `

    Some words about Scales project
    `
}]
useEffect(() => {

    setProject(info)
}, []) 

const renderBooks = (project) =>
    info.map((item) => {
       
        // console.log(item.title)
        // console.log('project', project)
return (
    <>
    <div >

<div class="cover">
        <div class="book">
            <label for="page-1" class="book__page book__page--1" >
                <img src={item.image} alt={item.title}  />
            </label>

            <label for="page-2" class="book__page book__page--4" >
                <div class="page__content" value={item.title} >
                    <h1 class="page__content-title">I</h1>
                    <div class="page__content-blockquote">

                    </div>
                    <div class="page__content-text">
                        {item.text}
                        {/* <p>His name was Gaal Dornick and he was just a country boy who had never seen Trantor before. That is, not in real life. He had seen it many times on the hyper-video, and occasionally in tremendous three-dimensional newscasts covering an Imperial Coronation or the opening of a Galactic Council. Even though he had lived all his life on the world of Synnax, which circled a star at the edges of the Blue Drift, he was not cut off from civilization, you see. At that time, no place in the Galaxy was. </p> */}

                        {/* <p>There were nearly twenty-five million inhabited planets in the Galaxy then, and not one but owed allegiance to the Empire whose seat was on Trantor. It was the last half-century in which that could be said. </p> */}
                        {/* <p>To Gaal, this trip was the undoubted climax of his young, scholarly life. He had been in space before so that the trip, as a voyage and nothing more, meant little to him. To be sure, he had traveled previously only as far as Synnax's only satellite in order to get the data on the mechanics of meteor driftage which he needed for his dissertation, but space-travel was all one whether one travelled half a million miles, or as many light years. </p> */}
                    </div>
                    <div class="page__number">3</div>
                </div>
            </label>

            {/* <!-- Resets the page --> */}
            <input type="radio" name="page" id="page-1" value={item.title} onClick={clickedProject} />

            {/* <!-- Goes to the second page --> */}
            <input type="radio" name="page" id="page-2" />
            <label class="book__page book__page--2" onClick={clickedProject} >
                <div class="book__page-front">
                    <div class="page__content">
                        <h1 class="page__content-book-title">
                            {item.title}
                        </h1>
                        <h2 class="page__content-author">
                            Katie Walters
                        </h2>




                    </div>
                </div>
                <div class="book__page-back">
                    <div class="page__content">
                        <h1 class="page__content-title">
                            Technologies
                        </h1>
                        <div>

                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40" /> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" alt="materialui" width="40" height="40" />
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40" /> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40" />
                            <img src="https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg" alt="netlify" width="40" height="40" />
                        </div>


                        <div class="page__number">2</div>
                    </div>
                </div>
            </label>
        </div>
    </div><div className="links-box">
            <br></br>
            <div className="github-link" onClick={() => openInNewTab(`${link}`)}>Link to GitHub Repo</div>
            <br></br>
            <div className="project-link" onClick={() => openInNewTab(`${link}`)}>Link to live app</div>
        </div> </div>

        
    
    
    
    
    
    
    </>
)
    });






    return (
        <>
            {renderBooks(info)}
                {/* <div class="cover">
                    <div class="book" onClick={handleChange} value={book}>
                        <label for="page-1" class="book__page book__page--1">
                            <img src={book} alt="" />
                        </label>

                        <label for="page-2" class="book__page book__page--4">
                            <div class="page__content">
                                <h1 class="page__content-title">I</h1>
                                <div class="page__content-blockquote">
                                   
                                </div>
                                <div class="page__content-text">
                                {text} */}
                                    {/* <p>His name was Gaal Dornick and he was just a country boy who had never seen Trantor before. That is, not in real life. He had seen it many times on the hyper-video, and occasionally in tremendous three-dimensional newscasts covering an Imperial Coronation or the opening of a Galactic Council. Even though he had lived all his life on the world of Synnax, which circled a star at the edges of the Blue Drift, he was not cut off from civilization, you see. At that time, no place in the Galaxy was. </p> */}

                                    {/* <p>There were nearly twenty-five million inhabited planets in the Galaxy then, and not one but owed allegiance to the Empire whose seat was on Trantor. It was the last half-century in which that could be said. </p> */}
                                    {/* <p>To Gaal, this trip was the undoubted climax of his young, scholarly life. He had been in space before so that the trip, as a voyage and nothing more, meant little to him. To be sure, he had traveled previously only as far as Synnax's only satellite in order to get the data on the mechanics of meteor driftage which he needed for his dissertation, but space-travel was all one whether one travelled half a million miles, or as many light years. </p> */}
                                {/* </div>
                                <div class="page__number">3</div>
                            </div>
                        </label> */}

                        {/* <!-- Resets the page --> */}
                        {/* <input type="radio" name="page" id="page-1" /> */}

                        {/* <!-- Goes to the second page --> */}
                        {/* <input type="radio" name="page" id="page-2" />
                        <label class="book__page book__page--2">
                            <div class="book__page-front">
                                <div class="page__content">
                                    <h1 class="page__content-book-title">
                                        {title}
                                    </h1>
                                    <h2 class="page__content-author">
                                       Katie Walters
                                    </h2>

                                    

                                    
                                </div>
                            </div>
                            <div class="book__page-back">
                                <div class="page__content">
                                    <h1 class="page__content-title">
                                        Technologies
                                    </h1>
                                    <div>

                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" alt="materialui" width="40" height="40" />
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/>
<img src="https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg" alt="netlify" width="40" height="40" />
                                    </div>
                                    

                                    <div class="page__number">2</div>
                                </div>
                            </div>
                        </label>
                    </div>
                </div>
        <div className="links-box">
        <br></br>
            <div className="github-link" onClick={() => openInNewTab(`${link}`)}>Link to GitHub Repo</div>
            <br></br>
            <div className="project-link" onClick={() => openInNewTab(`${link}`)}>Link to live app</div>
        </div>
            <br></br> */}
        </>
    );
}
