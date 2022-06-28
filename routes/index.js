const express = require('express');
const productsRouter = require('./productsRouter');

function routerApi(app){
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/productos',productsRouter);
}

module.exports = routerApi;



