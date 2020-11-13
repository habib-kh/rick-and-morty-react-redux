import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getCharacters } from '../redux/actions';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  card: {
    '&:hover': {},
  },
});
export default function Home({ match }) {
  const characters = useSelector((state) => state.characters.characters);
  const loading = useSelector((state) => state.characters.loading);
  const dispatch = useDispatch();
  const classes = useStyles();
  console.log('</Home> Rendered.');
  useEffect(() => {
    dispatch(getCharacters());
  }, []);
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
            <Grid key={character.id} item sm={6} md={3}>
              <Link to={`/profile/${character.id}`}>
                <Card className={classes.card}>
                  <CardMedia
                    component='img'
                    height='100%'
                    image={character.image}
                  />
                  <CardContent>
                    <Typography gutterBottom variant='h5' component='h2'>
                      {character.name}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
}
