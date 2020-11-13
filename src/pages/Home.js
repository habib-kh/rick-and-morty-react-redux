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
import { useDispatch, useSelector } from 'react-redux';
import { getCharacters } from '../store/actions';
import CharacterList from '../components/characterList';

export default function Home({ match }) {
  const characters = useSelector((state) => state.characters.characters);
  const loading = useSelector((state) => state.characters.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCharacters());
  }, []);
  return <CharacterList characters={characters} loading={loading} />;
}
