var express = require('express');
var router = express.Router();
var multer = require('multer');
var cloudinary = require('cloudinary').v2;
var mysql = require('mysql2');
require('dotenv').config();

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

    console.log('Connected from POST', connection.threadId); 

})

//Cloudinary configuration
cloudinary.config({

    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET

})

//Configuracion de multer
const storage = multer.memoryStorage();
const upload = multer({ dest: '/uploads' });

//Selector de caracteres
function extractId(id, threshold = 6, position = 5) {

    if (id.length > threshold) {

        return id.slice(-2);

    } else {

        return id.charAt(position);

    }

}

//Ruta para registrar producto
router.post('/insert_product', upload.single('image'), async function (req, res) {

    let { name, description, price, stock } = req.body;
    let imageClient = req.file.path;
    let imageURL;

    //console.log(name, description, price, stock, imageClient);

    try {

        const result = await cloudinary.uploader.upload(imageClient, {

            folder: 'vidafit'

        })

        imageURL = result.secure_url;

    } catch (error) {

        console.error("Error al subir la imagen a Cloudinary:", error);
        return res.status(500).send({ success: false, error: "Error al subir la imagen a Cloudinary." });

    }

    const productRegisterQuery = 'INSERT INTO productos (nombre, descripcion, precio, stock, img_producto) VALUES (?, ?, ?, ?, ?)';

    connection.query(productRegisterQuery, [name, description, price, stock, imageURL], function(err, result) {

        if (err) {

            console.error("Error al ejecutar la consulta SQL:", err);
            return res.status(500).send({ success: false, error: "Error al insertar la receta en la base de datos." });

        }

        console.log("Resultado de la consulta:", result);
        return res.status(200).send({ success: true, message: "Receta registrada con éxito." });

    });

})

//Ruta para buscar producto
router.post('/search_product', async function(req, res) {

    let { id } = req.body;
    // console.log(id);

    let idNumber = extractId(id);

    const productSearchQuery = 'SELECT * FROM productos WHERE id_producto = ?';

    connection.query(productSearchQuery, [idNumber], function(err, result) {

        if (err) {

            console.error("Error al ejecutar la consulta SQL:", err);
            return res.status(500).send({ success: false, error: "Error al insertar la receta en la base de datos." });

        } else if (result.length <= 0) {

            return res.status(404).send({ success: false, message: "Producto no encontrado." });

        }

        // console.log("Resultado de la consulta:", result);
        return res.status(200).send({ success: true, message: "Receta registrada con éxito.", product: result });

    });

});

//Ruta para actualizar producto
router.post('/update_product', upload.any(), async function(req, res) {

    let { id, new_name, new_description, new_price, new_stock} = req.body;

    console.log(id, new_name, new_description, new_price, new_stock);

    let idNumber = extractId(id);

    let updateQuery = `UPDATE productos SET nombre = ?,
                                            descripcion = ?,
                                            precio =?,
                                            stock =?
                                        WHERE id_producto = ?`;
    
    connection.query(updateQuery, [new_name, new_description, new_price, new_stock, idNumber], async function(err, result) {

        if (err) {

            console.error("Error al ejecutar la consulta SQL:", err);
            return res.status(500).send({ success: false, error: "Error al actualizar producto en la base de datos." });

        }

        console.log("Resultado de la consulta:", result);
        return res.status(200).send({ success: true, message: "Producto actualizado con exito" });

    })

});

//Ruta para eliminar producto
router.post('/delete_product', async function(req, res) {

    let { id } = req.body;
    let idNumber = extractId(id);

    const deleteQuery = 'DELETE FROM productos WHERE id_producto = ?';

    connection.query(deleteQuery, [idNumber], function(err, result) {

        if (err) {

            console.error("Error al ejecutar la consulta SQL:", err);
            return res.status(500).send({ success: false, error: "Error al insertar la receta en la base de datos." });

        }

        // console.log("Resultado de la consulta:", result);
        return res.status(200).send({ success: true, message: "Producto eliminado con exito", product: result });

    });

});

