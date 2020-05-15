import { combineReducers } from 'redux';

import {
    getSmurfDataReducer,
    pushSmurfDataReducer,
} from './getSmurfDataReducer';
export default combineReducers({
    getSmurfDataReducer,
    pushSmurfDataReducer,
});
