import { PUT_CHARACTERS, SHOW_STATUS, SHOW_SPECIES, SHOW_GENDER } from "../actions/constants";

const initialState = {
  modal: false,
  pages: 34,
  page: 1,
  status: "",
  characters: [],
};

const putCharacters = (state = initialState, action) => {
  switch (action.type) {
    case PUT_CHARACTERS:
      console.log(action.payload);
      return {
        ...state,
        pages: action.payload.info.pages,
        characters: action.payload.results.splice(0, 10),
        page: action.page,
      };
    // case SHOW_STATUS:
    //   return {
    //     ...state,
    //   };
    // case SHOW_SPECIES:
    //   console.log(action.status);
    //   return {
    //     ...state,
    //   };
    // case SHOW_GENDER:
    //   console.log(action.status);
    //   return {
    //     ...state,
    //   };
    default:
      return state;
  }
};

export default putCharacters;
