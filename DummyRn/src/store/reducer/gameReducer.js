const initalState = {
    length: 21,
    random: 0
  }
  
  export default (state = initalState, {type, payload}) => {
    switch(type) {
      case "UPDATENUMBER":
        return {...state, length: payload.length, random: payload.random};
  
      default:
        return state;
    }
  }