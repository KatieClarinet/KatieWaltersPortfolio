import Katie from "../Assets/KatieWalters.png";

export default function About() {
    return (
        <>
            <div id="about">
                <h1>ABOUT</h1>
                <div className="left-right">
                    <div className="about-left">
                        <img src={Katie} alt={Katie} className="photo" />
                    </div>
                    <div className="about-right">
                        <br></br>
                        Hello, I’m Katie!
                        <br></br>
                        <br></br>A former music teacher and administrator, I am
                        now looking for my first role as a full stack developer!
                        <br></br>
                        <br></br>
                        When I'm not coding (quite rare!), I'm either reading, napping, or
                        playing with my kitten.
                        <br></br>
                        <br></br>
                        Read on to see my recent projects...
                    </div>
                </div>
            </div>
        </>
    );
}
