var crypto = require('crypto');
var moment = require("moment");
var jwt = require('jwt-simple');

var User = require("../models/user");

function Register(){}

Register.prototype.post = function(req, res, next) {
  var md5 = crypto.createHash("md5"),
      password = md5.update(req.body.data.password).digest('hex');

  var user  = new User({
    name : req.body.data.name,
    password : password,
    email : req.body.data.email
  })

  user.save(function(err,user){
    if(err){
      return res.json({
        code : 1,
        msg : "注册失败，请联系管理员"
      });
    };

    res.json({
      code : 0,
      data: {
        user: user
      }
    });
  });
}

module.exports = Register;