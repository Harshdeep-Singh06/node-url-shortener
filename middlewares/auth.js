const { getUser } = require('../service/auth');

function checkForAuthentication(req, res, next){
    const authorizationHeaderValue= req.headers["authorization"];
    req.user = null;
    if(!authorizationHeaderValue || !authorizationHeaderValue.startsWith('Bearer'))
        return next();

    const token = authorizationHeaderValue.split("Bearer ")[1];
    const user = getUser(token);

    req.user = user;
    return next();

}

// async function restrictToLoggedinUserOnly(req, res, next) {
//     const userUid = req.headers['Authorization'];
//     console.log(req.headers);

//     if (!userUid) return res.redirect('/login');
//         const token = userUid.split("Bearer ")[1]; //
//         const user = getUser(token);
//     if(!user) return res.redirect("/login");

//     req.user = user;

//     next();
// }

// async function checkAuth(req, res, next) {
//     console.log(req.headers);
//     const userUid = req.headers["authorization"];
//     const token = userUid.split("Bearer ")[1];

//     const user = getUser(token);

//     req.user = user;
//     next();
// }

module.exports = {
   checkForAuthentication
};