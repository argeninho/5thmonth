const initialState = {
  userList: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        userList: [...state.userList, action.payload],
      };
    default:
      return state;
  }
};

export default userReducer;
