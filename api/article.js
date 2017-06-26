import { normalize, schema } from 'normalizr';
import Articles from '../models/articles';


function Article(){}

Article.prototype.getAll = function(req, res, next){
  //对数据进行读取
  Articles.getAll(function(err,data){
    if(err){
      return res.json({
        code:1,
        msg:err
      });
    };

    res.json({
      code:0,
      data:data
    });
  });
};

Article.prototype.getOne = function(req, res, next){
  Articles.getOne(req.query.date,function(err,data){
    if(err){
      res.json({
        code : 1,
        msg : err
      })
    };

    res.json({
      code:0,
      data:data
    });
  });
};

Article.prototype.post = function(req, res, next){
  let body = req.body;
  let articles = new Articles(body.data);

  articles.save(function(err){
    if(err){
      return res.json({
        code:1,
        msg:err
      });
    };

    res.json({
      code:0,
      msg:"提交成功"
    });
  });
};

module.exports = Article;