import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let user = localStorage.getItem('user') || {};
try{
    user = JSON.parse(user)
}catch (e) {
    console.warn('json parse error')
}

export default new Vuex.Store({
    state: {
        user,
    },
    mutations: {
        updateUser(state,data) {
            state.user = data.user;
            localStorage.setItem('token', data.token);
            localStorage.setItem('user',JSON.stringify(data.user))
        },
        clearUser(state){
            state.user = {};
            localStorage.removeItem('token');
            localStorage.removeItem('user');
        }
    },
    actions: {

    }
})
