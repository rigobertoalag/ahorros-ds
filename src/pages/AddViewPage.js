import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Pork } from '../assets/pork.svg';
import {PresentationChartBarIcon, BookOpenIcon, PlusIcon, SwitchHorizontalIcon } from '@heroicons/react/outline'

export default function AddViewPage() {
    return (
        <div class="grid grid-cols-2 justify-items-center mt-20">
            <div className="pl-5 mb-28">
                <Link to="/add-ahorro">
                    <Pork />
                    <div className="absolute bottom-0 left-0"></div>
                    <PlusIcon className="absolute top-20 left-4 h-16 text-green-500"/>
                    Añadir ahorro
                </Link>
            </div>
            <div className="pr-5">
                <Link to="/rmv-ahorro">
                    <Pork />
                    <SwitchHorizontalIcon className="absolute top-24 right-40 h-12 text-red-500"/>
                    Retirar ahorro
                </Link>
            </div>

            <div className="pl-20">
                <Link to="/list-ahorros">
                    <BookOpenIcon className="h-2/3 w-2/3 text-pink-500"/>
                    Ver ahorros
                </Link>
            </div>
            {/*<div className="pr-20 pl-10">
                <Link to="/all-ahorros">
                    <PresentationChartBarIcon className="h-2/3 w-2/3 text-pink-500"/>
                    Todos los movimientos
                </Link>
            </div>*/}

            <div className="border-l-4 bg-gray-900 h-2/3 absolute left-1/2 -ml-1 top-20"></div>
            <div className="bg-gray-900 w-1/4 absolute border-2 top-1/2 left-2/4"></div>
            <div className="bg-gray-900 w-1/4 absolute border-2 top-1/2 right-2/4"></div>
        </div >

    )
}