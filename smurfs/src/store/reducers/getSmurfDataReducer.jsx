import {
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
} from '../actions';

const initialState = {
    isFetching: false,
    error: '',
    smurfsList: [],
};

const getSmurfDataReducer = (state = initialState, action) => {
    switch (action.type) {
        // When data fetch is started
        case FETCH_DATA_START:
            return {
                ...state,
                isFetching: true,
                error: '',
            };
        // When data fetch is successful
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                error: '',
                isFetching: false,
                smurfsList: action.payload,
            };
        // For data fetch failure
        case FETCH_DATA_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false,
            };

        default:
            return state;
    }
};

export default getSmurfDataReducer;
