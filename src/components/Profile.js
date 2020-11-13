import { Container, Grid, makeStyles } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getEpisodes,
  getLocation,
  getOrigin,
  getProfile,
} from '../redux/actions';
import _ from 'underscore';

const useStyle = makeStyles({
  red: {
    background: 'red',
  },
  green: {
    background: 'green',
  },
});

export default function Profile({
  match: {
    params: { id },
  },
}) {
  // console.log(props);
  const profile = useSelector((state) => state.profile.profile);
  const loading = useSelector((state) => state.profile.loading);
  const episodes = useSelector((state) => state.episodes.episodes);
  const episodesLoading = useSelector((state) => state.episodes.loading);
  const location = useSelector((state) => state.location.location);
  const locationLoading = useSelector((state) => state.location.loading);
  const origin = useSelector((state) => state.origin.origin);
  const originLoading = useSelector((state) => state.origin.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfile(id));
  }, []);
  // get Episodes of character
  useEffect(() => {
    if (!_.isEmpty(profile)) {
      console.log('in IF');
      console.log(profile);
      dispatch(getEpisodes(profile.episode));
    }
  }, [profile]);
  //get location and origin of profile
  useEffect(() => {
    if (!_.isEmpty(profile)) {
      if (profile.location.url) dispatch(getLocation(profile.location.url));
      if (profile.origin.url) dispatch(getOrigin(profile.origin.url));
    }
  }, [profile]);
  // var classes = useStyle();
  return (
    <Container>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <Grid
          container
          spacing={2}
          direction='row'
          justify='center'
          alignItems='center'
        >
          <Grid item container md={12} alignItems='center' justify='center'>
            <h1>{profile?.name}</h1>
          </Grid>
          <Grid
            item
            container
            alignItems='center'
            justify='center'
            sm={12}
            md={6}
          >
            <img alt={profile?.name} src={profile?.image}></img>
          </Grid>
          <Grid item sm={12} md={6}>
            <ul>
              <li>
                <strong>Name:</strong> {profile?.name}
              </li>
              <li>
                <strong>Gender:</strong> {profile?.gender}
              </li>
              <li>
                <strong>Species:</strong> {profile?.species}
              </li>
              <li>
                <strong>Status:</strong> {profile?.status}
              </li>
              <li>
                <strong>Location:</strong>
                {locationLoading ? (
                  'loading...'
                ) : (
                  <ul>
                    <li>name: {location.name}</li>
                    <li>type: {location.type}</li>
                    <li>dimension: {location.dimensions}</li>
                    <li>amount of residents: {location.residents.length}</li>
                  </ul>
                )}
              </li>
              <li>
                <strong>origin:</strong>
                {originLoading ? (
                  'loading...'
                ) : (
                  <ul>
                    <li>name: {origin.name}</li>
                    <li>type: {origin.type}</li>
                    <li>dimension: {origin.dimensions}</li>
                    <li>amount of residents: {origin.residents.length}</li>
                  </ul>
                )}
              </li>
              {episodesLoading ? (
                <li>Loading...</li>
              ) : (
                <li>
                  <strong>Episodes:</strong>
                  <ol>
                    {episodes.map((episode) => (
                      <li key={episode.id}>{episode.name}</li>
                    ))}
                  </ol>
                </li>
              )}
            </ul>
          </Grid>
        </Grid>
      )}
    </Container>
  );
}
