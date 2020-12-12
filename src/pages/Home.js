import React from 'react';

import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getCharacters } from '../store/actions';
import { CharacterList, Layout } from '../components';
import { useCharacter, getCharacters } from '../context/character-context';

export default function Home({ match }) {
  const [state, dispatch] = useCharacter();
  const { characters, loading } = state;
  console.log(state);
  useEffect(() => {
    getCharacters(dispatch);
  }, []);

  return (
    <Layout
      loading={loading}
      title='The Rick and Morty'
      desc='In this site we show you more information about Rick & Morty'
    >
      <CharacterList characters={characters} />
    </Layout>
  );
}
