'use strict';

import http from 'http';
import app from './App';

const port = 5000;
const server = http.createServer(app);

server.listen(port);
console.log('Connection to port : ' + port);