const mainReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_PAGE":
      return {
        ...state.moveWithMain,
        currentPage: action.payload,
      };
    default:
      return state.moveWithMain;
  }
};
export default mainReducer;
