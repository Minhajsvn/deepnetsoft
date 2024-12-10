import axios from 'axios';

const API_BASE_URL = 'https://deepnetsoft-08vf.onrender.com';

export const fetchMenus = () => axios.get(`${API_BASE_URL}/menus`);
export const createMenu = (menuData) => axios.post(`${API_BASE_URL}/menus`, menuData);
export const fetchMenuItems = (menuId) => axios.get(`${API_BASE_URL}/menus/${menuId}/items`);
export const createMenuItem = (menuId, itemData) => axios.post(`${API_BASE_URL}/menus/${menuId}/items`, itemData);
