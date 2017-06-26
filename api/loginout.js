function Loginout(){}
Loginout.prototype.get = function(req, res, next) {
  var cookieOptions = { maxAge: 600000, httpOnly: true , path:'/' };
  res.clearCookie("token",cookieOptions);
  res.json({
    code : 0,
    msg : "退出成功"
  });
}

module.exports = Loginout;