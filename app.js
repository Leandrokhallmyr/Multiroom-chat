const app = require('./config/server');//1




app.listen(80, function(){//2 -> config/server
	console.log('SERVER ON');
});