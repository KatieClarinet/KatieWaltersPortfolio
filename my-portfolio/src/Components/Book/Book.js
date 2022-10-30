import React from "react";
import "../Book/book.scss";

export default function Book({ book, link, text }) {
    const openInNewTab = (url) => {
        window.open(url, "_blank", "noopener,noreferrer");
    };
    return (
        <>
           
                <div class="cover">
                    <div class="book">
                        <label for="page-1" class="book__page book__page--1">
                            <img src={book} alt="" />
                        </label>

                        <label for="page-2" class="book__page book__page--4">
                            <div class="page__content">
                                <h1 class="page__content-title">I</h1>
                                <div class="page__content-blockquote">
                                   
                                </div>
                                <div class="page__content-text">
                                    {/* <p>His name was Gaal Dornick and he was just a country boy who had never seen Trantor before. That is, not in real life. He had seen it many times on the hyper-video, and occasionally in tremendous three-dimensional newscasts covering an Imperial Coronation or the opening of a Galactic Council. Even though he had lived all his life on the world of Synnax, which circled a star at the edges of the Blue Drift, he was not cut off from civilization, you see. At that time, no place in the Galaxy was. </p> */}

                                    {/* <p>There were nearly twenty-five million inhabited planets in the Galaxy then, and not one but owed allegiance to the Empire whose seat was on Trantor. It was the last half-century in which that could be said. </p> */}
                                    {/* <p>To Gaal, this trip was the undoubted climax of his young, scholarly life. He had been in space before so that the trip, as a voyage and nothing more, meant little to him. To be sure, he had traveled previously only as far as Synnax's only satellite in order to get the data on the mechanics of meteor driftage which he needed for his dissertation, but space-travel was all one whether one travelled half a million miles, or as many light years. </p> */}
                                </div>
                                <div class="page__number">3</div>
                            </div>
                        </label>

                        {/* <!-- Resets the page --> */}
                        <input type="radio" name="page" id="page-1" />

                        {/* <!-- Goes to the second page --> */}
                        <input type="radio" name="page" id="page-2" />
                        <label class="book__page book__page--2">
                            <div class="book__page-front">
                                <div class="page__content">
                                    <h1 class="page__content-book-title">
                                        Book Reviews
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
                                    <table class="page__content-table">
                                        
                                    </table>

                                    <div class="page__number">2</div>
                                </div>
                            </div>
                        </label>
                    </div>
                </div>
        
            <div onClick={() => openInNewTab(`${link}`)}>Go to live app</div>
            <br></br>
        </>
    );
}
