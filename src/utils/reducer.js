export default (state, action) => {
  let newState = {...state};

  switch(action.type) {
    case "SET_THEME":
      newState.theme = action.data;
      break;
    default:
      break;
  }

  return newState;
}