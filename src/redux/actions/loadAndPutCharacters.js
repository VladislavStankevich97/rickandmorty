import {
    PUT_CHARACTERS,
    LOAD_CHARACTERS,
  } from "./constants";
  
  export const putCharacters = (dataFromServer) => {
    return {
      type: PUT_CHARACTERS,
      payload: dataFromServer,
    };
  };
  
  export const loadCharacters = (page, status) => {
    return {
      type: LOAD_CHARACTERS,
      page,
      status,
    };
  };
  