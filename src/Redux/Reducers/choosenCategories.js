import * as types from "../../Constanst/ActionType";
const initialState = "topclothes";

export const choosenCategories = (state = initialState, action) => {
  switch (action.type) {
    case types.CHOOSEN_TYPE: {
      return action.typeStyle;
    }
    default:
      return state;
  }
};
