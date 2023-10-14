import { render, screen } from '@testing-library/react';
import App from './App';

test('renders greeting message', () => {
  render(<App />);
  const linkElement = screen.getByText((content, element) => {
    return content.includes("Кононов К.Д. (02.03.03 - АИСа - о20)");
  })
  expect(linkElement).toBeInTheDocument();
});
