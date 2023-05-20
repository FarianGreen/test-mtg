const setLanguageAction = (newLang) => {
  return {
    type: "SET_LANGUAGE",
    selectLanguage: newLang,
  };
};

export { setLanguageAction };
