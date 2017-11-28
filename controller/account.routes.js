var express = require("express");
var passport = require("passport");
var db = require("../models");
var path = require("path");
var router = express.Router();
// ALL links in this file get prepended with /account
// ==================================================

// router.get('/', (req, res, next) => {
//     res.render(path.join(__dirname, "/"));
// });

// router.get('/dashboard', (req, res, next) => {
//     res.render(path.join(__dirname, "/dashboard"));
// });

// this is handling the authentication
router.post('/login',
    passport.authenticate('local', { session: false }),
    function (req, res) {
        console.log(req.user);
        console.log("user authenticated..account.routes.js ", req.user.username, req.user.token);
        res.json({ username: req.user.username, token: req.user.token });
    });

// router.get('/register', (req, res, next) => {
//     res.render(path.join(__dirname, "/register"));
// });

router.post('/register', passport.authenticate('local-register', {
    successRedirect: '/login',
    failureRedirect: '/'
}))

router.get('/logout', (req, res, next) => {
    req.session.destroy(err => {
      res.redirect('/login')
    })
  })

module.exports = router;