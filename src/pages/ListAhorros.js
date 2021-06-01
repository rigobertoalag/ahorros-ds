import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Pork } from '../assets/pork.svg';

export default function ListAhorros() {
    return (
        <div className="divide-y-2 divide-solid md:divide-solid px-10 text-center mt-20">
            <div className="mt-12">
                <Link to="/view-ahorro">
                    <Pork className="mx-20" />
                    Ahorros del dia
                </Link>
            </div>
            <div className="mt-12">
                <Link to="/view-ahorro">
                    <Pork className="mx-20" />
                    Ahorros de la semana
                </Link>
            </div>
            <div className="mt-12">
                <Link to="/view-ahorro">
                    <Pork className="mx-20" />
                    Ahorros del mes
                </Link>
            </div>
            <div className="mt-12">
                <Link to="/view-ahorro">
                    <Pork className="mx-20" />
                    Ahorros del año
                </Link>
            </div>
        </div>
    )
}