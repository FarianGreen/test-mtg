const setLanguageAction = (newLang) => {
  return {
    type: "SET_LANGUAGE",
    payload: newLang,
  };
};

const changePage = (newPage) => {
  return {
    type: "CHANGE_PAGE",
    payload: newPage,
  };
};

export { setLanguageAction, changePage };
