import createReducer from "../create-reducer";
import { LIST_HEROES } from "./actions";

const initialState = {};

const heroes = createReducer(initialState, {
  [LIST_HEROES]: (state, action) => ({
    ...state,
    list: [...action.payload]
  })
});

export default heroes;
