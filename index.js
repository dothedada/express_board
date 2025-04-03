import express from 'express';
import dotenv from 'dotenv';
import url from 'url';
import path from 'path';

import { mainRouter } from './routes/main.js';
import { newRouter } from './routes/new.js';
import { detailRouter } from './routes/detail.js';

dotenv.config();

const PORT = process.env.PORT || 10000;
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.use('/', mainRouter);
app.use('/new', newRouter);
app.use('/msg', detailRouter);

app.use(express.static('static'));

app.listen(PORT, () => {
    console.log('al aire prro', PORT);
});
