import Vue from 'vue';
import Vuex from 'vuex';
import axios from './axios.conf';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        token: null,
        role: 'ANON'
    },
    getters: {
        isLoggedIn: (state) => {
            return state.token != null && state.token.trim() !== '' && state.role !== 'ANON';
        }
    },
    mutations: {
        token: (state, val) => {
            // mutate state
            state.token = val.token;
            state.role = val.role;
        }
    },
    actions: {
        clearToken: (context) => {
            return new Promise((resolve) => {
                context.commit('token', {token: null, role: 'ANON'});
                resolve();
            });
        },
        changeToken: (context, val) => {
            return new Promise((resolve) => {
                context.commit('token', val);
                resolve();
            });
        },
        login: (context, val) => {
            return axios.get('sanctum/csrf-cookie').then(() => {
                return axios.post('api/tokens/create', val).then((res) => {
                    return res;
                });
            });
        }
    }
});

export default store;