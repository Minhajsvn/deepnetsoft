import React from 'react'

export default function MenuList({ menus, onSelect }) {
    
    return (
        <div className="flex justify-center mt-10 space-x-2">
            {menus.map((menu) => (
                <button
                    key={menu._id}
                    onClick={() => onSelect(menu._id)}
                    className="bg-[#121618] border border-[#0796EF] w-16 lg:w-28 h-8 lg:h-12 active:bg-[#0796EF] uppercase text-xs lg:text-base"
                >
                    {menu.name}
                </button>
            ))}
        </div>
    )
}
