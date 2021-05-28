import React from 'react'

export default function AddAhorro() {
    return (
        <div className="grid grid-cols-1 justify-items-center">
            <label for="price" className="mt-4 mb-1 uppercase text-grey-darker text-xs font-bold">Agregar ahorro</label>
            <div className="flex flex-row">
                <span className="flex items-center bg-pink-500 rounded rounded-r-none px-3 font-bold text-grey-darker">$</span>
                <input type="number" name="price" className="bg-pink-500 text-grey-darker py-2 rounded text-grey-darkest border border-pink-500 rounded-l-none font-bold" />
            </div>
        </div>
    )
}