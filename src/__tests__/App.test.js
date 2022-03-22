import { render, screen } from '@testing-library/react';
import App from '../components/App';

test('render tables', () => {
  render(<App />);
  const linkElement = screen.findAllByText(/tables_container/i);
  expect(linkElement).toBe(linkElement);
});
