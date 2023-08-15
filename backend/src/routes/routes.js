const express = require('express')
const { getItems, postItem, deleteItem, updateItem, searchItems } = require('../controller/controller')
const { model } = require('mongoose')
const path = require('path')
const route = express.Router()
route.get("/todo/", getItems)
route.post('/todo/post', postItem)
route.patch('/todo/update/:id', updateItem)
route.delete('/todo/delete/:id', deleteItem)
route.get('/todo/search/:key', searchItems)
route.all('*', (req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'err.html'))
})

module.exports = route