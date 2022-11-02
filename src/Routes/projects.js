import Book from "../Components/Book/Book.js";

export default function Projects({darkmode}) {
    return (
        <>
            <div id="projects">
                <h1>PROJECTS</h1>

                <Book darkmode={darkmode}/>
            </div>
        </>
    );
}
