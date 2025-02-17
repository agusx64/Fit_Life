var express = require('express');
var mysql = require('mysql2');
require('dotenv').config();
var router = express.Router();

// Conexion a la base de datos
let connection = mysql.createConnection({

    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT

})

connection.connect( function(err) {

    if (err) {

    console.error('Error connecting', err.stack);
    return;

    }

    console.log('Connected from GET', connection.threadId); 

})

/* GET home page. */
router.get('/', function (req, res, next) {

    res.render('index', { title: 'Express' });

});

router.get('/new_products', function (req, res) {

    let newProductsQuery = 'SELECT nombre, descripcion, img_producto, precio FROM productos ORDER BY created_at DESC LIMIT 4;';

    connection.query(newProductsQuery, async function(err, result) {

        if (err) {

            console.error("Error al ejecutar la consulta SQL:", err);
            return res.status(500).send({ success: false, error: "Error al insertar la receta en la base de datos." });

        }

        // console.log("Resultado de la consulta:", result);
        return res.status(200).send({ success: true, message: "New Products", product: result });

    })


});

router.get('/new_members', function (req, res) {

    let newProductsQuery = 'SELECT nombre, costo, duracion_dias, img_membresia FROM membresias ORDER BY created_at DESC LIMIT 4;';

    connection.query(newProductsQuery, async function(err, result) {

        if (err) {

            console.error("Error al ejecutar la consulta SQL:", err);
            return res.status(500).send({ success: false, error: "Entrega de paquete completo" });

        }

        // console.log("Resultado de la consulta:", result);
        return res.status(200).send({ success: true, message: "New members", member: result });

    })


});

router.get('/new_clients', function (req, res) {

    let newProductsQuery = 'SELECT nombre, rfc FROM clientes ORDER BY created_at DESC LIMIT 5;';

    connection.query(newProductsQuery, async function(err, result) {

        if (err) {

            console.error("Error al ejecutar la consulta SQL:", err);
            return res.status(500).send({ success: false, error: "Entrega de paquete completo" });

        }

        // console.log("Resultado de la consulta:", result);
        return res.status(200).send({ success: true, message: "New members", client: result });

    })

});

router.get('/products_list', function(req, res) {

    let selectProductsQuery = 'SELECT * FROM productos;';

    connection.query(selectProductsQuery, async function(err, result) {

        if (err) {

            console.error("Error al ejecutar la consulta SQL:", err);
            return res.status(500).send({ success: false, error: "Error al insertar la receta en la base de datos." });

        }

        // console.log("Resultado de la consulta:", result);
        return res.status(200).send({ success: true, message: "Products list complete", product: result });

    });

});

router.get('/members_list', function(req, res) {

    let selectProductsQuery = 'SELECT * FROM membresias;';

    connection.query(selectProductsQuery, async function(err, result) {

        if (err) {

            console.error("Error al ejecutar la consulta SQL:", err);
            return res.status(500).send({ success: false, error: "Error al ejecutar la consulta SQL" });

        }

        // console.log("Resultado de la consulta:", result);
        return res.status(200).send({ success: true, message: "Members list complete", member: result });

    });

});

router.get('/clients_list', function(req, res) {

    let selectProductsQuery = 'SELECT * FROM clientes;';

    connection.query(selectProductsQuery, async function(err, result) {

        if (err) {

            console.error("Error al ejecutar la consulta SQL:", err);
            return res.status(500).send({ success: false, error: "Error al ejecutar la consulta SQL" });

        }

        // console.log("Resultado de la consulta:", result);
        return res.status(200).send({ success: true, message: "Clients list complete", client: result });

    });

});

router.get('/sells_list', function(req, res) {

    let selectSellsQuery = 'SELECT * FROM ventas;'

    connection.query(selectSellsQuery, async function(err, result) {

        if (err) {

            console.error("Error al ejecutar la consulta SQL:", err);
            return res.status(500).send({ success: false, error: "Error al obtener lista de ventas" });

        }

        // console.log("Resultado de la consulta:", result);
        return res.status(200).send({ success: true, message: "Sells list complete", sell: result });

    })

});

