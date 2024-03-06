const Product = require('../models/product.model.js')

const getProducts = async (req, res) => {

    try {
        const product = await Product.find({});
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getProductById = async (req, res) => {
    try {
        const { id } = req.params;

        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body);

        if (!product) {
            return res.status(404).send("Product Not Found");
        }

        const updatedproduct = await Product.findById(req.params.id);
        res.status(200).json(updatedproduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id)
        if (!product) {
            return res.status(404).send("Product Not Found");
        }
        res.status(200).json({ message: "Product Deleted Successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}