// Ruta para registrar una venta
router.post('/register_sale', upload.any(), async function(req, res) {

    const { client_id, product_id, units_sold, sell_date, total_price } = req.body;

    // console.log(client_id, product_id, units_sold, sell_date, total_price);

    if (!client_id || !product_id || !units_sold || !total_price || !sell_date) {

        return res.status(400).json({ success: false, message: "Faltan datos para registrar la venta" });

    }

    const query = `
        INSERT INTO ventas (id_cliente, id_producto, cantidad, fecha_venta, total)
        VALUES (?, ?, ?, ?, ?)
    `;

    connection.query(query, [client_id, product_id, units_sold, sell_date, total_price], function(err, results) {
        
        if (err) {

            console.error("Error al registrar la venta:", err);
            return res.status(500).json({ success: false, error: "Error en la base de datos" });

        }

            res.status(200).json({ success: true, message: "Venta registrada con éxito" });
        }
    );

});

//Registrar membresia
router.post('/insert_member', upload.single('img_member'), async function (req, res) {

    let { name, price, duration } = req.body;
    let imageClient = req.file.path;
    let imageURL;

    // console.log(name, price, duration, imageClient);

    try {

        const result = await cloudinary.uploader.upload(imageClient, {

            folder: 'vidafit'

        })

        imageURL = result.secure_url;

    } catch (error) {

        console.error("Error al subir la imagen a Cloudinary:", error);
        return res.status(500).send({ success: false, error: "Error al subir la imagen a Cloudinary." });

    }

    const RegisterQuery = 'INSERT INTO membresias (nombre, costo, duracion_dias, img_membresia) VALUES (?, ?, ?, ?)';

    connection.query(RegisterQuery, [name, price, duration, imageURL], function(err, result) {

        if (err) {

            console.error("Error al ejecutar la consulta SQL:", err);
            return res.status(500).send({ success: false, error: "Error al insertar membresia en la base de datos." });

        }

        console.log("Resultado de la consulta:", result);
        return res.status(200).send({ success: true, message: "Membresia registrada con éxito." });

    });

})

//Buscar membresia
router.post('/search_member', async function(req, res) {

    let { id } = req.body;
    let idNumber = extractId(id)

    const SearchQuery = 'SELECT * FROM membresias WHERE id_membresia = ?';

    connection.query(SearchQuery, [idNumber], function(err, result) {

        if (err) {

            console.error("Error al ejecutar la consulta SQL:", err);
            return res.status(500).send({ success: false, error: "Error al buscar la membresia en la base de datos." });

        } else if (result.length <= 0) {

            return res.status(404).send({ success: false, message: "Membresia no encontrada." });

        }

        // console.log("Resultado de la consulta:", result);
        return res.status(200).send({ success: true, message: "Membresia encontrada con éxito.", member: result });

    });

});

//Actualizar membresia
router.post('/update_member', upload.any(), async function(req, res) {

    let { id, name, price, duration} = req.body;

    let idNumber = extractId(id);

    let updateQuery = `UPDATE membresias SET nombre = ?,
                                            costo = ?,
                                            duracion_dias = ?
                                        WHERE id_membresia = ?`;
    
    connection.query(updateQuery, [name, price, duration, idNumber], async function(err, result) {

        if (err) {

            console.error("Error al ejecutar la consulta SQL:", err);
            return res.status(500).send({ success: false, error: "Error al actualizar membresia en la base de datos." });

        }

        console.log("Resultado de la consulta:", result);
        return res.status(200).send({ success: true, message: "Membresia actualizado con exito" });

    })

});

//Borrar membresia
router.post('/delete_member', async function(req, res) {

    let { id } = req.body;
    let idNumber = extractId(id);

    const deleteQuery = 'DELETE FROM membresias WHERE id_membresia = ?';

    connection.query(deleteQuery, [idNumber], function(err, result) {

        if (err) {

            console.error("Error al ejecutar la consulta SQL:", err);
            return res.status(500).send({ success: false, error: "Error al eliminar membresia de la base de datos." });

        }

        // console.log("Resultado de la consulta:", result);
        return res.status(200).send({ success: true, message: "Membresia eliminada con exito", product: result });

    });

});

