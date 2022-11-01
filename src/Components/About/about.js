import Katie from "../../Assets/KatieWalters.png";

export default function About() {
    return (
        <>
            <div id="about">
                <h1>ABOUT</h1>
                <br></br>
                <div className="left-right">
                    <div className="about-left">
                        <img src={Katie} alt={Katie} className="photo" />
                    </div>
                    <br></br>
                    <div className="about-right">
                        <div className="bio">
                            <br></br>
                            Originally a classically trained clarinetist, I
                            recently made the switch from concerts => coding!
                            <br></br>
                            <br></br>
                            My journey began with the 16 week School of Code
                            bootcamp, where I trained in industry best
                            practices, agile methodology, pair programming and
                            computational thinking. <br></br>
                            <br></br>
                            I’m an avid reader (historical fiction or anything
                            where I can get lost in other lands/cultures),
                            collector of plants and ‘cat mom’ to my ginger
                            kitten Crunchie!
                            <br></br>
                            <br></br>
                            Based in the West Midlands, I am currently looking
                            for my first role as a Junior Developer.
                            <br></br>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
