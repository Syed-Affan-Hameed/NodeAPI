// routes/productRoutes.js

const express = require('express');
const router = express.Router();
const productController = require('../controllers/products.controller.js');

router.get('/api/products/getproducts', productController.getProducts);
router.get('/api/products/getproduct/:id', productController.getProductById);
router.post('/api/products/addproduct', productController.addProduct);
router.put('/api/products/updateproduct/:id', productController.updateProduct);
router.delete('/api/products/deleteproduct/:id', productController.deleteProduct);

module.exports = router;
