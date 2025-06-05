const Product = require("../models/prodModels");

const generateProductId = async () => {
    try {
        const lastProduct = await Product.getLastProductId();

        if (!lastProduct) {
            return 'PRD0001';
        }

        const lastId = lastProduct.prod_id;
        const numericPart = parseInt(lastId.replace('PRD', ''));

        const newNumericId = numericPart + 1;
        const paddedId = newNumericId.toString().padStart(4, '0');

        return `PRD${paddedId}`;
    } catch (error) {
        throw new Error(`Error creating product ${error.message}`)
    }
}

module.exports = generateProductId;