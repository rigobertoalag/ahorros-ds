import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Pork } from '../assets/pork.svg';
import {PresentationChartBarIcon, BookOpenIcon} from '@heroicons/react/outline'

export default function AddViewPage() {
    return (
        <div class="grid grid-cols-2 justify-items-center mt-20">

            <div className="pl-5 mb-28">
                <Link to="/add-ahorro">
                    <Pork />
                    Añadir ahorro
                </Link>
            </div>
            <div className="pr-5">
                <Link to="/rmv-ahorro">
                    <Pork />
                    Retirar ahorro
                </Link>
            </div>

            <div className="pl-20">
                <Link to="/list-ahorros">
                    <BookOpenIcon className="h-2/3 w-2/3 text-pink-500"/>
                    Ver ahorros
                </Link>
            </div>
            <div className="pr-20 pl-10">
                <Link to="/all-ahorros">
                    <PresentationChartBarIcon className="h-2/3 w-2/3 text-pink-500"/>
                    Todos los movimientos
                </Link>
            </div>

            <div className="border-l-4 bg-gray-900 h-2/3 absolute left-1/2 -ml-1 top-20"></div>
            <div className="bg-gray-900 w-1/4 absolute border-2 top-1/2 left-2/4"></div>
            <div className="bg-gray-900 w-1/4 absolute border-2 top-1/2 right-2/4"></div>
        </div >

    )
}