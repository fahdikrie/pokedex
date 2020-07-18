import axios from "axios";
import {
  FETCH_POKEMON_LIST,
  FETCH_POKEMON_LIST_SUCCESS,
  FETCH_POKEMON_LIST_FAILED
} from "./constants";

import { fetchPokeListAPI } from "api";

export function fetchPokemonList() {
  return dispatch => {
    dispatch({ type: FETCH_POKEMON_LIST });
    axios
      .get(fetchPokeListAPI)
      .then(response => {
        dispatch({
          payload: response.data,
          type: FETCH_POKEMON_LIST_SUCCESS
        });
      })
      .catch(error => {
        dispatch({
          payload: error,
          type: FETCH_POKEMON_LIST_FAILED
        });
      });
  };
}
