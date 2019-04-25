import Vue from 'vue'
import Antd, {message} from 'ant-design-vue'
import Editor from 'wangeditor'
import http from './util/http'
import App from './App.vue'
import router from './router'
import store from './store'
import 'ant-design-vue/dist/antd.css'
import './style/home.scss'

const uploadImgServer = 'http://127.0.0.1:7001/api/upload';
Vue.use(Antd);
Vue.prototype.$http = http;
Vue.prototype.$message = message;
Vue.prototype.$uploadImgServer = uploadImgServer;
Vue.prototype.$initEditor = (el) => {
    const ins = new Editor(el);
    ins.customConfig.uploadImgServer = uploadImgServer        // 上传图片到服务器
    ins.create();
    return ins;
}
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
