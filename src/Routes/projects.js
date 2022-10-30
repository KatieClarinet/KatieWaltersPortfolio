import "./projects.css";


import Book from '../Components/Book/Book.js'


export default function Projects() {
    let bookText = `

    I'm an avid reader, and also like to write book
    reviews.

    I created this simple app where users can
    search and view my book reviews.
    `
    let scalesText = `

   Some text about the scales app will go here...

    `
    const handleChange = (event) => {
        // setinstrument(event.target.value);
        // console.log(event.target)
    };

    return (
        <>
            <div id="projects">
            
         
                <h1>PROJECTS</h1>
                <div className="book-container-outer" onClick={handleChange} >
<div>

                <Book />
</div>
<div>

                {/* <Book book={eviechargers} title={'EVie Chargers'} text={scalesText}/> */}
</div>
<div>

                 {/* <Book book={scalespractice} link={'https://scales-practice.netlify.app/'} title={'Scales Practice'} text={bookText}/> */}
</div>
                </div>
                
            </div>
        </>
    );
}
