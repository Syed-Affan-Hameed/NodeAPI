// controllers/productController.js

const ProductModel = require("../models/products.model.js");

exports.getProducts = async (req, res) => {
    try {
        const products = await ProductModel.find({});
        res.status(200).json(products);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
};

exports.getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await ProductModel.findById(id);
        res.status(200).json(product);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
};

exports.addProduct = async (req, res) => {
    try {
        const product = await ProductModel.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
};

exports.updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await ProductModel.findByIdAndUpdate(id, req.body);
        if (!product) {
            res.status(404).json({ message: "Product not found" });
        }
        const updatedProduct = await ProductModel.findById(id);
        res.status(200).json({ message: "Successfully Updated", product: updatedProduct });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
};

exports.deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await ProductModel.findByIdAndDelete(id);
        if (!product) {
            res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({ message: "Successfully Deleted the product", product: product });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
};