//Registrar compra
router.post('/register_purchase', (req, res) => {

    const { id_cliente, id_membresia, fecha_compra, fecha_vencimiento } = req.body;
    console.log(id_cliente, id_membresia, fecha_compra, fecha_vencimiento);

    if (!id_cliente || !id_membresia || !fecha_compra || !fecha_vencimiento) {

        return res.status(400).json({ success: false, message: "Datos incompletos" });

    }

    const query = 'INSERT INTO compras (id_cliente, id_membresia, fecha_inicio, fecha_fin) VALUES (?, ?, ?, ?)';

    connection.query(query, [id_cliente, id_membresia, fecha_compra, fecha_vencimiento], (err, results) => {

        if (err) {

            console.error("Error al registrar la compra:", err);
            return res.status(500).json({ success: false, error: "Error en la base de datos" });

        }

        res.status(201).json({ success: true, message: "Compra registrada con éxito" });

    });

});

//Registrar cliente
router.post('/insert_client', upload.any(), async function (req, res) {

    let { name, rfc } = req.body;

    console.log(name, rfc);

    const RegisterQuery = 'INSERT INTO clientes (nombre, rfc) VALUES (?, ?)';

    connection.query(RegisterQuery, [name, rfc], function(err, result) {

        if (err) {

            console.error("Error al ejecutar la consulta SQL:", err);
            return res.status(500).send({ success: false, error: "Error al insertar cliente en la base de datos." });

        }

        console.log("Resultado de la consulta:", result);
        return res.status(200).send({ success: true, message: "Cliente registrado con éxito." });

    });

});

//Buscar cliente
router.post('/search_client', async function(req, res) {

    let { id } = req.body;
    let idNumber = extractId(id)
    // console.log(idNumber);

    const SearchQuery = 'SELECT * FROM clientes WHERE id_cliente = ?';

    connection.query(SearchQuery, [idNumber], function(err, result) {

        if (err) {

            console.error("Error al ejecutar la consulta SQL:", err);
            return res.status(500).send({ success: false, error: "Error al buscar el cliente en la base de datos." });

        } else if (result.length <= 0) {

            return res.status(404).send({ success: false, message: "Producto no encontrado." });

        }

        // console.log("Resultado de la consulta:", result);
        return res.status(200).send({ success: true, message: "Producto encontrado con éxito.", client: result });

    });

});

//Actualizar cliente
router.post('/update_client', upload.any(), async function(req, res) {

    let { id, name, rfc } = req.body;
    // console.log(id, name, rfc);

    let idNumber = extractId(id);
    // console.log(idNumber);

    let updateQuery = `UPDATE clientes SET nombre = ?,
                                            rfc = ?
                                        WHERE id_cliente = ?`;
    
    connection.query(updateQuery, [name, rfc, idNumber], async function(err, result) {

        if (err) {

            console.error("Error al ejecutar la consulta SQL:", err);
            return res.status(500).send({ success: false, error: "Error al actualizar cliente en la base de datos." });

        }

        console.log("Resultado de la consulta:", result);
        return res.status(200).send({ success: true, message: "Cliente actualizado con exito" });

    })

});

//Borrar cliente
router.post('/delete_client', async function(req, res) {

    let { id } = req.body;
    let idNumber = extractId(id);

    const deleteQuery = 'DELETE FROM clientes WHERE id_cliente = ?';

    connection.query(deleteQuery, [idNumber], function(err, result) {

        if (err) {

            console.error("Error al ejecutar la consulta SQL:", err);
            return res.status(500).send({ success: false, error: "Error al eliminar cliente de la base de datos." });

        }

        // console.log("Resultado de la consulta:", result);
        return res.status(200).send({ success: true, message: "Cliente eliminado con exito", client: result });

    });

});

//Registrar compra
router.post('/register_asistence', (req, res) => {

    const { id_client, date, status } = req.body;

    if (!id_client || !date || !status) {

        return res.status(400).json({ success: false, message: "Datos incompletos" });

    }

    const query = 'INSERT INTO asistencias (id_cliente, fecha_asistencia, estado) VALUES (?, ?, ?)';

    connection.query(query, [id_client, date, status], (err, results) => {

        if (err) {

            console.error("Error al registrar la asistencia:", err);
            return res.status(500).json({ success: false, error: "Error en la base de datos" });

        }

        res.status(201).json({ success: true, message: "Asistencia registrada con exito" });

    });

});

module.exports = router;
