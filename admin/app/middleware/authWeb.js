const jwt = require('jsonwebtoken');
module.exports = () => {
    return async function authWeb(ctx, next) {
        const token = ctx.req.headers.authorization;
        jwt.verify(token, ctx.app.config.webTokenSign, async (err)=>{
            if(err) {
                ctx.body = {
                    ...err,
                    code: 401,
                };
                ctx.status = 401;
            }
        });
        await next();

    };
};
