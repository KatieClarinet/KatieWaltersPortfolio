import Book from "../Components/Book/Book.js";

export default function Projects({darkmode}) {
    return (
        <>
            <div id="projects">
            <div className={ darkmode? "projects-title-dark" : "projects-title"}>

                <h1 >PROJECTS</h1>
                Click on each book to read more
            </div>

                <Book darkmode={darkmode}/>
            </div>
        </>
    );
}
