export const reg = {
    phone: /^1[3-9]\d{9}$/,
    password: /^[a-zA-Z0-9]{6,20}$/,
    num: /^\d+$/,
    bank: /^\d{9,19}$/,
    text: /^[\u4e00-\u9fa5]+$/,
    alipay: /(^1[3-9]\d{9}$)|(^\w{1,30}@\w{1,30}\.[a-zA-Z0-9]{2,10}$)/,
}
export default {
    isLogin(){
        if(localStorage.getItem('token')){
            return true;
        }
        return false
    }
}
