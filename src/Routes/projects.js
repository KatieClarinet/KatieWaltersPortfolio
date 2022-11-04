import Book from "../Components/Book/Book.js";

export default function Projects({darkmode}) {
    return (
        <>
            <div id="projects">
                <h1 className={ darkmode? "projects-title-dark" : "projects-title"}>PROJECTS</h1>

                <Book darkmode={darkmode}/>
            </div>
        </>
    );
}
