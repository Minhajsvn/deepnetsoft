const menuServices = require('../services/menu.service');


const getMenus = async (req, res) => {
    try {
        const menus = await menuServices.getMenus();
        res.status(200).send(menus);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
    
};

const createMenu = async (req, res) => {
    try {
        const menu = await menuServices.createMenu(req.body)
        res.status(201).send(menu);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};


module.exports = {
    getMenus,
    createMenu
}