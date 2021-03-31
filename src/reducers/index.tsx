import CounterReducer from './counter';
import LoggedReducer from './logged';
import {combineReducers} from 'redux';

export const rootReducer = combineReducers({
    counter: CounterReducer,
    logged: LoggedReducer
})

export type RootState = ReturnType<typeof rootReducer>