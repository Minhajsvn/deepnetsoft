import React, { useState } from 'react'
import { createMenu } from '../../api/menuApi';

export default function MenuForm({ onMenuCreated }) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newMenu = await createMenu({ name, description });
            onMenuCreated(newMenu.data);
            setName('');
            setDescription('');
        } catch (error) {
            console.error('Error creating menu:', error);
        }
    }
    return (
        <form onSubmit={handleSubmit} className='my-5 p-6 max-w-md mx-auto text-black bg-white rounded-lg shadow-md'>
            <input 
                type="text" 
                placeholder='Menu name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                required
            />
            <textarea 
                placeholder='Menu Description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className='w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
            <button 
                type='submit'
                className='w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
            >Create Menu</button>
        </form>
    )
}
