import { Icon } from '@iconify/react';
import Form from "../Form/Form"


export default function Home({darkmode}) {
    const color = (darkmode) => (darkmode ? '#8ed1fc' : "#ed2e38");
 
    return(
        <>
        <div>

            <h1 className={ color ? "" : ""}>KATIE WALTERS</h1>
        </div>
        <p>Junior developer based in the
                <br></br>
                West Midlands</p>
                <div className='icons'>
                <a href="https://github.com/KatieClarinet" target="_blank" rel="noreferrer" title="Github">
                    <Icon icon="akar-icons:github-fill" color={color(darkmode)} width="48" height="48" />
                </a>
                <a href="https://twitter.com/katiecodes91" target="_blank" rel="noreferrer" title="Twitter">
                    <Icon icon="akar-icons:twitter-fill" color={color(darkmode)} width="48" height="48" />
                </a>

                <a href="https://www.linkedin.com/in/katie-walters" target="_blank" rel="noreferrer" title="LinkedIn">
                    <Icon icon="akar-icons:linkedin-box-fill" color={color(darkmode)} width="48" height="48" />
</a>
                
                {/* <Icon icon="fontisto:email" color={color(darkmode)} width="48" height="48" onClick={handleClick}/> */}
                
            <Form darkmode={darkmode} />
</div>
            </>
    )
}