import config from './config'
import classnames from 'classnames';
import cookie from '../util/cookie'

export const reg = {
    phone: /^1[3-9]\d{9}$/,
    code: /^[a-zA-Z0-9]{6,8}$/,                          //验证码6-8位
    password: /^[a-zA-Z0-9]{6,20}$/,
    num: /^\d+$/,
    idCard: /^\d{15,19}[a-zA-Z]?$/,             //身份证号码
    bank: /^\d{9,19}$/,
    text: /^[\u4e00-\u9fa5]+$/,
    alipay: /(^1[3-9]\d{9}$)|(^\w{1,30}@\w{1,30}\.[a-zA-Z0-9]{2,10}$)/,
    money: /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/,
}

class Util {
    //是否已登陆
    isLogin() {
        if (cookie.getItem(config.localToken) && cookie.getItem(config.localMember)) {
            return true;
        }
        return false
    }

    //保存登陆用户数据
    saveMember(res, saveToken = true) {
        const data = JSON.stringify(res.data);
        const token = res.token;
        cookie.setItem(config.localMember,data,'','/')
        saveToken && cookie.setItem(config.localToken,token,'','/')
    }

    //去app首页
    goApp() {
        window.location.href = '/app'
    }

    //退出
    logout() {
        cookie.removeItem(config.localMember,'/');
        cookie.removeItem(config.localToken,'/');
        window.location.href = '/account/login'
    }

    //获取登陆用户
    getUser() {
        let user = cookie.getItem(config.localMember);
        try {
            user = JSON.parse(user)
        } catch (e) {
            console.error(e)
        }
        return user || {};
    }

    formatMoney(number) {
        const fallbackNumber = Number.isNaN(+number) ? 0 : +number;
        const val = new Intl.NumberFormat('zh-CN', {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2
        }).format(fallbackNumber);
        return `${val}元`
    }

    getSex(val) {
        if (val) {
            return '/static/images/sex1.jpg'
        }
        return '/static/images/sex0.jpg'
    }

    toJson = (text, splitStr = ',') => {
        if (text) {
            text = text.split(';')
            text = text.map(it => {
                const its = it.split('=')[1];
                if (its)
                    return its.split('"')[1].split(splitStr);
            })
            text = text.filter(it => it);
            return text;
        }
    }

    formatNum(val, text) {
        val = parseFloat(val);
        return <span className={classnames({
            red: val > 0,
            green: val < 0,
        })}>{val}{text}</span>
    }

}

export default new Util();
