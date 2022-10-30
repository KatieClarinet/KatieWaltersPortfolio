import { useState } from "react";
import Hamburger from "../Hamburger/hamburger"



export default function Navbar() {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen);
        console.log("clicked");
    };

    return (
    <>
    <div><nav className="navigation">
            <a className="link" href="#app">Home</a>
            <a className="link" href="#projects">Projects</a>
        </nav><div className="hamburger" onClick={toggleHamburger}>
                <Hamburger isOpen={hamburgerOpen} />
            </div>
            <style>{`
                .navigation {
                    padding-top: 10px;
                    width: 99vw;
                    color: #ED2E38;
                    display: flex;
                    justify-content: flex-end;
                    position: fixed;
                }
                .link {
                    padding: 0 5px;
                    overflow: hidden;
                    font-size: 1.9vw;
                    font-family: 'Quicksand', sans-serif;
                }
                
                a:link {
                    color: #ED2E38;
                    text-decoration: none;
                }
                a:visited {
                    color: #ED2E38;
                }
                a:hover {
                    color: #F9C2CC;
                    
                }
                .hamburger{
                    visibility: ${hamburgerOpen ? "visible" : "hidden"};
                    z-index: 6;
                    
                } 
                @media only screen and (max-width: 900px) {
                    .hamburger {
                    visibility: visible;
                    display: fixed;
                      padding-top: 10px;
                      margin-left: 10px;
                      z-index: 6;
                      opacity: 0.9;
                     
                  }
                  .navigation {
                    display: ${hamburgerOpen ? "flex" : "none"};
                    flex-direction: column;
                    background-color: #F9C2CC;
                    opacity: 0.9;
                    justify-content: space-around;
                    align-items: center;
                    width: 100vw;
                    position: fixed;
                    
                  }
                  .link {
                    margin: 2vh;
                    font-size: 5vw;
                      
                  }
                    }
                @media only screen and (max-width: 600px) {
              
                  .link {
                    {/* padding: 0.5vh; */}
                    font-size: 6vw;
                  }
                 
              }
              
            `}</style>
        </div></>
    )
    }