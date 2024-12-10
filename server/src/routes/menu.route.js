const express = require('express');
const menuControllers = require('../controllers/menu.controller');
const itemControllers = require('../controllers/item.controller');
const router = express.Router();

router.get('/menus', menuControllers.getMenus);
router.post('/menus', menuControllers.createMenu);
router.get('/menus/:menuId/items', itemControllers.getItems);
router.post('/menus/:menuId/items', itemControllers.createItem);

module.exports = router;