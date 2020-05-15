import axios from 'axios';
export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const PUSH_DATA_FAILURE = 'PUSH_DATA_FAILURE';
export const PUSH_DATA_START = 'PUSH_DATA_START';
export const PUSH_DATA_SUCCESS = 'PUSH_DATA_SUCCESS';
// Initial fetch of data
export const fetchData = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_DATA_START });

        axios
            .get('http://localhost:3333/smurfs')
            .then((res) => {
                console.log(res);
                dispatch({
                    type: FETCH_DATA_SUCCESS,
                    payload: res.data,
                });
            })
            .catch((err) => {
                console.log(err);
                dispatch({
                    type: FETCH_DATA_FAILURE,
                    payload: err,
                });
            });
    };
};
export const pushData = (newSmurf) => {
    return (dispatch) => {
        dispatch({ type: PUSH_DATA_START });

        axios
            .post('http://localhost:3333/smurfs', newSmurf)
            .then((res) => {
                console.log(res);
                dispatch({
                    type: PUSH_DATA_SUCCESS,
                    payload: res,
                });
            })
            .catch((err) => {
                console.log(err);
                dispatch({
                    type: PUSH_DATA_FAILURE,
                    payload: err,
                });
            });
    };
};
