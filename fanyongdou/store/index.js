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
        if(cookieData.member){
            try {
                member = JSON.parse(cookieData.member);
                token = cookieData.member_token;
            }catch (e) {console.error(e)}
            initialState = {
                member,
                token,
            }
        }else{
            initialState = {}
        }
    }
    return createStore(
        reducer,
        initialState,
    )
}
