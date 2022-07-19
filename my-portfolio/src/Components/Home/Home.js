import { Icon } from '@iconify/react';

export default function Home() {

    return(
        <div classname="home">
        <h1>KATIE WALTERS</h1>
        <br></br>
        <p>Full stack developer based in the
        <br></br>West Midlands</p>
        <div className='icons'>

        <Icon icon="akar-icons:github-fill" color="#ed2e38" width="48" height="48" />
        <Icon icon="akar-icons:twitter-fill" color="#ed2e38" width="48" height="48" />
        <Icon icon="akar-icons:linkedin-box-fill" color="#ed2e38" width="48" height="48" />
        <Icon icon="fontisto:email" color="#ed2e38" width="48" height="48" />
        </div>
        </div>
    )
}