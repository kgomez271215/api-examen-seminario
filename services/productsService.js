
const pool = require('../libs/mySqlPool');


class ProductService {
  constructor() {
    this.pool = pool;
    this.pool.on('error', (err) => console.log(err));

  }

  async find() {
    const query = "SELECT *FROM productos";
    const result = await this.pool.query(query);
    console.log(result.data);
    //return result.rows;

    /*  this.pool.query("SELECT * FROM productos",(err, data) => {
        if(err) {
            console.error(err);
            return;
        }
        // rows fetch
        let datos  =   Object.values(JSON.parse(JSON.stringify(data)));
        return datos;
    });*/
  }

  async findOne(id) {
    const user = await models.Producto.findByPk(id);
    if (!user) {

    }
    return user;

  }
}

module.exports = ProductService;
