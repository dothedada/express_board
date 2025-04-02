import express from 'express';
import dotenv from 'dotenv';
import url from 'url';
import path from 'path';

dotenv.config();

const PORT = process.env.PORT;
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const msgs = [
    {
        text: 'Hola hola carebola',
        user: 'mmejia',
        added: new Date(),
    },
    {
        text: 'Que se narra la mojarra',
        user: 'Lucy',
        added: new Date(),
    },
];

app.get('/', (req, res) => {
    res.render('index', { msgs }); // Pasa una copia del array
});

app.listen(PORT, () => {
    console.log('al aire prro');
});
