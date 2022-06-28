const Product = require('../models/Product')
const csv = require('csvtojson')



//add product with csv file
const addProduct = async (req, res) => {
    try {
        const data = await csv().fromFile('uploads/' + req.file.filename)

        await Product.insertMany(data)
        res.status(201).send({
            data: data,
            status: 'ok',
            message: 'Product addded successfully'
        })
    } catch (error) {
        res.status(500).send({
            status: 'error',
            message: error.message
        })
    }

}

//get product list
const getProduct = async (req, res) => {
    try {
        const product = await Product.find({})
        res.status(200).json(product)

    } catch (error) {
        res.status(500).send({
            status: 'error',
            message: error.message
        })
    }
}
module.exports = { addProduct, getProduct }