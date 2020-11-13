import axios from 'axios';
import {
  SET_CHARACTERS_LOADING,
  SET_CHARACTERS,
  SET_PROFILE,
  SET_PROFILE_LOADING,
  SET_EPISODES_LOADING,
  SET_EPISODES,
  SET_LOCATION_LOADING,
  SET_LOCATION,
  SET_ORIGIN,
  SET_ORIGIN_LOADING,
} from './consts';

export const getCharacters = () => {
  return (dispatch) => {
    dispatch(setCharactersLoading(true));
    axios.get('https://rickandmortyapi.com/api/character/').then((response) => {
      const charachters = response.data.results;
      dispatch(setCharacters(charachters));
    });
  };
};

export const setCharactersLoading = (payload) => ({
  type: SET_CHARACTERS_LOADING,
  payload: payload,
});

export const setCharacters = (charachters) => ({
  type: SET_CHARACTERS,
  payload: charachters,
});

export const getProfile = (id) => {
  return (dispatch) => {
    dispatch(setProfileLoading(true));
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => {
        const charachters = response.data;
        dispatch(setProfile(charachters));
      });
  };
};

export const setProfileLoading = (payload) => ({
  type: SET_PROFILE_LOADING,
  payload: payload,
});

export const setProfile = (profile) => ({
  type: SET_PROFILE,
  payload: profile,
});

export const getEpisodes = (episodes) => {
  return (dispatch) => {
    console.log('in action');
    dispatch(setEpisodeLoading(true));
    axios
      .get(
        `https://rickandmortyapi.com/api/episode/${episodes.map(
          (episode) => episode.split('episode/')[1],
        )}`,
      )
      .then((response) => {
        if (Array.isArray(response.data)) {
          const episodesList = response.data;
          dispatch(setEpisodes(episodesList));
        } else {
          const episodesList = response.data;
          dispatch(setEpisodes([episodesList]));
        }
      });
  };
};

export const setEpisodeLoading = (payload) => ({
  type: SET_EPISODES_LOADING,
  payload: payload,
});

export const setEpisodes = (episodes) => ({
  type: SET_EPISODES,
  payload: episodes,
});

export const getLocation = (locationURL) => {
  return (dispatch) => {
    dispatch(setLocationLoading(true));
    axios
      .get(
        `https://rickandmortyapi.com/api/location/${
          locationURL.split('location/')[1]
        }`,
      )
      .then((response) => {
        const charachters = response.data;
        dispatch(setLocation(charachters));
      });
  };
};

export const setLocationLoading = (payload) => ({
  type: SET_LOCATION_LOADING,
  payload: payload,
});

export const setLocation = (profile) => ({
  type: SET_LOCATION,
  payload: profile,
});

export const getOrigin = (locationURL) => {
  return (dispatch) => {
    dispatch(setOriginLoading(true));
    axios
      .get(
        `https://rickandmortyapi.com/api/location/${
          locationURL.split('location/')[1]
        }`,
      )
      .then((response) => {
        const charachters = response.data;
        dispatch(setOrigin(charachters));
      });
  };
};

export const setOriginLoading = (payload) => ({
  type: SET_LOCATION_LOADING,
  payload: payload,
});

export const setOrigin = (profile) => ({
  type: SET_LOCATION,
  payload: profile,
});
