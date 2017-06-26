import mongodb from "./db";

function User(user){
	this.name = user.name;
	this.password = user.password;
}

User.prototype.save = function(callback){
	var user = {
		name : this.name,
		password : this.password
	};
	
	mongodb.open(function(err,db){
		if (err) {
			db.close();
			return callback(err);
		};
		db.collection("users",function(err,collection){
			if (err) {
				db.close();
				return callback(err);
			};

			collection.insert(user,{
				safe:true
			},function(err,user){
				db.close();
				if (err) {
					return callback(err);
				};
				callback(null,user);
			});
		});
	});
}

User.findOne = function(params,callback){
	mongodb.open(function(err,db){
		if (err) {
			db.close();
			return callback(err);
		};
		db.collection("users",function(err,collection){
			if (err) {
				db.close();
				return callback(err);
			};
			collection.findOne(params,function(err,user){
				db.close();
				if (err) {
					return callback(err);
				};
				callback(null,user);
			});
		})
	});
}

User.get = function(name,callback){
	mongodb.open(function(err,db){
		if (err) {
			db.close();
			return callback(err);
		};
		db.collection("users",function(err,collection){
			if (err) {
				db.close();
				return callback(err);
			};
			collection.findOne({
				name:name
			},function(err,user){
				db.close();
				if (err) {
					return callback(err);
				};
				callback(null,user);
			});
		})
	});
}

module.exports = User;
