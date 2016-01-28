module.exports = function(app,UserTable,session){
	var ses;
	app.post('/signupUserData',function(req,res){
		UserTable.findOne({ email: req.body.email}, function(err, result){			
			if(result == null){
				var newEntry = new UserTable({
					name: req.body.name,
					email: req.body.email,
					password: req.body.password
				});

				newEntry.save(function(err, thor) {
				  if (err) return console.error(err);
				  res.send('1');
				}); 
			}else
				res.send('2');
		});
	});
	app.post('/loginUserData',function(req,res){
		UserTable.findOne({email: req.body.email, password: req.body.password}, function(err,result){
			if(result != null){
				ses = req.session;
				res.json(ses);
			}
		});
	});
	
}
