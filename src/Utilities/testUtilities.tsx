import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

export const renderWithMemoryRouter = (
  initialEntries: string,
  Element: React.ReactChild | React.ReactElement
) => {
  return render(
    <MemoryRouter initialEntries={[initialEntries]}>{Element}</MemoryRouter>
  );
};

export const textExpecter = (text: string) => {
    return expect(screen.getByText(text)).toBeInTheDocument();
}

export const elementFinder = async (countryName: string, delay?: number) => {
    return expect(
      await screen.findByTestId(countryName, {}, { timeout: delay || 1000 })
    ).toBeInTheDocument();
};

export const textFinderRx = async (text: string) => {
    return expect(
      await screen.findByText(new RegExp(text), {}, { timeout: 1000 })
    ).toBeInTheDocument();
};