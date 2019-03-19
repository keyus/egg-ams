const jwt = require('jsonwebtoken');
module.exports = () => {
    return async function auth(ctx, next) {
        const token = ctx.req.headers.authorization;
        await next();
        jwt.verify(token, ctx.app.config.tokenSign, async (err)=>{
            if(err) {
                ctx.body = {
                    ...err,
                    code: 401,
                };
                ctx.status = 401;
            }
        });
    };
};
