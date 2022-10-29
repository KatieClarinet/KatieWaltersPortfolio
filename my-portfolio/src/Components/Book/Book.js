import React from "react";


export default function Book({ book, link, text }) {
    const openInNewTab = (url) => {
        window.open(url, "_blank", "noopener,noreferrer");
    };
    return (
        <>

        <div className="book-area">
            <div className="book">
                <div className="back"></div>
                <div className="page6">
                    {/* <div className="right-hand-text">{text}</div> */}
                    <div onClick={() => openInNewTab(`${link}`)}>
                        Go to live app
                    </div>
                </div>
                <div className="page5">
                    <span className="flipH">TECH STACK;
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" alt="materialui" width="40" height="40" />
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/>
<img src="https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg" width="40" height="40" alt="netlify"/></span>
                </div>
                <div className="page4"></div>
                <div className="page3"></div>
                <div className="page2"></div>
                <div className="page1"></div>
                <div className="front">
                    <div className="image-container">
                        <img
                            src={book}
                            alt="bookreviews"
                            className="bookreviews"
                        ></img>
                    </div>
                </div>
            </div>
        </div></>
    );
}
