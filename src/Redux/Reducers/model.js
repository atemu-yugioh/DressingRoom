import * as types from "../../Constanst/ActionType";
const initialState = {
  topclothes: "",
  botclothes: "",
  shoes: "",
  handbags: "",
  necklaces: "",
  hairstyle: "",
  background: "",
};

export const model = (state = initialState, action) => {
  switch (action.type) {
    case types.CHOOSEN_CLOTHES: {
      state[action.clothes.type] = action.clothes.imgSrc_png;
      // state.topclothes = "./img/link_hinh_anh_tuong_duong"
      return { ...state };
    }
    default:
      return state;
  }
};
