import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import GenerateCard from './GenerateCard';

describe('<GenerateCard />', () => {
  test('it should mount', () => {
    render(<GenerateCard />);
    
    const generateCard = screen.getByTestId('GenerateCard');

    expect(generateCard).toBeInTheDocument();
  });
});