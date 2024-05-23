const initalState = {
  userName: ''
}

export default (state = initalState, {type, payload}) => {
  switch(type) {
    case "LOGIN":
      return {...state, userName: payload};

    default:
      return state;
  }
}