const initialState = {
  user: {},
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USER_SUCCESS":
      return {
        ...state,
        user: action.payload,
        error: null,
      };
    case "FETCH_USER_FAILURE":
      return {
        ...state,
        user: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
