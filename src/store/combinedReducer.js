import { combineReducers } from "redux";

import pokeFeedReducer from '../containers/PokeFeed/reducer'

export default rootReducer =>
  combineReducers({
    pokeFeedReducer: pokeFeedReducer
  });