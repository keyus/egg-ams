import axios from 'axios'
import message from 'antd/lib/message'
import 'antd/lib/message/style/index.css'
import config from './config'
import util from './index'
import cookie from './cookie'
const ins = axios.create({
    baseURL: config.baseURL,
    timeout: 10000,
})

ins.interceptors.request.use(function (req) {
    req.headers.Authorization = cookie.getItem(config.localToken);
    return req;
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
        message.error('登陆过期,请重新登录');
        util.logout();
    }else{
        message.error(error.message)
    }
    return Promise.reject(error);
});
export default ins;
