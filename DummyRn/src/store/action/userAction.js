export const loginUser = ({username, password}) => async(dispatch) => {
    try {
        console.log("CHECKING user",username)
        if (username == 'abcd' && password == '123') {
            dispatch({ type: "LOGIN", payload: username })
        }
    } catch (error) {
        console.log(error);
    }
}