import {
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
} from '../actions';

const initialState = {
    isFetching: false,
    error: '',
    smurfsList: '',
};

const getSmurfData = (state = initialState, action) => {
    switch (action.type) {
        // For data fetch failure
        case FETCH_DATA_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false,
            };
        // When data fetch is successful
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                error: '',
                isFetching: false,
                smurfsList: action.payload,
            };
        // When data fetch is started
        case FETCH_DATA_START:
            return {
                ...state,
                isFetching: true,
                error: '',
                smurfsList: action.payload,
            };

        default:
            return state;
    }
};

export default getSmurfData;
