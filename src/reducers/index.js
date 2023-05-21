import languageReducer from "./lanugages-reducer";
import mainReducer from "./main-reducer";
import data from "../data/data.json";

const initialState = {
  moveWithLanguages: {
    selectLanguage: "Ru",
    languages: [
      { id: 1, lang: "Ru" },
      { id: 2, lang: "En" },
    ],
  },
  moveWithMain: {
    currentPage: 1,
    data,
  },
};

const reducer = (state = initialState, action) => {
  return {
    moveWithLanguages: languageReducer(state, action),
    moveWithMain: mainReducer(state, action),
  };
};
export default reducer;
