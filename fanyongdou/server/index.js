const express      = require('express');
const bodyParser   = require("body-parser");
const fetch        = require('./fetch')
const session      = require('express-session')

const sessionKey = 'fan-yong-dou-session';
module.exports =()=>{
    const server = express();
    server.use(bodyParser.json({limit: '1mb'}));
    server.use(session({
        secret: sessionKey,
        resave: false,
        saveUninitialized: true,
        cookie: { secure: true , maxAge: 12000},
    }))

    //登陆
    server.post('/login',  async (req, res) => {
        const phone = req.body.phone;
        const password = req.body.password;
        const auth = await fetch.post('/webLogin',{phone, password});
        //校验通过
        if(auth.data.code === 200){
            req.session.regenerate((err)=>{
                if(err)return res.json({code: -1,message: '登陆失败'});
                req.session.phone = auth.data.data.phone;
                req.session.token = auth.data.token;
                req.session.memberId = auth.data.data.id;
                console.log(req.session)
                res.json(auth.data)
            })
        }else{
            res.json({
                code: -1,
                message: '登陆失败'
            })
        }

    });

    return server;
}
