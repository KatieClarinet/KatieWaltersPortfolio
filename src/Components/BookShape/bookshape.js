import React from "react";
import { useState } from "react";

const Bookshape = ({ item }) => {
    // const [isRadio, setIsRadio] = useState(false);

    const [click, setClick] = useState(false);

    // const handleChange = (e) => {
    //     console.log(e.currentTarget.value);

    //     setIsRadio((current) => !current);
    //     console.log(isRadio);
    // };

    const update = (e) => {
        console.log("book clicked");
        setClick((current) => !current);
    };

    return (
        <>
            <br></br>
            <div class="cover">
                <div class="book" onClick={update}>
                    <label for="page-1" class="book__page book__page--1">
                        <img src={item.image} alt="" />
                    </label>

                    <label for="page-2" class="book__page book__page--4">
                        <div class="page__content">
                            <h1 class="page__content-title">I</h1>
                            <div class="page__content-blockquote">
                                <p class="page__content-blockquote-text">
                                    {item.text}
                                </p>
                                <p class="page__content-blockquote-text"></p>
                                <p class="page__content-blockquote-text"></p>
                                
                            </div>

                            {/* <input
                            type="radio"
                            display="none"
                            id="radio1"
                            value="hello"
                            onChange={handleChange}
                            checked={isRadio === 1}
                            className="radio"
                            style={{ opacity: '0'}}
                        /> */}
                            <div class="page__number">3</div>
                        </div>
                    </label>
                    {/*
<!-- Resets the page --> */}
                    {/* <input type="radio" name="page" id="page-1" /> */}

                    {/* <!-- Goes to the second page --> */}
                    {/* <input type="radio" name="page" id="page-2" /> */}
                    <label
                        class="book__page book__page--2"
                        style={{
                            "background-image":
                                "linear-gradient(-90deg, #e3e3e3 0%, rgba(247, 247, 247, 0) 18%)",
                            transform: click ? "rotateY(-180deg)" : "",
                            transition: click
                                ? "transform 0.9s cubic-bezier(0.645, 0.045, 0.355, 1"
                                : "",
                        }}
                    >
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
                                    TECHNOLOGIES
                                </h1>
                                <img
                                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                                    alt="html5"
                                    width="40"
                                    height="40"
                                />
                                <img
                                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                                    alt="css3"
                                    width="40"
                                    height="40"
                                />
                                <br></br>
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
                                    alt="materialui"
                                    width="40"
                                    height="40"
                                />
                                <img
                                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                                    alt="javascript"
                                    width="40"
                                    height="40"
                                />
                                 <br></br>
                                <img
                                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                                    alt="react"
                                    width="40"
                                    height="40"
                                />
                                <img
                                    src="https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg"
                                    alt="netlify"
                                    width="40"
                                    height="40"
                                />

                                <div class="page__number">2</div>
                            </div>
                        </div>
                    </label>
                </div>
            </div>
            <br></br>
        </>
    );
};

export default Bookshape;
