const Item = require('../models/item.model');



const getItems = async (menuId) => {
    try {
        const items = await Item.find({ menuId });
        return items;
    } catch (error) {
        throw new Error('No Data found in database');
    }
};

const createItem = async (body, menuId) => {
    try {
        const item = new Item({ ...body, menuId });
        await item.save();
        return item;
    } catch (error) {
        throw new Error("An error occurred while creating new item")
    }
};


module.exports = {
    getItems,
    createItem
}