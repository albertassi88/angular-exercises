const path = require('path');
const express = require('express');
const app = express();
const cors = require('cors'); //é um mecanismo utilizado pelos navegadores para compartilhar recursos entre diferentes origens.
const http = require('http').createServer(app);

const io = require('socket.io')(http, {  //iniciando um servidor do tipo socket
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST']
  }
});

app.use(cors());

io.on('connection', (socket) => {

  socket.on('enviandoParaBack', (event) => {  //recebendo mensagem do front-end
    console.log(event);
  });

  socket.emit('enviandoParaFront', 'Back enviando para o front'); //enviando mensagem para o front-end

});


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/socket-io/index.html'));
});

http.listen(3000, () => console.log('Rodando na porta 3000'));
