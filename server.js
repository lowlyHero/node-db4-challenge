const express = require('express');

// import routers

const server = express();

server.use(express.json());
// server.use routers

module.exports = server;