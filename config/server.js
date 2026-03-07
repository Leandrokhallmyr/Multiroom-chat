const express = require('express');

const consign = require('consign');

const bodyParser = require('body-parser');

const expressValidator = require('express-validator');

/* Iniciar o objeto do express */
const app = express();


/*definir a engine de views ejs*/
app.set('view engine', 'ejs');
app.set('views', 'app/views');


/*configurar middlewares do express.static */

app.use(express.static('./app/public'));


/*configurar middlewares do body-parser */

app.use(bodyParser.urlencoded({extended: true}));


/*configurar middlewares do express-validator */

app.use(expressValidator());

/*configurar o auto-load do consing */

consign()
	.include('app/models')
	.then('app/controllers')
	.then('app/routes')
	.into(app);


/* exportar este módulo */

module.exports = app;

