const host = 'http://127.0.0.1:7001';
module.exports = {
    imgUrl: host,
    baseURL: `${host}/api`,
    uploadUrl: `${host}/api/upload`,
    localMember: 'member',                   //本地会员数据存储字段
    localToken: 'member_token',              //token名称

    authStatus: {
        0: '认证中',
        1: '认证成功',
        2: '认证失败',
    }
}
