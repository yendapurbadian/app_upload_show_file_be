'use strict';

import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import Routes from './core/Routes';
import Cors from './core/Cors';

const app = express();

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

Cors(app);
Routes(app);

module.exports = app;