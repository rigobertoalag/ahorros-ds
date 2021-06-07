import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Pork } from '../assets/pork.svg';
import { PresentationChartBarIcon, BookOpenIcon, PlusIcon, SwitchHorizontalIcon } from '@heroicons/react/outline'

export default function AddViewPage() {
    return (
        <div class="grid grid-cols-2 justify-items-center">

            <div className="bg-gray-300 w-full h-full py-3 text-center">
                <Link to="/add-ahorro">
                    <PlusIcon className="h-12 text-green-500 absolute" />
                    <Pork className="max-h-24" />
                    <p>Añadir ahorro</p>
                </Link>
            </div>

            <div className="bg-gray-200 w-full h-full py-3 text-center">
                <Link to="/rmv-ahorro">
                    <SwitchHorizontalIcon className="h-12 text-red-500 absolute" />
                    <Pork className="max-h-24" />
                        Retirar ahorro
                </Link>
            </div>

            <div className="bg-gray-200 w-full h-full py-3 text-center content-around items-center">
                <Link to="/list-ahorros">
                    <BookOpenIcon className="text-pink-500 max-h-24" />
                    <span>Ver ahorros</span>
                </Link>
            </div>
        </div >
    )
}