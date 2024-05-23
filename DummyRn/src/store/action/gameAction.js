export const getRandomNumber = ({coinLength,turn }) => async(dispatch) => {
    try {
        let random = Math.floor(Math.random() * 4 + 1)
        if(coinLength <= 4) {
            if(turn) {
                random = coinLength-1;
            } else {
                random = coinLength
            }
        } else {
            if(!turn && coinLength - random == 1) {
                if(random < 4) {
                    random++;
                } else {
                    random--;
                }
            }
        }
        dispatch({type: "UPDATENUMBER", payload: {random, coinLength}})
    } catch (error) {
        console.log(error);
    }
}