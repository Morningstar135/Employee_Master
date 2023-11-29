const model = require("../models/schema")


const getItems = async (req, res) => {
    try {
        const listitem = await model.find({})
        console.log(listitem)
        res.status(200).json(listitem)
    } catch (err) {
        res.status(400).json({ 
            error: err.message 
        })
    }
}
const getOneItem = async(req,res)=>{
    try {
        const {id}=req.params
        console.log(id)
        const listitem = await model.findById({_id:id})
        console.log(listitem)
        res.status(200).json(listitem)
    } catch (err) {
        res.status(400).json({ 
            error: err.message 
        })
    }
}
const postItem = async (req, res) => {
    try {
        const item = req.body
        console.log(item)
        await model.create(item)
        const newItems = await model.find({})
        res.status(200).json({
            newItems,
            message:"Data Created Successfully"
        })
    } catch (err) {
        res.status(400).json({ error: err })
        console.log( err.message )
    }
}
const updateItem = async (req, res) => {
    try {
        const { id } = req.params
        const body = req.body
        console.log(body)
        const newItem = await model.findByIdAndUpdate(id, body)
        const list = await model.find({})
        res.status(200).json({
            list,
            newItem,
            message:"Data Updated Successfully"
        })
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
        const searchResults = await model.find({ name: { $regex: key, $options: 'i' } })
        res.status(200).send(searchResults)
    } catch (err) {
        res.status(500).send({ error: err.message })
    }
}

module.exports = { getItems, postItem, deleteItem, updateItem, searchItems ,getOneItem}