const jwt = require('jsonwebtoken');

const privateKey = 'eggcmsadmin'
const genToken =(data)=>{
    return jwt.sign(
        { data },
        privateKey,
        {
            expiresIn: 2
        }
    )
}
const token = genToken({username: 'admin'});
console.log(token)

setTimeout(()=>{
    const decoded = jwt.verify(token, privateKey,(err,data)=>{
        console.log(err,data)
    });

    // console.log(decoded , new Date(decoded.exp),(data)=>{
    //
    // })
},3000)

