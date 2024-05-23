export const removeFromFavourite = (name) => async (dispatch, getState) => {
  try {
   // console.log("CHECKING THIS FAVOURITE", name);

    const { favouriteUsers } = getState().favourite;
    // Filter out the user whose first name matches the provided name
    const updatedFavouriteUsers = favouriteUsers.filter((user) => user.first !== name);
    console.log("CHECKING THIS updatedFavouriteUsers", updatedFavouriteUsers);

    dispatch({ type: "REMOVEFROMFAV", payload: updatedFavouriteUsers });
  
  
    //   console.log("CHECKING THIS FAVOURITE",name)

  //   const { favouriteUsers } = getState().favourite;
  //  // [{"first": "Benjamin", "last": "Fowler", "title": "Mr"}, {"first": "Maria", "last": "Sørensen", "title": "Ms"}]
  //   const updatedFavouriteUsers = favouriteUsers.filter((user) => user.first !== name);
  //   console.log("CHECKING THIS FAVOURITE",favouriteUsers)

  //   dispatch({ type: "REMOVE_FROM_FAVOURITE", payload: updatedFavouriteUsers });
  } catch (error) {
    console.log(error);
  }
};
