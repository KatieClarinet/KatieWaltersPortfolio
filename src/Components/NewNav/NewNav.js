import React from 'react'
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import ParticleBackground from '../particleBackground/particleBackground'

const NewNav = ({darkmode, setDarkMode}) => {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
 
    const toggleTheme = () => {
      setDarkMode(current => !current)
        // if (darkmode) {
        //   setDarkMode("dark");
        // } 
        // else {
        //   setDarkMode("light");
        // }
    };

  return (
    <><nav className="navigation">
      <div className="toggle">
        <input
          type="checkbox"
          className="checkbox"
          id="checkbox"
          onClick={toggleTheme}
        ></input>
        <label for="checkbox" className="toggle-label">
          <FontAwesomeIcon icon={faMoon} />
          <FontAwesomeIcon icon={faSun} />
          <div className="ball"></div>
        </label>
      </div>

      <button
        className={darkmode ? "hamburger-dark" : "hamburger"}
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        } }
      >
        {/* icon from heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd" />
        </svg>
      </button>
      <div
        // className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
        className={isNavExpanded ? (darkmode ? "navigation-menu-dark expanded" : "navigation-menu expanded") : !darkmode ? "navigation-menu" : "navigation-menu-dark"}>

        {/* className={darkmode ? (isNavExpanded ? "navigation-menu-dark expanded" : "navigation-menu-dark") : !darkmode ? "navigation-menu expanded" : "navigation-menu"}> */}
        {/* Dark mode? (isNavExpanded? Dark move expanded : dark mode) : !Darkmode ? expanded : not expanded; */}
         {/* className={darkmode ? "navigation-menu-dark" : "navigation-menu" && isNavExpanded ? "navigation-menu expanded" : "navigation-menu-dark expanded"}> */}
        <ul>
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#projects">PROJECT</a>
          </li>
        </ul>
      </div>
    </nav><ParticleBackground darkmode={darkmode} /></> 
  );
}

export default NewNav