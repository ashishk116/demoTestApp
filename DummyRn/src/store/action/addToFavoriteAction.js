export const addToFavorite = ({ favourites, user }) => async (dispatch) => {
    try {
      let updatedFavourites = [...favourites];
      const index = updatedFavourites.findIndex((favUser) => favUser.id === user.id);
  
      if (index === -1) {
        updatedFavourites.push(user); // Add to favorites if not already in the list
      } else {
        updatedFavourites = updatedFavourites.filter((favUser) => favUser.id !== user.id); // Remove from favorites if already in the list
      }
  
      dispatch({ type: "LOGIN", payload: updatedFavourites });
    } catch (error) {
      console.log(error);
    }
  };
  