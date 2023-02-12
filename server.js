const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const logger = require('morgan');
const cors = require('cors');
const passport = require('passport');

const port = process.env.PORT || 3000;

/*
    IMPORTAR RUTAS
*/
const userRoutes = require('./routes/userRoutes');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.disable('x-powered-by');

app.set('port', port);

/*
    LLAMADO DE LAS RUTAS
*/
userRoutes(app);

// La IP puede cambiar, hay que estar verificando si la IP si es que truena el NodeJS.
server.listen(3000, '192.168.1.104' || 'localhost', function() {
    console.log('Aplicación de NodeJS ' + port + ' Iniciada...')
});

app.get('/', (req, res) => {
    res.send('Ruta raiz del backend');
});

app.get('/test', (req, res) => {
    res.send('Esta es la ruta test');
});

// ERROR HANDLER
app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).send(err.stack);
})

// 200 - ES UNA RESPUESTA EXITOSA
// 404 - SIGNIFICA QUE LA URL NO EXISTE
// 500 ERROR INTERNO DEL SERVIDOR