import userReducers from './userReducers';
import articleReducers from './articleReducers';
import {combineReducers} from 'redux';

export const rootReducer = combineReducers({
    userReducers,
    articleReducers
})

export type RootState = ReturnType<typeof rootReducer>