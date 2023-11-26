import { ADD_ITEM, CLEAR_LIST } from "./actions";

const initialState = {
  items: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, { text: action.payload.text }],
      };
    case CLEAR_LIST:
      return {
        ...state,
        items: [],
      };
    default:
      return state;
  }
};

export default rootReducer;
