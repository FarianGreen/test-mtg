import languageReducer from "./lanugages-reducer";

const reducer = (state, action) => {
  return {
    moveWithLanguages: languageReducer(state, action),
  };
};
export default reducer;
