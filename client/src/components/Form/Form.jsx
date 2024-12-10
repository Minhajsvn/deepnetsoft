import React from 'react'
import MenuForm from './MenuForm'
import ItemForm from './ItemForm'

export default function Form({ setItems, handleMenuCreated, selectedMenuId }) {
    return (
        <div>
            <MenuForm onMenuCreated={handleMenuCreated} />
            {selectedMenuId && <ItemForm setItems={setItems} selectedMenuId={selectedMenuId} />}
        </div>
    )
}
