import mongodb from "./db";
import Utils from '../utils';

function Articles(article){
	this.fieldsets = article || "";
}

/*
** usage:
** 	该方法用来对构造函数传入的数据进行保存。其有一个参数，类型为function，该function也有1个参数，其值如下：
** 		params:
**  		1.若为null，则表明保存成功。
**			2.若为true，则为保存出错，该参数即为错误对象。
**
** author:leaves-27
** date:2017-02-08
**/

Articles.prototype.save = function(callback){
	let time = Utils.time;
	var article = {
		fieldsets : this.fieldsets,
		date : time.day,
		pv : 0
	};

	mongodb.open(function(err,db){
		if (err) {
			db.close();
			return callback(err);
		};
		
		db.collection("articles",function(err,collection){
			if (err){
				db.close();
				return callback(err);
			};
			
			collection.update({
				date:time.day
			},{
				$set:article
			},{
				upsert:true
			},function(err){
				db.close();
				if(err) {
					return callback(err);
				};
				callback(null);
			});
		});
	});
}

/*
** usage:
** 	该方法用来对构造函数传入的数据进行保存。其有一个参数，类型为function，该function也有2个参数，分别如下：
** 		err:
**  		1.若为null，则表明保存成功。
**			2.若为true，则为保存出错，该参数即为错误对象。
**    data: 
**			仅在err参数值为null时，才会存在，否则其值为undefined
**    	
**
** author:leaves-27
** date:2017-02-08
**/

Articles.getAll = function(callback){
	mongodb.open(function(err,db){
		if(err){
			db.close();
			return callback(err);
		};

		db.collection('articles',function(err,collection){
			if (err){
				db.close();
				return callback(err);
			};

			collection.find().sort({
				time : -1
			}).toArray(function(err,docs){
				db.close();
				if (err){
					return callback(err);
				};

				callback(null,docs);
			});
		});
	});
}

/*
** usage:
** 	该方法用来查询某一天的文章。其有两个参数，分别如下：
** 		date: 
**  		查询的日期。日期格式必须如：2017-01-01
**    callback: 
**			查询结果的处理函数，其可能会有两个参数
** 			err:
**  			1.若为null，则表明保存成功。
**				2.若为true，则为保存出错，该参数即为错误对象。
**    	data: 
**				仅在err参数值为null时，才会存在，否则其值为undefined
**    	
**
** author:leaves-27
** date:2017-02-10
**/

Articles.getOne = function(date,callback){
	mongodb.open(function(err,db){
		if (err) {
			db.close();
			return callback(err);
		};
		db.collection("articles",function(err,collection){
			if(err) {
				db.close();
				return callback(err);
			};

			collection.findOne({
				"date" : date
			},function(err,doc){
				db.close();
				if(err) {
					return callback(err);
				};

				callback(null,doc);
			})
		});
	});
}

// Post.getTen = function(name,page,callback){
// 	mongodb.open(function(err,db){
// 		if (err) {
// 			return callback(err);
// 		};
// 		db.collection('posts',function(err,collection){
// 			if (err) {
// 				mongodb.close();
// 				return callback(err);
// 			};
// 			var query = {};
// 			if (name) {
// 				query.name = name;
// 			};
// 			collection.count(query,function(err,total){
// 				collection.find(query,{
// 					skip:(page - 1)*10,
// 					limit : 10
// 				}).sort({
// 					time : -1
// 				}).toArray(function(err,docs){
// 					mongodb.close();
// 					if (err) {
// 						return callback(err);
// 					};
// 					docs.forEach(function(doc){
// 						doc.post = markdown.toHTML(doc.post);
// 					});
// 					callback(null,docs,total);
// 				})
// 			});
// 		});
// 	});
// }

module.exports = Articles;