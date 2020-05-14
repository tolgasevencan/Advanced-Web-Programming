/*import {
    createServer
} from 'http';
import {
    calculator
} from "./calculator"

const hostname = '127.0.0.1';
const port = process.argv[3];

const server = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(process.argv[2] + calculator(3, 4));
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
*/

const http = require('http');
const {
    mul
} = require('./calculator');


const http = require('http');

const hostname = '127.0.0.1';
const port = process.argv[3];

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(process.argv[2] + " " + mul(2, 3));
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});