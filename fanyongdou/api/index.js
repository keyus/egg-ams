import axios from 'axios';
import iconv from "iconv-lite";
import http from "../util/http";

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

