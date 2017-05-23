import express from 'express';
import rotas from './rotas/main.rotas';

const app = express();

app.use('/', rotas);


const servidor = app.listen(3000, () => {

    const {port} = servidor.address();

    console.log(`Servidor rodando em http://localhost:${port}`);
});