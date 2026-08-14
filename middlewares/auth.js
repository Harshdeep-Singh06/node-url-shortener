const { getUser } = require('../service/auth');

async function restrictToLoggedinUserOnly(req, res, next) {
    const userUid = req.cookies?.uid;

    if (!userUid) return res.redirect('/login');

    try {
        const user = getUser(userUid);

        if (!user) return res.redirect('/login');

        req.user = user;
        next();
    } catch (error) {
        res.clearCookie('uid');
        return res.redirect('/login');
    }
}

async function checkAuth(req, res, next) {
    const userUid = req.cookies?.uid;

    if (!userUid) {
        req.user = null;
        return next();
    }

    try {
        const user = getUser(userUid);

        req.user = user || null;
        next();
    } catch (error) {
        res.clearCookie('uid');
        req.user = null;
        next();
    }
}

module.exports = {
    restrictToLoggedinUserOnly,
    checkAuth,
};