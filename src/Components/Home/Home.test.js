

import { render, screen } from "@testing-library/react";
// import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
//COMPONENT TO TEST
import Home from "./Home";

//test block
test("links in Home working", () => {
//ARRANGE - render the component on virtual dom
render(<Home />);

//ASSERT - select the elements you want to interact with
let linkGithub = screen.getByRole('link', {name: 'Github'})
let linkTwitter = screen.getByRole('link', {name: 'Twitter'})
let linkLinkedIn = screen.getByRole('link', {name: 'LinkedIn'})

//ACT - assert the expected result
expect(linkGithub).toHaveAttribute('href', 'https://github.com/KatieClarinet');
expect(linkTwitter).toHaveAttribute('href', 'https://twitter.com/katiecodes91');
expect(linkLinkedIn).toHaveAttribute('href', 'https://www.linkedin.com/in/katie-walters');

});



    //test block
test("text on Home", () => {
    //ARRANGE - render the component on virtual dom
    render(<Home />);
    
    //ASSERT - select the elements you want to interact with
    let title = screen.getByRole('heading')
    //ACT - assert the expected result
    expect(title).toHaveTextContent('KATIE WALTERS')
    expect(screen.getByText('Junior developer based in the West Midlands')).toBeInTheDocument()
    });

