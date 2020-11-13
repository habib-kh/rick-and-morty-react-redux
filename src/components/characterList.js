import React from 'react';
import { Container, Grid } from '@material-ui/core';
import CharacterCard from './characterCard';
export default function CharacterList({ characters, loading }) {
  return (
    <Container>
      <Grid
        container
        spacing={2}
        direction='row'
        justify='flex-start'
        alignItems='flex-start'
      >
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          characters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))
        )}
      </Grid>
    </Container>
  );
}
