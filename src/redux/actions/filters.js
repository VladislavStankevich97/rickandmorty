import {
    SHOW_STATUS,
    SHOW_SPECIES,
    SHOW_GENDER,
  } from "./constants";
  
  export const showStatus = (payload) => {
    return {
      type: SHOW_STATUS,
      payload,
    };
  };
  
  export const showSpecies = (payload) => {
    return {
      type: SHOW_SPECIES,
      payload,
    };
  };

  export const showGender = (payload) => {
    return {
      type: SHOW_GENDER,
      payload,
    };
  };