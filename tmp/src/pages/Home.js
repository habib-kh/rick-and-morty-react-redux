import React from 'react';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCharacters } from '../store/actions';
import { CharacterList, Layout } from '../components';

export default function Home({ match }) {
  const characters = useSelector((state) => state.characters.characters);
  const loading = useSelector((state) => state.characters.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacters());
  }, []);

  return (
    <Layout
      loading={loading}
      title="The Rick and Morty"
      desc="In this site we show you more information about Rick & Morty"
    >
      <CharacterList characters={characters} />
    </Layout>
  );
}
