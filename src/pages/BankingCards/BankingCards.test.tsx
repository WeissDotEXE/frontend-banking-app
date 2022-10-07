import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BankingCards from './BankingCards';

describe('<BankingCards />', () => {
  test('it should mount', () => {
    render(<BankingCards />);
    
    const bankingCards = screen.getByTestId('BankingCards');

    expect(bankingCards).toBeInTheDocument();
  });
});