import React, { useEffect, useState } from 'react'
import { createMenuItem, fetchMenuItems } from '../../api/menuApi';
import MenuItem from '../Menu/MenuItem';

export default function ItemForm({ setItems, selectedMenuId }) {
    const [itemName, setItemName] = useState('');
    const [itemDescription, setItemDescription] = useState('');
    const [itemPrice, setItemPrice] = useState('');



    const handleAddItem = async () => {
        try {
            const newItem = await createMenuItem(selectedMenuId, {
                name: itemName,
                description: itemDescription,
                price: parseFloat(itemPrice),
            });
            setItems((prev) => [...prev, newItem.data]);
            setItemName('');
            setItemDescription('');
            setItemPrice('');
        } catch (error) {
            console.error('Error adding item:', error);
        }
    };

    return (
        <div className="m-5 p-6 max-w-md mx-auto text-black bg-white rounded-lg shadow-md">
            <input
                type="text"
                placeholder="Item Name"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                className='w-full px-4 py-2 mb-4  border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
            <textarea
                placeholder="Item Description"
                value={itemDescription}
                onChange={(e) => setItemDescription(e.target.value)}
                className='w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'

            />
            <input
                type="number"
                placeholder="Price"
                value={itemPrice}
                onChange={(e) => setItemPrice(e.target.value)}
                className='w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'

            />
            <button 
                onClick={handleAddItem}
                className='w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
            >Add Item</button>
        </div>
    )
}
