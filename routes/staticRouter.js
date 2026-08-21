const express = require("express");
const router = express.Router();
const {restrictTo} = require("../middlewares/auth"); 

const URL = require("../models/url");


router.get("/", restrictTo(['NORMAL']), async(req, res) => {
    const allurls = await URL.find({createdBy: req.user._id})
    return res.render("home", {
        urls: allurls,
    });
});

router.get("/signup", (req, res)=>{
    return res.render("signup");
});
router.get("/login", (req, res)=>{
    return res.render("login");
});


module.exports = router;

