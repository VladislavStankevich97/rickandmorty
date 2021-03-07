import { SHOW_MODAL, HIDE_MODAL } from "../actions/constants";

const initialState = {
  image: null,
  name: null,
  status: null,
  species: null,
  gender: null,
  modal: false,
};

const modal = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      console.log(action.payload)
      return {
        ...state,
        image: action.payload.row.image,
        name: action.payload.row.name,
        status: action.payload.row.status,
        species: action.payload.row.species,
        gender: action.payload.row.gender,
        modal: true,
      };
    case HIDE_MODAL:
      return {
        ...state,
        modal: false,
      };
    default:
      return state;
  }
};

export default modal;