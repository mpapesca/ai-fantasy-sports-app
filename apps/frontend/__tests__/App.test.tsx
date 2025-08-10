import { describe, it, expect } from 'vitest';
import App from '../src/App';
import { render } from '@testing-library/react';

describe('App', () => {
  it('renders Home page by default', () => {
    const { getByText } = render(<App />);
    expect(getByText('Home Page')).toBeTruthy();
  });

  it('renders About page when navigated', () => {
    // Simulate navigation to /about
    window.history.pushState({}, '', '/about');
    const { getByText } = render(<App />);
    expect(getByText('About Page')).toBeTruthy();
  });

  it('renders NotFound page for unknown route', () => {
    window.history.pushState({}, '', '/random');
    const { getByText } = render(<App />);
    expect(getByText('404 - Not Found')).toBeTruthy();
  });
});
