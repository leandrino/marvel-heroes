import { combineReducers } from "redux";
import ui from "./ui";
import heroes from "./heroes";

export default combineReducers({
  ui,
  heroes
});
