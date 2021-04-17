import counterReducers from './counterReducers';
import userReducers from './userReducers';
import articleReducers from './articleReducers';
import {combineReducers} from 'redux';

export const rootReducer = combineReducers({
    counterReducers,
    userReducers,
    articleReducers
})

export type RootState = ReturnType<typeof rootReducer>