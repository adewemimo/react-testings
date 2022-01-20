import { render, screen } from '@testing-library/react';
import App from 'App';


test('renders App and find + button', () => {


  render(<App />);

  const button = screen.getByText("+");
  expect(button).toBeInTheDocument();
});
