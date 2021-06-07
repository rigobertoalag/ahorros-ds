import React from 'react'

import BackButton from '../components/BackButton'

export default function RmvAhorro() {
    return (
        <>
            <BackButton path='/home' />
            <div className="grid grid-cols-1 justify-items-center items-center mt-2">
                <label for="price" className="block text-xl font-medium text-gray-700">Retirar ahorro</label>
                <div className="mt-16 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-500 sm:text-xl">
                            $
                    </span>
                    </div>
                    <input type="number" name="price" id="price" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-xl border-gray-300 rounded-md" placeholder="0.00" />
                </div>
                <a role="button" className="bg-pink-800 hover:bg-pink-900 text-white text-xl px-10 py-4 border rounded-full mt-5">
                    Quitar ahorro
            </a>
            </div>
        </>
    )
}