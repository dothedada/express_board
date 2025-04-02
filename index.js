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
app.use(express.urlencoded({ extended: true }));

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
    res.render('index', { msgs });
});

app.get('/new', (req, res) => {
    res.render('addform', {});
});

app.post('/new', (req, res) => {
    const newMsg = {
        text: req.body.msg,
        user: req.body.user,
        added: new Date(),
    };
    msgs.push(newMsg);
    res.redirect('/');
});

app.listen(PORT, () => {
    console.log('al aire prro');
});
