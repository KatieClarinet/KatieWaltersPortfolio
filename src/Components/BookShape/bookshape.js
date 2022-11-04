import React from "react";
import { useState } from "react";
import { Icon } from '@iconify/react';
import flower from '../../Assets/flower.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
const Bookshape = ({ item, stack, live, repo, darkmode}) => {
    // const [isRadio, setIsRadio] = useState(false);
    const [click, setClick] = useState(false);
    
    console.log(repo)
    // const handleChange = (e) => {
    //     console.log(e.currentTarget.value);

    //     setIsRadio((current) => !current);
    //     console.log(isRadio);
    // };

    const update = (e) => {
        console.log("book clicked");
        setClick((current) => !current);
    };


    const renderStack = (stack) =>
    stack.map((item) => {
        // console.log(item)
        return (
            <>
            <span class='icon-container'>
 <Icon icon={item.html} color='black' className="icon" /> 
 <Icon icon={item.mui} color='black' className="icon" /> 
 <Icon icon={item.css} color='black' className="icon"/> <br></br>
 <Icon icon={item.react} color='black' className="icon" />
 <Icon icon={item.javascript} color='black' className="icon" /><br></br>
 <Icon icon={item.express} color='black' className="icon"/>
 <Icon icon={item.node} color='black' className="icon" /><br></br>
 <Icon icon={item.postgres} color='black' className="icon" />
 <Icon icon={item.mongodb} color='black' className="icon" />
 <Icon icon={item.postman} color='black' className="icon" /><br></br>
 <Icon icon={item.heroku} color='black' className="icon"/>
 <Icon icon={item.netlify} color='black' className="icon" />
            </span>
            </>
        )
    });

    const renderLive = () =>  {
    // console.log(live)
    // console.log(repo)
    console.log(darkmode)
            return (
                <>
            <a className={darkmode ? "button-56-dark" : "button-56"} href={live} target="_blank" rel="noreferrer" >LINK</a>
            <br></br>
            <a className={darkmode ? "button-56-dark" : "button-56"} href={repo} target="_blank" rel="noreferrer" >REPO</a>
                </>
            )
    };
    


    return (
        <>
       
            <br></br>
            
            <div class="cover">
                <div class="book" onClick={update}>
                    <label for="page-1" class="book__page book__page--1">
                        <img className="project-image" src={item.image} alt="project" />
                    </label>

                    <label for="page-2" class="book__page book__page--4">
                        <div class="page__content">
                           <br></br>
                           <br></br>
                           <br></br>
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
                                <br></br>
                                <img src={flower} alt="flower" className="flower"/>    
                                <br></br>
                                <FontAwesomeIcon icon={faArrowRightLong} className="arrow"/>                  
                            </div>
                        </div>
                        <div class="book__page-back">
                            <div class="page__content">
                                <h1 class="page__content-title">
                                    TECHNOLOGIES
                                </h1>
                                {renderStack(stack)}

                                <div class="page__number">2</div>
                            </div>
                        </div>
                    </label>
                </div>
            </div>
            <div class='buttons'>
            {renderLive(live)}
            </div>
            <br></br>
        </>
    );
};

export default Bookshape;
