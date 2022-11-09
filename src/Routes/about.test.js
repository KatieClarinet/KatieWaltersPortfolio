
import { render, screen } from "@testing-library/react";
// import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
//COMPONENT TO TEST
import About from "./about";

//test block
test("image is rendering", () => {
    //ARRANGE - render the component on virtual dom
    render(<About />);
    
    //ASSERT - select the elements you want to interact with
    const image = screen.getByAltText(/Katie/i)
    const text = screen.getByText()
    
    //ACT - assert the expected result
    expect(image).toBeInTheDocument();

    
    });