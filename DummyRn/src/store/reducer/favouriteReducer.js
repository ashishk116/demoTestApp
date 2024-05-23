const initalState = {
    favouriteUsers: [],
  }
  
  export default (state = initalState, {type, payload}) => {
    switch(type) {
      case "FAVOURITEUSERS":
        return {...state, favouriteUsers:[...state.favouriteUsers,payload]};
  
        case "REMOVEFROMFAV":
          console.log("checking this payload",payload)
          return {...state, favouriteUsers:payload};
      default:
        return state;
    }
  }