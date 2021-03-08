import axios from 'axios';
import store from "@/store";
import router from './router';

const ax = axios.create({
    baseURL: 'http://localhost/'
});

ax.defaults.withCredentials = true;
ax.CancelToken = axios.CancelToken;
ax.isCancel = axios.isCancel;

/*
 * The interceptor here ensures that we check for the token in local storage every time an ajax request is made
 */
ax.interceptors.request.use(
    request => {
        if (store.getters.isLoggedIn) {
            request.headers['Authorization'] = `Bearer ${store.state.token}`;
        } else {
            delete request.headers['Authorization'];
        }

        return request;
    },
    error => {
        if (error.response.status === 401) {
            store.dispatch('clearToken').then(() => {
                router.push({name: 'About'});
            });
        }
    }
);

export default ax;