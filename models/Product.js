const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
             
        },
        description: {
            type: String,
            required: true,
        },
        quantity: {
            type: Number,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        _createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        }

    },
    { timestamps: true }
)

const Product = mongoose.model("Product", ProductSchema)

module.exports = Product

