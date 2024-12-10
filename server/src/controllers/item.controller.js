const itemServices = require('../services/item.service');



const getItems = async (req, res) => {
    try {
        const items = await itemServices.getItems(req.params.menuId);
        res.status(200).send(items);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

const createItem = async (req, res) => {
    try {
        const item = await itemServices.createItem(req.body, req.params.menuId)
        res.status(201).send(item);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};


module.exports = {
    getItems,
    createItem
}