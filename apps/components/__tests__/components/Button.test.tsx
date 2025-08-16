import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../../src/components/Button';
import { describe, it, expect, vi } from 'vitest';

describe('Button (default export)', () => {
  it('renders children', () => {
    render(<Button>Unit Button</Button>);
    expect(screen.getByText('Unit Button')).not.toBeNull();
  });

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    fireEvent.click(screen.getByText('Click'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('passes props to MUI Button', () => {
    render(
      <Button color="primary" variant="contained">
        Props Test
      </Button>,
    );
    const button = screen.getByText('Props Test');
    expect(button).not.toBeNull();
    expect(button.className).toMatch(/MuiButton/);
  });
});
