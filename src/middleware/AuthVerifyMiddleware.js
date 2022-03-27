var jwt = require('jsonwebtoken');

module.exports = (req, res, next)=>{
    let Token = req.headers['token-key']
    jwt.verify(Token, "SecritKey123456789", function(err,decoded){
        if(err){
            res.status(401).json({status:"unauthorized"})
        }else{
            //Get user name from decoded token and add with req Header
            let username = decoded['data']['UserName'];
            req.headers.username = username;
            
            next();
        }
    })
}