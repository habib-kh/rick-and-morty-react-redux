import React from 'react';
import { cleanup, screen } from '@testing-library/react';
import { Profile } from '../pages';
import api from '../services/api';
import { renderWithRouter, useWithRedux } from '../utils/test-utils';

jest.mock('../services/api');
jest.mock('../hooks/useEffect', () => {
  return { useEffect: require('react').useLayoutEffect };
});
afterEach(cleanup);
beforeEach(() => {
  api.get.mockImplementation((url) => {
    switch (url) {
      case 'character/1':
        return Promise.resolve({
          data: {
            id: 1,
            name: 'Rick Sanchez',
            status: 'Alive',
            species: 'Human',
            type: '',
            gender: 'Male',
            origin: {
              name: 'Earth (C-137)',
              url: 'https://rickandmortyapi.com/api/location/1',
            },
            location: {
              name: 'Earth (Replacement Dimension)',
              url: 'https://rickandmortyapi.com/api/location/20',
            },
            image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
            episode: [
              'https://rickandmortyapi.com/api/episode/1',
              'https://rickandmortyapi.com/api/episode/2',
            ],
            url: 'https://rickandmortyapi.com/api/character/1',
            created: '2017-11-04T18:48:46.250Z',
          },
        });
      case 'episode/1,2':
        return Promise.resolve({
          data: [
            {
              id: 1,
              name: 'Pilot',
              air_date: 'December 2, 2013',
              episode: 'S01E01',
              characters: [
                'https://rickandmortyapi.com/api/character/1',
                'https://rickandmortyapi.com/api/character/2',
                'https://rickandmortyapi.com/api/character/35',
                'https://rickandmortyapi.com/api/character/38',
                'https://rickandmortyapi.com/api/character/62',
                'https://rickandmortyapi.com/api/character/92',
                'https://rickandmortyapi.com/api/character/127',
                'https://rickandmortyapi.com/api/character/144',
                'https://rickandmortyapi.com/api/character/158',
                'https://rickandmortyapi.com/api/character/175',
                'https://rickandmortyapi.com/api/character/179',
                'https://rickandmortyapi.com/api/character/181',
                'https://rickandmortyapi.com/api/character/239',
                'https://rickandmortyapi.com/api/character/249',
                'https://rickandmortyapi.com/api/character/271',
                'https://rickandmortyapi.com/api/character/338',
                'https://rickandmortyapi.com/api/character/394',
                'https://rickandmortyapi.com/api/character/395',
                'https://rickandmortyapi.com/api/character/435',
              ],
              url: 'https://rickandmortyapi.com/api/episode/1',
              created: '2017-11-10T12:56:33.798Z',
            },
            {
              id: 2,
              name: 'Lawnmower Dog',
              air_date: 'December 9, 2013',
              episode: 'S01E02',
              characters: [
                'https://rickandmortyapi.com/api/character/1',
                'https://rickandmortyapi.com/api/character/2',
                'https://rickandmortyapi.com/api/character/38',
                'https://rickandmortyapi.com/api/character/46',
                'https://rickandmortyapi.com/api/character/63',
                'https://rickandmortyapi.com/api/character/80',
                'https://rickandmortyapi.com/api/character/175',
                'https://rickandmortyapi.com/api/character/221',
                'https://rickandmortyapi.com/api/character/239',
                'https://rickandmortyapi.com/api/character/246',
                'https://rickandmortyapi.com/api/character/304',
                'https://rickandmortyapi.com/api/character/305',
                'https://rickandmortyapi.com/api/character/306',
                'https://rickandmortyapi.com/api/character/329',
                'https://rickandmortyapi.com/api/character/338',
                'https://rickandmortyapi.com/api/character/396',
                'https://rickandmortyapi.com/api/character/397',
                'https://rickandmortyapi.com/api/character/398',
                'https://rickandmortyapi.com/api/character/405',
              ],
              url: 'https://rickandmortyapi.com/api/episode/2',
              created: '2017-11-10T12:56:33.916Z',
            },
          ],
        });
      case 'location/1':
        return Promise.resolve({
          data: {
            id: 1,
            name: 'Earth (C-137)',
            type: 'Planet',
            dimension: 'Dimension C-137',
            residents: [
              'https://rickandmortyapi.com/api/character/38',
              'https://rickandmortyapi.com/api/character/45',
              'https://rickandmortyapi.com/api/character/71',
              'https://rickandmortyapi.com/api/character/82',
              'https://rickandmortyapi.com/api/character/83',
              'https://rickandmortyapi.com/api/character/92',
              'https://rickandmortyapi.com/api/character/112',
              'https://rickandmortyapi.com/api/character/114',
              'https://rickandmortyapi.com/api/character/116',
              'https://rickandmortyapi.com/api/character/117',
              'https://rickandmortyapi.com/api/character/120',
              'https://rickandmortyapi.com/api/character/127',
              'https://rickandmortyapi.com/api/character/155',
              'https://rickandmortyapi.com/api/character/169',
              'https://rickandmortyapi.com/api/character/175',
              'https://rickandmortyapi.com/api/character/179',
              'https://rickandmortyapi.com/api/character/186',
              'https://rickandmortyapi.com/api/character/201',
              'https://rickandmortyapi.com/api/character/216',
              'https://rickandmortyapi.com/api/character/239',
              'https://rickandmortyapi.com/api/character/271',
              'https://rickandmortyapi.com/api/character/302',
              'https://rickandmortyapi.com/api/character/303',
              'https://rickandmortyapi.com/api/character/338',
              'https://rickandmortyapi.com/api/character/343',
              'https://rickandmortyapi.com/api/character/356',
              'https://rickandmortyapi.com/api/character/394',
            ],
            url: 'https://rickandmortyapi.com/api/location/1',
            created: '2017-11-10T12:42:04.162Z',
          },
        });
      case 'location/20':
        return Promise.resolve({
          data: {
            id: 20,
            name: 'Earth (Replacement Dimension)',
            type: 'Planet',
            dimension: 'Replacement Dimension',
            residents: [
              'https://rickandmortyapi.com/api/character/1',
              'https://rickandmortyapi.com/api/character/2',
              'https://rickandmortyapi.com/api/character/3',
              'https://rickandmortyapi.com/api/character/4',
              'https://rickandmortyapi.com/api/character/5',
              'https://rickandmortyapi.com/api/character/9',
              'https://rickandmortyapi.com/api/character/11',
              'https://rickandmortyapi.com/api/character/13',
              'https://rickandmortyapi.com/api/character/16',
              'https://rickandmortyapi.com/api/character/31',
              'https://rickandmortyapi.com/api/character/32',
              'https://rickandmortyapi.com/api/character/50',
              'https://rickandmortyapi.com/api/character/58',
              'https://rickandmortyapi.com/api/character/59',
              'https://rickandmortyapi.com/api/character/64',
              'https://rickandmortyapi.com/api/character/66',
              'https://rickandmortyapi.com/api/character/76',
              'https://rickandmortyapi.com/api/character/88',
              'https://rickandmortyapi.com/api/character/103',
              'https://rickandmortyapi.com/api/character/107',
              'https://rickandmortyapi.com/api/character/109',
              'https://rickandmortyapi.com/api/character/113',
              'https://rickandmortyapi.com/api/character/115',
              'https://rickandmortyapi.com/api/character/124',
              'https://rickandmortyapi.com/api/character/128',
              'https://rickandmortyapi.com/api/character/137',
              'https://rickandmortyapi.com/api/character/138',
              'https://rickandmortyapi.com/api/character/141',
              'https://rickandmortyapi.com/api/character/147',
              'https://rickandmortyapi.com/api/character/149',
              'https://rickandmortyapi.com/api/character/151',
              'https://rickandmortyapi.com/api/character/154',
              'https://rickandmortyapi.com/api/character/166',
              'https://rickandmortyapi.com/api/character/167',
              'https://rickandmortyapi.com/api/character/170',
              'https://rickandmortyapi.com/api/character/171',
              'https://rickandmortyapi.com/api/character/172',
              'https://rickandmortyapi.com/api/character/180',
              'https://rickandmortyapi.com/api/character/181',
              'https://rickandmortyapi.com/api/character/182',
              'https://rickandmortyapi.com/api/character/185',
              'https://rickandmortyapi.com/api/character/189',
              'https://rickandmortyapi.com/api/character/190',
              'https://rickandmortyapi.com/api/character/210',
              'https://rickandmortyapi.com/api/character/217',
              'https://rickandmortyapi.com/api/character/218',
              'https://rickandmortyapi.com/api/character/219',
              'https://rickandmortyapi.com/api/character/227',
              'https://rickandmortyapi.com/api/character/230',
              'https://rickandmortyapi.com/api/character/233',
              'https://rickandmortyapi.com/api/character/234',
              'https://rickandmortyapi.com/api/character/236',
              'https://rickandmortyapi.com/api/character/237',
              'https://rickandmortyapi.com/api/character/240',
              'https://rickandmortyapi.com/api/character/241',
              'https://rickandmortyapi.com/api/character/243',
              'https://rickandmortyapi.com/api/character/244',
              'https://rickandmortyapi.com/api/character/245',
              'https://rickandmortyapi.com/api/character/248',
              'https://rickandmortyapi.com/api/character/251',
              'https://rickandmortyapi.com/api/character/255',
              'https://rickandmortyapi.com/api/character/259',
              'https://rickandmortyapi.com/api/character/262',
              'https://rickandmortyapi.com/api/character/265',
              'https://rickandmortyapi.com/api/character/272',
              'https://rickandmortyapi.com/api/character/276',
              'https://rickandmortyapi.com/api/character/280',
              'https://rickandmortyapi.com/api/character/292',
              'https://rickandmortyapi.com/api/character/293',
              'https://rickandmortyapi.com/api/character/324',
              'https://rickandmortyapi.com/api/character/326',
              'https://rickandmortyapi.com/api/character/327',
              'https://rickandmortyapi.com/api/character/332',
              'https://rickandmortyapi.com/api/character/335',
              'https://rickandmortyapi.com/api/character/341',
              'https://rickandmortyapi.com/api/character/346',
              'https://rickandmortyapi.com/api/character/347',
              'https://rickandmortyapi.com/api/character/352',
              'https://rickandmortyapi.com/api/character/353',
              'https://rickandmortyapi.com/api/character/354',
              'https://rickandmortyapi.com/api/character/357',
              'https://rickandmortyapi.com/api/character/360',
              'https://rickandmortyapi.com/api/character/361',
              'https://rickandmortyapi.com/api/character/363',
              'https://rickandmortyapi.com/api/character/365',
              'https://rickandmortyapi.com/api/character/374',
              'https://rickandmortyapi.com/api/character/377',
              'https://rickandmortyapi.com/api/character/390',
              'https://rickandmortyapi.com/api/character/391',
              'https://rickandmortyapi.com/api/character/401',
              'https://rickandmortyapi.com/api/character/402',
              'https://rickandmortyapi.com/api/character/405',
              'https://rickandmortyapi.com/api/character/423',
              'https://rickandmortyapi.com/api/character/435',
              'https://rickandmortyapi.com/api/character/437',
              'https://rickandmortyapi.com/api/character/438',
              'https://rickandmortyapi.com/api/character/439',
              'https://rickandmortyapi.com/api/character/440',
              'https://rickandmortyapi.com/api/character/452',
              'https://rickandmortyapi.com/api/character/453',
              'https://rickandmortyapi.com/api/character/467',
              'https://rickandmortyapi.com/api/character/468',
              'https://rickandmortyapi.com/api/character/469',
              'https://rickandmortyapi.com/api/character/471',
              'https://rickandmortyapi.com/api/character/492',
              'https://rickandmortyapi.com/api/character/493',
              'https://rickandmortyapi.com/api/character/497',
              'https://rickandmortyapi.com/api/character/509',
              'https://rickandmortyapi.com/api/character/510',
              'https://rickandmortyapi.com/api/character/511',
              'https://rickandmortyapi.com/api/character/512',
              'https://rickandmortyapi.com/api/character/513',
              'https://rickandmortyapi.com/api/character/514',
              'https://rickandmortyapi.com/api/character/516',
              'https://rickandmortyapi.com/api/character/517',
              'https://rickandmortyapi.com/api/character/523',
              'https://rickandmortyapi.com/api/character/524',
              'https://rickandmortyapi.com/api/character/526',
              'https://rickandmortyapi.com/api/character/534',
              'https://rickandmortyapi.com/api/character/535',
              'https://rickandmortyapi.com/api/character/536',
              'https://rickandmortyapi.com/api/character/537',
              'https://rickandmortyapi.com/api/character/538',
              'https://rickandmortyapi.com/api/character/539',
              'https://rickandmortyapi.com/api/character/540',
              'https://rickandmortyapi.com/api/character/541',
              'https://rickandmortyapi.com/api/character/561',
              'https://rickandmortyapi.com/api/character/562',
              'https://rickandmortyapi.com/api/character/564',
              'https://rickandmortyapi.com/api/character/570',
              'https://rickandmortyapi.com/api/character/575',
              'https://rickandmortyapi.com/api/character/584',
              'https://rickandmortyapi.com/api/character/585',
              'https://rickandmortyapi.com/api/character/586',
              'https://rickandmortyapi.com/api/character/588',
              'https://rickandmortyapi.com/api/character/590',
              'https://rickandmortyapi.com/api/character/591',
              'https://rickandmortyapi.com/api/character/592',
              'https://rickandmortyapi.com/api/character/667',
            ],
            url: 'https://rickandmortyapi.com/api/location/20',
            created: '2017-11-18T19:33:01.173Z',
          },
        });
      default:
        console.log(url);
        return Promise.reject(new Error('not found'));
    }
  });

  renderWithRouter(useWithRedux(<Profile match={{ params: { id: 1 } }} />));
});

describe('profile component', () => {
  it('should render perfect', async () => {
    expect(api.get).toHaveBeenNthCalledWith(1, 'character/1');
    const titles = await screen.findAllByText(/Rick Sanchez/);
    expect(titles).toHaveLength(2);
    expect(api.get).toHaveBeenNthCalledWith(2, 'episode/1,2');
    expect(api.get).toHaveBeenNthCalledWith(3, 'location/20');
    expect(api.get).toHaveBeenNthCalledWith(4, 'location/1');
    expect(api.get).toBeCalledTimes(4);
    const locations = screen.getAllByText(/Earth/);
    expect(locations).toHaveLength(3);
    expect(screen.getAllByTestId('episode')).toHaveLength(2);
  });
});
