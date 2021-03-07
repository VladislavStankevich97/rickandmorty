import { combineReducers } from "redux";
import putCharacters from "./putCharacters";
import modal from './modal'

export default combineReducers({
  modal,
  putCharacters,
});
