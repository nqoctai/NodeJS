const connection = require('../config/database');

const getHomePage = (req, res) => {
    return res.render('home.ejs') 
}

const getHoiDanIT  = (req, res) => {
    res.render('sample.ejs')
}

const postCreateUser = (req, res) => {
    console.log('<<<check : req.body', req.body)
    res.send('Create a new user')
}

module.exports = {
    getHomePage,
    getHoiDanIT,
    postCreateUser
};

