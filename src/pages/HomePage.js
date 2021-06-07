import React from 'react'
import { Link } from 'react-router-dom'

import { BookOpenIcon, CheckCircleIcon, PresentationChartLineIcon, ClipboardListIcon } from '@heroicons/react/outline'
import { CurrencyDollarIcon, SearchCircleIcon } from '@heroicons/react/solid'

export default function HomePage() {
    return (
        <div>
            <div className="grid grid-cols-2 w-full justify-items-center bg-pink-200">
                <Link to="/home" className="bg-pink-500 hover:bg-pink-600 text-white text-sm px-10 py-2 border rounded-full my-2">Entrar</Link>
                <Link to="/login" className="bg-pink-500 hover:bg-pink-600 text-white text-sm px-10 py-2 border rounded-full my-2">Login</Link>
            </div>
            <div className="mt-12 mx-5">
                <div className="relative text-center grid justify-items-center">
                    <BookOpenIcon className="w-44 text-pink-400" />
                    <div className="absolute">
                        <CurrencyDollarIcon className="w-1/3 text-green-400 " />
                    </div>
                </div>
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-700">
                    <span className="block">Todos tus ahorros y gastos</span>
                    <span className="block text-pink-500">en un solo lugar</span>
                </h2>
            </div>
            <div className="bg-pink-500 mt-28">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-700 py-5 px-5 grid grid-cols-2">
                    <span className="block text-white my-5">Proceso sencillo </span>
                    <CheckCircleIcon className="w-1/3 text-pink-200 my-5" />
                    <PresentationChartLineIcon className="w-1/3 text-pink-200 my-5" />
                    <span className="block text-gray-100 my-5">Graficas limpias</span>
                    <span className="block text-pink-800 my-5">Cuentas claras</span>
                    <ClipboardListIcon className="w-1/3 text-pink-200 my-5" />
                </h2>
            </div>

            <div className="bg-white mt-16">
                <div className="grid grid-cols-1 justify-items-center">
                    <SearchCircleIcon className="w-1/3 text-pink-500" />
                    <span className="block my-5 font-extrabold text-3xl tracking-tight py-5 px-5 text-center text-gray-700">¡Entra a conocer todo lo que puedes ahorrar!</span>
                </div>
                <h2 className="text-3xl tracking-tight text-gray-700 py-5 px-5 grid grid-cols-2">
                    <span className="block my-5 font-extrabold">Tour Rapido</span>
                    <Link to='/home' className="bg-pink-500 hover:bg-pink-600 text-white text-2xl py-2 mx-5 my-2 border rounded-full font-semibold text-center">Entrar</Link>
                </h2>
            </div>
        </div>
    )
}