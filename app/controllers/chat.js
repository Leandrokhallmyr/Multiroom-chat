module.exports.iniciaChat = function(application, req, res){
	

	const dadosForm = req.body;

	//express validator
	req.assert('apelido', 'nome ou apelido é obrigatório').notEmpty();
	req.assert('apelido', 'nome ou apelido deve conter entre 3 e 15 carater').len(3, 15);

	const erros = req.validationErrors(); //método do express-validator.

	if(erros){
		res.render('index', {validacao : erros});
		return;
	}

	// console.log(dadosForm);

	res.render('chat');
}