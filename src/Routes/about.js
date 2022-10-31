import Katie from '../Assets/KatieWalters.png'

export default function About() {
    return (
        <>
        <div id="about">
            <h1>ABOUT</h1>
            <div className="left-right">
            <div className="about-left">
            <img src={Katie} alt={Katie} className='photo'/></div>
            <div className="about-right">
            <p>Hello, I’m Katie!
I’m soon to graduate from the School of Code as a Junior Fullstack Developer. 


Previously I worked in music education as a clarinet teacher and in various administrative roles.
            </p></div>
            </div>
        </div></>
    );
  }