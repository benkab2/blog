import { render, screen } from '@testing-library/react';
import { Typography } from './Typography';

describe('Typography', () => {
  it('should load component correctly', () => {
    render(<Typography data-id="typography">Hello world</Typography>);

    const component = screen.getByTestId('typography');
    expect(component).toBeTruthy();
  });
});
