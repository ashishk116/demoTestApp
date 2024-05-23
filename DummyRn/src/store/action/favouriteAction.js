export const favouriteUsersAction = ( favourites ) => async (dispatch) => {
  try {
    
    console.log("FAVOURTIES",favourites)
    dispatch({ type: "FAVOURITEUSERS", payload: favourites });
  } catch (error) {
    console.log(error);
  }
};
