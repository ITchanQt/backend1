const Products = require("../models/prodModels");
const generateProductId = require("../utils/productIdGenerator");

const productControllers = {
  createProd: async (req, res) => {
    try {
      const {
        productName,
        productPrice,
        productDesc,
        productStock,
        productExpiry,
      } = req.body;

      const productId = await generateProductId();

      if (
        !productName ||
        !productPrice ||
        !productDesc ||
        !productStock ||
        !productExpiry
      ) {
        return res.status(400).json({
            success: false,
            message: "All fields are required"
        });

      }

      const prodData = {
        prod_id: productId,
        prod_name: productName,
        prod_price: productPrice,
        prod_desc: productDesc,
        prod_stock: productStock,
        prod_expiration: productExpiry
      }

      const result = await Products.createProd(prodData);

      res.status(201).json({
        success: true,
        message: "Product created successfully",
        data: {  
            ...prodData
        }
      })
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Error creating product",
        error: error.message,
      });
    }
  },
};

module.exports = productControllers;