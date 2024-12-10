const Menu = require('../models/menu.model')


const getMenus = async () => {
    try {
        const menus = await Menu.find({});
        console.log(menus);
        return menus;
    } catch (error) {
        throw new Error("No Data found in database")
    }
};

const createMenu = async (body) => {
    try {
        // console.log(body)
        const menu = new Menu(body);
        await menu.save();
        return menu;
    } catch (error) {
        console.error("Original error:", error);
        throw new Error("An error occurred while creating the new menu: " + error.message);
    }
};

module.exports = {
    getMenus,
    createMenu
}