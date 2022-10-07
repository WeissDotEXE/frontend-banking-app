import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Auth from './Auth';

describe('<Auth />', () => {
  test('it should mount', () => {
    render(<Auth />);
    
    const auth = screen.getByTestId('Auth');

    expect(auth).toBeInTheDocument();
  });
});