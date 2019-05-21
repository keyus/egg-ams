export const reg = {
    phone: /^1[3-9]\d{9}$/,
    password: /^[a-zA-Z0-9]{6,20}$/,
}
export default {
    isLogin(){
        if(localStorage.getItem('token')){
            return true;
        }
        return false
    }
}
