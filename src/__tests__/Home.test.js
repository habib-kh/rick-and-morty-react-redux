import React from 'react';
import { cleanup, screen } from '@testing-library/react';
import { Home } from '../pages';
import api from '../services/api';
import { renderWithRouter, useWithRedux } from '../utils/test-utils';

jest.mock('../services/api');
jest.mock('../hooks/useEffect', () => {
  return { useEffect: require('react').useLayoutEffect };
});
// beforeAll(() =>
//   jest.spyOn(React, 'useEffect').mockImplementation(React.useLayoutEffect),
// );
// afterAll(() => React.useEffect.mockRestore());
afterEach(cleanup);
describe('Home Page', () => {
  it('should render without problem', async () => {
    api.get.mockResolvedValueOnce({
      data: {
        results: [
          {
            id: 1,
            name: 'Rick Sanchez',
            status: 'Alive',
            species: 'Human',
            type: '',
            gender: 'Male',
            location: {
              name: 'Earth',
            },
          },
          {
            id: 2,
            name: 'Morty Smith',
            status: 'Alive',
            species: 'Human',
            type: '',
            gender: 'Male',
            location: {
              name: 'Earth',
            },
          },
        ],
      },
    });
    renderWithRouter(useWithRedux(<Home />));
    expect(api.get).toBeCalledTimes(1);
    const element = await screen.findByText(/Rick Sanchez/);
    const cards = screen.getAllByTestId('character-card');
    expect(cards).toHaveLength(2);
    screen.debug();
    expect(element).toBeInTheDocument();
  });
});
