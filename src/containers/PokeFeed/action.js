import axios from "axios";
import {
  FETCH_POKEMON_LIST,
  FETCH_POKEMON_LIST_SUCCESS,
  FETCH_POKEMON_LIST_FAILED,
  FETCH_NEXT_POKEMON_LIST_SUCCESS,
  FETCH_NEXT_POKEMON_LIST_FAILED
} from "./constants";

import { fetchPokeListAPI } from "../../api";

export function fetchPokeList() {
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

export function loadNextPage(nextPageUrl) {
  return dispatch => {
    axios
    .get(nextPageUrl)
    .then(response => {
      dispatch({
        payload: response.data,
        type: FETCH_NEXT_POKEMON_LIST_SUCCESS
      });
    })
    .catch(error => {
      dispatch({
        payload: error,
        type: FETCH_NEXT_POKEMON_LIST_FAILED
      });
    });
  }
}