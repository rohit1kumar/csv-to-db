const bcrypt = require('bcrypt')
require('dotenv').config()
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const jwt_secret = process.env.JWT_SECRET
const salt = 10

//login 
const login = async (req, res) => {

    try {
        const user = await User.findOne({ username: req.body.username })
        if (!user) {
            return res.status(401).send({
                status: "error",
                message: "user not found !",
            })
        }

        const match = await bcrypt.compare(req.body.password, user.password)
        if (!match) {
            res.status(401).send({
                status: 'error',
                message: "wrong password"
            })
        }

        if (match) {
            const token = jwt.sign({ username: user.username }, jwt_secret, { expiresIn: '2d' })
            res.status(201).json(
                {
                    token: token,
                    status: 'ok',
                    message: 'loggin successful'
                })
        }
    }
    catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        })
    }
}


//Register
const register = async (req, res) => {

    try {
        const hashedpassword = await bcrypt.hash(req.body.password, salt)
        await User.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            username: req.body.username, //username is email
            password: hashedpassword
        })
        res.status(201).send({
            status: 'ok',
            message: 'Registered successfully'
        })
    } catch (error) {

        // duplicate username
        if (error.code === 11000) {
            return res.json({ status: 'error', error: 'Username already in use' })
        }

        res.status(500).send({
            status: 'error',
            message: error.message
        })
    }
}

// find user by id
const findById = async (req, res) => {

    try {
        const user = await User.findById(req.params.id)
        res.status(200).json(user)

        if (!user) {
            return res.status(401).send({
                status: 'error',
                message: 'user not found !',
            })
        }

    } catch (error) {
        res.status(500).send({
            status: 'error',
            message: error.message
        })
    }

}


//find all user
const findAll = async (req, res) => {

    try {
        const user = await User.find({})
        res.status(200).json(user)

    } catch (error) {
        res.status(500).send({
            status: 'error',
            message: error.message
        })
    }
}

module.exports = { register, login, findById, findAll }



