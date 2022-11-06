import Katie from "../Assets/PortfolioPic.png";
import redFlower from '../Assets/redflower.png'
import blueFlower from '../Assets/blueflower.png'

export default function About({darkmode}) {
    return (
        <>
            <div id="about">
                <h1>ABOUT</h1>
                <div className={ darkmode? "left-right-dark" : "left-right"}>
                    <div className="about-left">
                        <img src={Katie} alt={Katie} className={ darkmode? "photo-dark" : "photo" }/>
                    </div>
                        
                    <div className="about-right">
{/* <text className="bio"> */}



<br></br>
                        Originally a classically trained clarinetist,
                        <br></br>
                        I recently made the switch from concerts => coding! 
                        
                        <img src={ darkmode? blueFlower : redFlower} alt="flower" className="about-flower"/> 
                        
                        My journey began with the 16 week School of Code bootcamp, where I trained in industry best practices, agile methodology, pair programming and computational thinking.                        <br></br>
                        <img src={ darkmode? blueFlower : redFlower} alt="flower" className="about-flower"/> 
                        I’m an avid reader (historical fiction or anything where I can get lost in other lands/cultures), collector of plants and ‘cat mom’ to my ginger kitten Crunchie!
                        <img src={ darkmode? blueFlower : redFlower} alt="flower" className="about-flower"/> 
                        Based in the West Midlands, I am currently looking for my first role as a Junior Developer.
                        <br></br>   
 {/* </text> */}


                    </div>
                </div>
            </div>
        </>
    );
}
