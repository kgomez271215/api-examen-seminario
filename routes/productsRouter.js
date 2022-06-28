const express = require('express');
const ProductService = require('../services/productsService');
const pool = require('../libs/mySqlPool');

const router = express.Router();
const service = new ProductService();


router.get('/', async (req, res) => {
  pool.getConnection(function (err, conn) {
    conn.query("select * from productos", function (err, rows) {
      res.json(rows);
    })
  })
})

router.get('/:id', async (req, res, next) => {
  const { id } = req.params;

  pool.getConnection(function (err, conn) {
    const query=`
    select * from productos a 
    inner join productosPrecios b on b.idProducto=a.idProducto 
    inner join preciosProveedor c on b.idPrecioProveedor = c.idPrecioProveedor
    inner join proveedores d on c.idProveedor = d.idProveedor
    where a.idProducto=`+id;
    conn.query(query, function (err, rows) {
      res.json(rows);
    })
  })
});

module.exports = router;
