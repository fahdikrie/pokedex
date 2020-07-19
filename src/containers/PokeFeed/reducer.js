/* eslint-disable no-case-declarations */
/* eslint-disable array-callback-return */
import { fromJS } from "immutable";
import {
  FETCH_POKEMON_LIST,
  FETCH_POKEMON_LIST_SUCCESS,
  FETCH_POKEMON_LIST_FAILED
} from "./constants";

const initialState = fromJS({
  pokemonList: [],
  prevUrl: '',
  nextUrl: '',
  error: null,
  isLoaded: false,
  isLoading: false
});

// const initialState = {
//   pokemonList: [],
//   prevUrl: '',
//   nextUrl: '',
//   error: null,
//   isLoaded: false,
//   isLoading: false
// };

function pokeFeedReducer(state = initialState, action) {
  console.log('reducing...');
  console.log(action.type);

  switch (action.type) {
    case FETCH_POKEMON_LIST:
      console.log('fetching...');
      return state.set("isLoading", true);
    case FETCH_POKEMON_LIST_SUCCESS:
      console.log('success!');
      return {
        ...initialState,
        pokemonList: action.payload.results.map(arr => [arr.name, arr.url]),
        prevUrl: action.payload.previous,
        nextUrl: action.payload.next,
        error: null,
        isLoaded: true,
        isLoading: false
      }
      // return state
      //   .set(
      //     "pokemonList",
      //     action.payload.results
      //       .map(arr => [arr.name, arr.url])
      //   )
      //   .set("prevURL", action.payload.previous)
      //   .set("nextURL", action.payload.next)
      //   .set("isLoading", false)
      //   .set("isLoaded", true);
    case FETCH_POKEMON_LIST_FAILED:
      return state
        .set("error", action.payload)
        .set("isLoading", false)
        .set("isLoaded", false);
    default:
      return state;
  };
}

export default pokeFeedReducer;
