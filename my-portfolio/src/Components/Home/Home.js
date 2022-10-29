import { Icon } from '@iconify/react';

export default function Home() {

    return(
        <div classname="home">
        <div id="title">
        <h1>KATIE WALTERS</h1>
        </div>
        <br></br>
        <p>Full stack developer based in the
        <br></br>West Midlands</p>
        <div className='icons'>
        <a href="https://github.com/KatieClarinet" target="_blank" rel="noreferrer">
        <Icon icon="akar-icons:github-fill" color="#ed2e38" width="48" height="48" />
        </a>
        <a href="https://twitter.com/katiecodes91" target="_blank" rel="noreferrer">
        <Icon icon="akar-icons:twitter-fill" color="#ed2e38" width="48" height="48" />
        </a>
        
        <a href="https://www.linkedin.com/in/katie-walters" target="_blank" rel="noreferrer">
        <Icon icon="akar-icons:linkedin-box-fill" color="#ed2e38" width="48" height="48" />

        </a>
        <Icon icon="fontisto:email" color="#ed2e38" width="48" height="48" />
        </div>
        </div>
    )
}