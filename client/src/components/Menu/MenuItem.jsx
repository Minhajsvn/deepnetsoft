import React from 'react'

export default function MenuItem({ items }) {
    return (
        <div className='flex justify-center lg:py-8'>
            <div className="py-8 px-3 border m-5 lg:w-9/12">
                <h3 className='text-center text-3xl lg:text-5xl uppercase'>Menu Items</h3>
                <div>
                    {items.map((item) => (
                        <div key={item._id} className='py-3'>
                            <div className='flex justify-between items-center'>
                                <p className='text-base lg:text-2xl uppercase'>{item.name}</p>
                                <p className='text-base lg:text-2xl'>${item.price}</p>  
                            </div>
                            <p className='font-kelly text-sm lg:text-lg text-neutral-500'>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
