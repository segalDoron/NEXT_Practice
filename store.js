import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const exampleInitialState = {
    count: 0,
    loading: false
}

export const actionTypes = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
    RESET: 'RESET',
    TIMEOUT: 'TIMEOUT'
}

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return Object.assign({}, state, {
                count: state.count + 1
            })
        case actionTypes.DECREMENT:
            return Object.assign({}, state, {
                count: state.count - 1
            })
        case actionTypes.RESET:
            return Object.assign({}, state, {
                count: exampleInitialState.count
            })
        case actionTypes.TIMEOUT:
            return Object.assign({}, state, {
                loading: !state.loading
            })
        default: return state
    }
}

// ACTIONS
export const incrementCount = () => dispatch => {
    dispatch({ type: actionTypes.INCREMENT })
    return Promise.resolve()
}

export const decrementCount = () => dispatch => {
    return dispatch({ type: actionTypes.DECREMENT })
}

export const resetCount = () => dispatch => {
    return dispatch({ type: actionTypes.RESET })
}

export const timeOut = () => dispatch => {
    return dispatch({ type: actionTypes.TIMEOUT })
}

export function initializeStore(initialState = exampleInitialState) {
    return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}
