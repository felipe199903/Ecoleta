import express, { response } from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('Listagem de usuarios');

    response.json([
        'Felipe',
        'Lineo',
        'Yami'
    ]);
});

app.listen(3333);