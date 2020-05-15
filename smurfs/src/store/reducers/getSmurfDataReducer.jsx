import {
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
    PUSH_DATA_FAILURE,
    PUSH_DATA_START,
    PUSH_DATA_SUCCESS,
} from '../actions';

const initialState = {
    isFetching: false,
    error: '',
    smurfsList: [],
};

export const getSmurfDataReducer = (state = initialState, action) => {
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

export const pushSmurfDataReducer = (state = initialState, action) => {
    switch (action.type) {
        // When data fetch is started
        case PUSH_DATA_START:
            return {
                ...state,
                isFetching: true,
                error: '',
            };
        // When data fetch is successful
        case PUSH_DATA_SUCCESS:
            return {
                ...state,
                error: '',
                isFetching: false,
                smurfsList: action.payload,
            };
        // For data fetch failure
        case PUSH_DATA_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false,
            };

        default:
            return state;
    }
};
