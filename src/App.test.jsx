import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByText(/Phutana/i)).toBeInTheDocument();
  });

  it('contains logo images', () => {
    const { container } = render(<App />);
    const images = container.querySelectorAll('img');
    expect(images.length).toBeGreaterThan(0);
  });

  it('has counter button', () => {
    render(<App />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
