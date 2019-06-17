import axios from 'axios';
import iconv from "iconv-lite";
import http from "../util/http";
import config from '../util/config'

/**
 * api分为服务端调用，与客户端调用
 * 1.服务端调用，需付带token信息
 * 2.客户端调用，会自动读取token发送
 * @returns {Promise<AxiosResponse<T>>}
 * @constructor
 */

//全球期货
export const QuanQiuQiHuo = ()=>{
    const url = `http://qt.gtimg.cn/q=hf_GC,hf_HG,hf_SI,hf_CL,hf_OIL,hf_NG,hf_XAG,hf_XAU,hf_XPD,hf_XPT,hf_AHD,hf_CAD,hf_NID,hf_PBD,hf_SND,hf_ZSD,hf_DXF&r=${Math.random()}`
    return axios.get(url, {
        responseType: "arraybuffer"
    }).then(response =>{
        response.data = iconv.decode(response.data, "GBK");
        return Promise.resolve(response)
    })
}

//全球股指
export const QuanQiuGuZhi = ()=>{
    const url = `http://qt.gtimg.cn/q=marketStat,usDJI,usIXIC,usINX,gzGSPTSE,gzMXX,gzIBOV,gzMERVAL&r=${Math.random()}`
    return axios.get(url, {
        responseType: "arraybuffer"
    }).then(response =>{
        response.data = iconv.decode(response.data, "GBK");
        return Promise.resolve(response)
    })
}

//获取平台信息
export const getPlatform = ()=>{
    return http.post(`/webPlatform`)
}

//获取登陆用户信息
export const getLoginUser = (token)=>{
    return http.post('/webUser',{},{
        headers: {
            Authorization: token,
        }
    })
}

//获取登陆用户交易账号
export const getUserAccount = (data)=>{
    return http.post('/userAccount', data)
}

//获取登陆用户收入明细
export const getUserMoneyDetails = (data)=>{
    return http.post('/userMoneyDetails', data)
}

//更新支付方式
export const updatePay = (params,data)=>{
    return http.post(`/setPay/${params}`, data)
}

//实名认证
export const webIdCardAuth = (data)=>{
    return http.post(`/webIdCardAuth`, data)
}

//读取实名认证信息
export const readIdCardAuth = (token)=>{
    return http.post(`/readIdCardAuth`, null,{
        headers: {
            Authorization: token,
        }
    })
}

//为自己开户
export const webOpenAccount = (data,token)=>{
    return http.post(`/webOpenAccount`, data,{
        headers: {
            Authorization: token,
        }
    })
}

//为他人开户
export const webOpenAccountOther = (data,token)=>{
    return http.post(`/webOpenAccountOther`, data,{
        headers: {
            Authorization: token,
        }
    })
}

//读取实名认证资料
export const readOpenAccount = (token)=>{
    return http.post(`/readOpenAccount`, null,{
        headers: {
            Authorization: token,
        }
    })
}

//读取为他人开户的信息
export const readOpenAccountOther = (token)=>{
    return http.post(`/readOpenAccountOther`, null,{
        headers: {
            Authorization: token,
        }
    })
}

