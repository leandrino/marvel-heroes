import createReducer from "../create-reducer";
import { HERO, LIST_HEROES, PAGINATION } from "./actions";

const initialState = {
  list: [],
  pagination: {},
  hero: {}
};

const heroes = createReducer(initialState, {
  [LIST_HEROES]: (state, action) => ({
    ...state,
    list: [...action.payload]
  }),
  [PAGINATION]: (state, action) => ({
    ...state,
    pagination: {
      ...action.payload
    }
  }),
  [HERO]: (state, action) => ({
    ...state,
    hero: {
      ...action.payload
    }
  })
});

export default heroes;
