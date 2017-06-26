var crypto = require('crypto');
var moment = require("moment");
var jwt = require('jwt-simple');

var User = require("../models/user");

function Login(){}

Login.prototype.post = function(req, res, next) {
  var md5 = crypto.createHash("md5"),
      password = md5.update(req.body.data.password).digest('hex');

  User.get(req.body.data.name,function(err,user){
    if (!user){
      return res.json({
        code:1,
        msg:"用户不存在！"
      });
    };

    if(user.password != password){
      return res.json({
        code:1,
        msg:"用户名或密码错误"
      });
    }

    let expires = moment().add(7,'days').valueOf();
    
    let token = jwt.encode({
      iss: user._id,
      exp: expires
    },req.app.get('jwtTokenSecret'));

    var cookieOptions = { maxAge: 600000, httpOnly: true , path:'/' };

    res.cookie("token",token,cookieOptions);
    res.json({
      code : 0,
      data:{
        user: user
      }
    });
  });
}

module.exports = Login;