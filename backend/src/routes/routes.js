const express = require('express')
const { getItems, postItem, deleteItem, updateItem, searchItems, getOneItem } = require('../controller/controller')
const path = require('path')
const route = express.Router()
route.get("/alldata/", getItems)
route.get("/data/single/:id", getOneItem)
route.post('/data/add', postItem)
route.patch('/data/update/:id', updateItem)
route.delete('/data/delete/:id', deleteItem)
route.get('/data/search/:key', searchItems)
route.all('*', (req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'err.html'))
})

module.exports = route