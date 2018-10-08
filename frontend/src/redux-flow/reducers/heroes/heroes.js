import createReducer from "../create-reducer";
import { LIST_HEROES, PAGINATION } from "./actions";

const initialState = {
  list: [],
  pagination: {}
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
  })
});

export default heroes;
