import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Pork } from '../assets/pork.svg';
import { PresentationChartBarIcon, BookOpenIcon, PlusIcon, SwitchHorizontalIcon } from '@heroicons/react/outline'

export default function AddViewPage() {
    return (
        <div class="grid grid-cols-2 justify-items-center mt-20 table-auto">
            <div className="bg-green-900 w-full">
                <Link to="/add-ahorro">
                    <div className="w-3/4 h-3/4 grid grid-cols-1 justify-items-center">
                        <Pork />
                        <PlusIcon className="h-16 text-green-500" />
                        Añadir ahorro
                </div>
                </Link>
            </div>
            <div className="my-10">
                <Link to="/rmv-ahorro">
                    <Pork />
                    {/*<SwitchHorizontalIcon className="absolute top-32 right-40 h-12 text-red-500" />*/}
                    Retirar ahorro
                </Link>
            </div>

            <div className="text-center my-10">
                <Link to="/list-ahorros">
                    <BookOpenIcon className="text-pink-500" />
                    <span>Ver ahorros</span>
                </Link>
            </div>
        </div >
    )
}