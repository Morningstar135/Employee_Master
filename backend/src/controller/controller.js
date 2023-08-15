const model = require("../models/schema")


const getItems = async (req, res) => {
    try {
        const listitem = await model.find({})
        res.status(200).json(listitem)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }


}
const postItem = async (req, res) => {
    try {
        const body = (req.body)
        await model.create(body)
        const newItems = await model.find({})
        res.status(200).json(newItems)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}
const updateItem = async (req, res) => {
    try {
        const { id } = req.params
        const body = req.body
        console.log(body)
        const newItem = await model.findByIdAndUpdate(id, body)
        const list = await model.find({})
        res.status(200).json(list)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}
const deleteItem = async (req, res) => {
    const { id } = req.params
    try {
        const deletedItem = await model.findByIdAndDelete(id)
        const items = await model.find({})
        res.status(200).json(items)
    } catch (e) {
        res.status(400).json({ error: e.message })
    }
}
const searchItems = async (req, res) => {
    const { key } = req.params

    try {
        const searchResults = await model.find({ todo: { $regex: key, $options: 'i' } })
        res.status(200).send(searchResults)
    } catch (err) {
        res.status(500).send({ error: err.message })
    }
}
module.exports = { getItems, postItem, deleteItem, updateItem, searchItems }