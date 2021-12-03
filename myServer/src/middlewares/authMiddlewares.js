// const { development } = require('../config/config');

// const jwt = require('jsonwebtoken');

function auth(req, res, next){

    //let token = req.cookies.cookieToken;
    //let token = req.sessionStorage.authToken;
    

    // if(!token){
    //     return next();
    // }

    // jwt.verify(token, development.secret, function(err, decodedToken){

    //     if(err){
    //         return res.status(401).redirect('/user/login');
    //     }

    //     req.user = decodedToken;
    //     res.locals.user = decodedToken;
    //     next();

    // });
};

module.exports = {
    auth,
    // isAuth,
    // isGuest
}