import CounterReducer from './counterReducers';
import LoggedReducer from './loggedReducers';
import {combineReducers} from 'redux';

export const rootReducer = combineReducers({
    counter: CounterReducer,
    logged: LoggedReducer,
})

export type RootState = ReturnType<typeof rootReducer>