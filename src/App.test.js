import { render, screen, prettyDOM, getByText, fireEvent } from '@testing-library/react';
import App from "App";

describe("App", () => {

  it.skip('renders App without crashing', () => {
    render(<App />);
  });

  it.skip('renders the header properly', () => {
    const { container } = render(<App />);
    console.log(prettyDOM(container));
    const text = screen.getByText("Hello React");
    expect(text).toBeInTheDocument();
  });

  it.skip('finds the Counter', () => {
    const { container } = render(<App />);
    console.log(prettyDOM(container));

    const counter = screen.getByTestId("counter");
    // expect(text).toBeInTheDocument();
  });

  it.skip('finds the Counter + button', () => {
    const { container } = render(<App />);

    const counter = screen.getByTestId("counter");
    const button = screen.getByText("+");
    fireEvent.click(button);

    const count = screen.getByTestId("count");

    expect(count.textContent).toBe("1");

    // expect(text).toBeInTheDocument();
  });

  it.skip('check if list empty', () => {
    render(<App />);

    const users = screen.getByRole("list");
    
    const list = screen.queryAllByTestId("user");
    expect(list).toBeTruthy();
    expect(list.length).toEqual(0);

    // expect(text).toBeInTheDocument();
  });

  it.skip('clicks Load and checks if list has 4 items', () => {
    render(<App />);

    const button = screen.getByText("Load Users");

    fireEvent.click(button);

    // // const user = screen.getByTestId("users");
    const list = screen.queryAllByTestId("user");
    expect(list).toBeTruthy();
    expect(list.length).toEqual(4);
  });

  it('clicks Load and checks if list has specific items', () => {
    render(<App />);

    const button = screen.getByText("Load Users");

    fireEvent.click(button);

    // // const user = screen.getByTestId("users");
    // const list = screen.queryAllByTestId("user");
    const list = screen.queryAllByRole("listitem");
    expect(list).toBeTruthy();
    const users = screen.getByRole("list");
    console.log(prettyDOM(users));

    const items = list.map(item => item.innerHTML);

    expect(list.length).toEqual(4);
    expect(items).toEqual(["Alice", "Bob", "Kira", "Mallory"]);
  });


});