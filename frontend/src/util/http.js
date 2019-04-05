import axios from 'axios'
import {message} from 'ant-design-vue'
import router from '../router'
const ins = axios.create({
    baseURL: 'http://192.168.71.43:7002/api',
    timeout: 10000,
})

ins.interceptors.request.use(function (config) {
    config.headers.Authorization = localStorage.getItem('token');
    return config;
}, function (error) {
    return Promise.reject(error);
});

// Add a response interceptor
ins.interceptors.response.use(function (response) {
    const {data} = response;
    const {code} = data || {};
    if(code === 200){
        return response.data;
    }else{
        message.error(data.message)
        return Promise.reject(data);
    }
}, function (error) {
    if(error.response.status === 401){
        message.error('token失效,请重新登录');
        router.push('/login')
    }else{
        message.error(error.message)
    }
    return Promise.reject(error);
});
export default ins;
