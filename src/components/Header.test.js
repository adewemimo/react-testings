import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders header and shows text', () => {
  render(<Header text="learn react" />);
  const heading = screen.getByText(/learn react/i);
  expect(heading).toBeInTheDocument();
});

test('renders header and finds heading with text, by role', () => {
  render(<Header text="learn react" />);
  const heading = screen.getByRole("heading");
  expect(heading.textContent).toBe("learn react");
});
