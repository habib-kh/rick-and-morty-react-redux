import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function CharacterCard({ character }) {
  return (
    <Grid key={character.id} item sm={6} md={3}>
      <Link to={`/profile/${character.id}`}>
        <Card>
          <CardMedia component='img' height='100%' image={character.image} />
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              {character.name}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </Grid>
  );
}
