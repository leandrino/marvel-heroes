import createReducer from "../create-reducer";
import { FETCHING_HEROES } from "./actions";

const initialState = {
  fetchingHeroes: false
};

const ui = createReducer(initialState, {
  [FETCHING_HEROES]: state => ({
    ...state,
    fetchingHeroes: !state.fetchingHeroes
  })
});

export default ui;
