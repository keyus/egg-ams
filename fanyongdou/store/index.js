import { createStore } from 'redux'
import cookies from 'next-cookies';

export const actionTypes = {
    TICK: 'TICK',
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
    RESET: 'RESET'
}

// REDUCERS
export const reducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.TICK:
            return Object.assign({}, state, {
                lastUpdate: action.ts,
                light: !!action.light
            })
        default:
            return state
    }
}

export function initializeStore (initialState = {}) {
    const isServer = initialState && initialState.req;
    let member = undefined;
    let token = undefined;
    if(isServer) {
        let cookieData = cookies(initialState);
        try {
            member = JSON.parse(cookieData.member)
        }catch (e) {console.error(e)}
        token = cookieData.member_token;
        initialState = {
            member,
            token,
        }
    }
    return createStore(
        reducer,
        initialState,
    )
}
