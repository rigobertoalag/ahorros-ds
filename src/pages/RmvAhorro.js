import React from 'react'

export default function RmvAhorro() {
    return (
        <div className="grid grid-cols-1 justify-items-center items-center">
            <label for="price" className="block text-lg font-medium text-gray-700">Retirar ahorro</label>
            <div className="mt-16 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">
                        $
                    </span>
                </div>
                <input type="text" name="price" id="price" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-lg border-gray-300 rounded-md" placeholder="0.00" />
            </div>
            <a role="button" className="bg-pink-800 hover:bg-pink-900 text-white text-sm px-10 py-4 border rounded-full mt-5">
                Quitar ahorro
            </a>
        </div>
    )
}