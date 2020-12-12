import React, { createContext, useContext, useReducer } from 'react';

const characterDispatchContext = createContext(null);
const characterStateContext = createContext(null);

const useCharacterDispatch = () => {
  const context = useContext(characterDispatchContext);
  if (context === undefined) {
    throw new Error('it should have a value');
  }
  return context;
};

const useCharacterState = () => {
  const context = useContext(characterStateContext);
  if (context === undefined) {
    throw new Error('it should have a value');
  }
  return context;
};

const initialState = {
  loading: true,
  characters: [],
};

const characterReducer = (state, action) => {
  switch (action.type) {
    case 'loading':
      return {
        ...state,
        loading: action.payload,
      };
    case 'get':
      return {
        ...state,
        characters: action.payload,
      };
    default:
      return state;
  }
};

const CharacterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(characterReducer, initialState);
  return (
    <characterDispatchContext.Provider value={dispatch}>
      <characterStateContext.Provider value={state}>
        {children}
      </characterStateContext.Provider>
    </characterDispatchContext.Provider>
  );
};