router.get('/buys_list', function(req, res) {

    let selectSellsQuery = 'SELECT * FROM compras;'

    connection.query(selectSellsQuery, async function(err, result) {

        if (err) {

            console.error("Error al ejecutar la consulta SQL:", err);
            return res.status(500).send({ success: false, error: "Error al obtener lista de compras" });

        }

        // console.log("Resultado de la consulta:", result);
        return res.status(200).send({ success: true, message: "Buys list complete", buy: result });

    })

});

router.get('/asistence_list', function(req, res) {

    let selectSellsQuery = 'SELECT * FROM asistencias;'

    connection.query(selectSellsQuery, async function(err, result) {

        if (err) {

            console.error("Error al ejecutar la consulta SQL:", err);
            return res.status(500).send({ success: false, error: "Error al obtener lista de asistencias" });

        }

        // console.log("Resultado de la consulta:", result);
        return res.status(200).send({ success: true, message: "Buys list complete", asistence: result });

    })

});

router.get('/get_id_client', function(req, res) {

    let idClientQuery = 'SELECT id_cliente FROM clientes;';

    connection.query(idClientQuery, async function(err, result) {

        if (err) {

            console.error("Error al ejecutar la consulta SQL:", err);
            return res.status(500).send({ success: false, error: "Error al seleccionar ID de producto" });

        }

        // console.log("Resultado de la consulta:", result);
        return res.status(200).send({ success: true, message: "ID clients", client: result });

    });

});

router.get('/get_id_product', function(req, res) {

    let idProductQuery = 'SELECT id_producto FROM productos;';

    connection.query(idProductQuery, async function(err, result) {

        if (err) {

            console.error("Error al ejecutar la consulta SQL:", err);
            return res.status(500).send({ success: false, error: "Error al seleccionar ID de producto" });

        }

        // console.log("Resultado de la consulta:", result);
        return res.status(200).send({ success: true, message: "ID products", product: result });

    });

});

router.get('/get_id_member', function(req, res) {

    let idQuery = 'SELECT id_membresia FROM membresias;';

    connection.query(idQuery, async function(err, result) {

        if (err) {

            console.error("Error al ejecutar la consulta SQL:", err);
            return res.status(500).send({ success: false, error: "Error al seleccionar ID de membresia" });

        }

        // console.log("Resultado de la consulta:", result);
        return res.status(200).send({ success: true, message: "ID member", member: result });

    });

});

// Ruta para obtener el precio de un producto por su ID
router.get('/get_product_price/:id', (req, res) => {

    const productId = req.params.id;
    // console.log(productId);

    const query = 'SELECT precio FROM productos WHERE id_producto = ?';

    connection.query(query, [productId], (err, results) => {

        if (err) {

            console.error("Error al obtener el precio del producto:", err);
            return res.status(500).json({ success: false, error: "Error en la base de datos" });

        }

        if (results.length === 0) {

            return res.status(404).json({ success: false, message: "Producto no encontrado" });

        }

        const price = results[0].precio;
        res.status(200).json({ success: true, price });

    });

});

// Ruta para obtener el precio y duracion de la membresia
router.get('/get_membership/:id', (req, res) => {

    const membershipId = req.params.id;
    console.log(membershipId);

    const query = 'SELECT duracion_dias, costo FROM membresias WHERE id_membresia = ?';

    connection.query(query, [membershipId], (err, results) => {

        if (err) {

            console.error("Error al obtener la membresía:", err);
            return res.status(500).json({ success: false, error: "Error en la base de datos" });

        }

        if (results.length === 0) {

            return res.status(404).json({ success: false, message: "Membresía no encontrada" });

        }

        const membership = results[0];
        res.status(200).json({ success: true, membership });

    });
    
});

module.exports = router;
