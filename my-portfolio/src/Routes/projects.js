import "./projects.css";
import bookreviews from "../Assets/becks_bookcover.png";
import eviechargers from "../Assets/evie_bookcover.png"
import scalespractice from '../Assets/scales_bookcover.png'

import Book from '../Components/Book/Book.js'


export default function Projects() {
    let bookText = `

    I'm an avid reader, and also like to write book
    reviews.

    I created this simple app where users can
    search and view my book reviews.
    `

    return (
        <>
            <div id="projects">
            
         
                <h1>PROJECTS</h1>
                <div className="book-container-outer">

                <Book book={bookreviews} link={'https://becksbookreviews.netlify.app/'} text={bookText}/>
                <Book book={eviechargers}/>
                 <Book book={scalespractice} link={'https://scales-practice.netlify.app/'}/>
                </div>
                
            </div>
        </>
    );
}
