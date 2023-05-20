const initialState = {
  selectLanguage: "Ru",
  languages: [
    { id: 1, lang: "Ru" },
    { id: 2, lang: "En" },
  ],
};

const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LANGUAGE":
      return {
        ...state.moveWithLanguages,
        selectLanguage: action.selectLanguage,
      };
    default:
      return state;
  }
};
export default languageReducer;
