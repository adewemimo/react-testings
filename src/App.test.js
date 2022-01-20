import { render, screen, prettyDOM, within, fireEvent, getAllByRole } from '@testing-library/react';
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

  // Using Relative search
  it('clicks Load and checks if list has specific items', () => {
    render(<App />);

    const button = screen.getByText("Load Users");

    fireEvent.click(button);

    // Search for list by Role
    const users = screen.getByRole("list");

    // find the listItems inside this list. Preferred pattern
    const listItems = within(users).queryAllByRole("listitem");

    // can do this, but it doesn't like it!
    // const listItems = getAllByRole(users, "listitem");

    expect(listItems).toBeTruthy();
    // console.log(prettyDOM(users));

    const items = listItems.map(item => item.innerHTML);

    expect(listItems.length).toEqual(4);
    expect(items).toEqual(["Alice", "Bob", "Kira", "Mallory"]);
  });


});