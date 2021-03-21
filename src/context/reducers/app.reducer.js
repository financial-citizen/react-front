export default (state, { payload, type }) => {
  switch(type) {

    case 'CHANGE_THEME_MODE':
      return {
        ...state,
        mode: {
          ...state.mode,
          theme: payload,
          modeTheme: payload === 'light' ? state.themes.lightTheme : state.themes.darkTheme
        }
      };

    default:
      return state;
  }
}
