import { render, screen, prettyDOM } from '@testing-library/react';
import Header from './components/Header';

describe("Header", ()=>{
  it.skip('renders the Header and finds the text (regex)', () => {
    render(<Header text="This is a test" />);
  
    const linkElement = screen.getByText(/this is a test/i);
    expect(linkElement).toBeInTheDocument();
  });
  
  it.skip('renders the Header and finds the text (string)', () => {
    render(<Header text="This is a test" />);
  
    const linkElement = screen.getByText("This is a test");
    expect(linkElement).toBeInTheDocument();
  });
  
  it.skip('renders the Header and finds the h2 element', () => {
    render(<Header text="This is a test" />);
  
    const heading = screen.getByRole("heading");
    // console.log(prettyDOM(heading));
    expect(heading.textContent).toBe("This is a test");
  });

});