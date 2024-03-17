import { combineReducers, createStore } from 'redux';

const initialState = {
    isSingedIn: false,
    userName: 'Root'
}

const rootReducer = combineReducers({
    userData: () => initialState
})

export const store = createStore(rootReducer);