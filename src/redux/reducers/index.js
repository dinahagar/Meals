import { combineReducers } from 'redux';
import { mealReducer } from './mealReducer';

const reducers = combineReducers({
    meal : mealReducer
})

export default reducers;

