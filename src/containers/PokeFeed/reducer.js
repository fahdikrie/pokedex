/* eslint-disable no-case-declarations */
/* eslint-disable array-callback-return */
import {
  FETCH_POKEMON_LIST,
  FETCH_POKEMON_LIST_SUCCESS,
  FETCH_POKEMON_LIST_FAILED,
  FETCH_NEXT_POKEMON_LIST,
  FETCH_NEXT_POKEMON_LIST_SUCCESS,
  FETCH_NEXT_POKEMON_LIST_FAILED
} from "./constants";


const initialState = {
  pokemonList: [],
  prevUrl: '',
  nextUrl: '',
  error: null,
  isLoaded: false,
  isLoading: false
};

function pokeFeedReducer(state = initialState, action) {
  console.log('reducing...');
  console.log(action.type);

  switch (action.type) {
    case FETCH_POKEMON_LIST:
      console.log('fetching...');
      return {
        ...state,
        isLoading: true
      }

    case FETCH_POKEMON_LIST_SUCCESS:
      console.log('success!');
      const pokemonData = action.payload.results.map(arr => [arr.name.toUpperCase(), arr.url]);

      return {
        ...state,
        pokemonList: pokemonData.map((arr, i) => [arr[0], arr[1], i+1]),
        prevUrl: action.payload.previous,
        nextUrl: action.payload.next,
        isLoaded: true,
        isLoading: false
      }

    case FETCH_POKEMON_LIST_FAILED:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
        isLoaded: false
      }

    case FETCH_NEXT_POKEMON_LIST:
      console.log('fetching...');
      return {
        ...state,
        isLoading: true,
        isNextLoading: true
      }

    case FETCH_NEXT_POKEMON_LIST_SUCCESS:
      console.log('success!');
      const newPokemonData = action.payload.results.map(arr => [arr.name.toUpperCase(), arr.url]);

      return {
        ...state,
        pokemonList: [...state.pokemonList].concat(newPokemonData).map((arr, i) => [arr[0], arr[1], i+1]),
        prevUrl: action.payload.previous,
        nextUrl: action.payload.next,
        isLoaded: true,
        isLoading: false
      }

    case FETCH_NEXT_POKEMON_LIST_FAILED:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
        isLoaded: false
      }

    default:
      return state;
  };
}

export default pokeFeedReducer;
