import * as types from "../Constanst/ActionType";

export const actChoosenType = (typeStyle) => {
  return {
    type: types.CHOOSEN_TYPE,
    typeStyle,
  };
};

export const actChoosenClothes = (clothes) => {
  return {
    type: types.CHOOSEN_CLOTHES,
    clothes,
  };
};
