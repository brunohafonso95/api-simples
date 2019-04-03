const http = require('http');
const app = require('./app');

// pegando a porta setada no app
const PORT = app.get('port');

// extraindo o servidor do http
const server = http.Server(app);

// iniciando o servidor da API
server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});
