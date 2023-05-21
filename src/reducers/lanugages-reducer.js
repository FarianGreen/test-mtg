const languageReducer = (state, action) => {
  switch (action.type) {
    case "SET_LANGUAGE":
      return {
        ...state.moveWithLanguages,
        selectLanguage: action.payload,
      };
    default:
      return state.moveWithLanguages;
  }
};
export default languageReducer;
