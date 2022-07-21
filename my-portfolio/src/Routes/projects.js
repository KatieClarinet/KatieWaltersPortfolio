import Navbar from "../Components/Navbar/Navbar";

export default function Projects() {

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };

    return (
    <><Navbar /><div>
        <h1>Projects</h1>
            <p onClick={() => openInNewTab('https://majestic-custard-3096f6.netlify.app/')}>
                Rock Paper Scissors
            </p>
      <p onClick={() => openInNewTab('https://polite-cuchufli-be2b53.netlify.app/')}>
        Ron Swanson Quotes
      </p>
            
        </div></>
    );
  }