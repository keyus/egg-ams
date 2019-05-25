import Vue from 'vue'
import Antd, {message} from 'ant-design-vue'
import Editor from 'wangeditor'
import http from './util/http'
import App from './App.vue'
import router from './router'
import store from './store'
import config from './util/config'
import './filter'
import 'ant-design-vue/dist/antd.css'
import './style/home.scss'

Vue.use(Antd);
Vue.prototype.$http = http;
Vue.prototype.$message = message;
Vue.prototype.$uploadImgServer = config.uploadUrl;
Vue.prototype.$initEditor = (el) => {
    const ins = new Editor(el);
    ins.customConfig.uploadImgServer = config.uploadUrl;        // 上传图片到服务器
    ins.customConfig.uploadImgHooks = {
        customInsert: function (insertImg, result) {
            result.data.forEach(url=>{
                insertImg(`${config.imgUrl}${url}`);
            })
        }
    }
    ins.create();
    return ins;
}
Vue.prototype.$img = (url)=>{
    return `${config.imgUrl}${url}`;
}
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
