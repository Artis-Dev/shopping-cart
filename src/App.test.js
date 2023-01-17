import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders Hello world! string', () => {
  render(<App />);
  const stringElement = screen.getByText(/Hello world!/i);
  expect(stringElement).toBeInTheDocument();
});
