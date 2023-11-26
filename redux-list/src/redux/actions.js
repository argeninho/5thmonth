export const ADD_ITEM = "ADD_ITEM";
export const CLEAR_LIST = "CLEAR_LIST";

export const addItem = (text) => ({
  type: ADD_ITEM,
  payload: { text },
});

export const clearList = () => ({
  type: CLEAR_LIST,
});
