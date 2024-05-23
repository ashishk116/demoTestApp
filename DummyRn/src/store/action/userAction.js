export const loginUser = ({username, password}) => async(dispatch) => {
    try {
        console.log("CHECKING user",username)
        if (username == 'reactnative@jetdevs.com' && password == 'jetdevs@123') {
            dispatch({ type: "LOGIN", payload: username })
        }
    } catch (error) {
        console.log(error);
    }
}