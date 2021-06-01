import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Line } from 'react-chartjs-2'
import { TrendingUpIcon, TrendingDownIcon,ArrowLeftIcon} from '@heroicons/react/outline'

export default function ViewAhorroByDate() {
    const [date] = useState(['1', '2', '3', '4', '5', '6', '7']); //Ejenmplo por semana
    const [entries, getEntries] = useState([]);
    const [withdraw, getWithdraw] = useState([]);

    const entriesAndWithdraw = [
        {
            id: 1,
            date: '31/05/2021 13:30',
            quantity: 300,
            type: 'entry' //entry
        },
        {
            id: 2,
            date: '31/05/2021 14:30',
            quantity: 50,
            type: 'withdraw' //withdraw
        },
        {
            id: 3,
            date: '31/05/2021 15:30',
            quantity: 100,
            type: 'entry'
        },
        {
            id: 4,
            date: '31/05/2021 16:30',
            quantity: 100,
            type: 'withdraw'
        },
        {
            id: 5,
            date: '01/05/2021 16:30',
            quantity: 500,
            type: 'entry'
        },
        {
            id: 6,
            date: '01/05/2021 17:30',
            quantity: 100,
            type: 'entry'
        },
        {
            id: 7,
            date: '01/05/2021 17:31',
            quantity: 100,
            type: 'withdraw'
        },
    ]

    useEffect(() => {
        const entries = entriesAndWithdraw.filter(ew => ew.type === 'entry');
        const e = entries.map(e => e.quantity)
        getEntries(e)

        const withdraw = entriesAndWithdraw.filter(ew => ew.type === 'withdraw');
        const w = withdraw.map(w => w.quantity)
        getWithdraw(w)
    },[]);

    const data = {
        labels: date, //Datos dinamicos
        datasets: [
            {
                label: 'Ingresos',
                data: entries, //Datos dinamicos
                fill: false,
                backgroundColor: 'rgb(0, 252, 71)',
                borderColor: 'rgb(5, 198, 47, 0.2)',
            },
            {
                label: 'Egresos',
                data: withdraw, //Datos dinamicos
                fill: false,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132, 0.2)',
            },
        ],
    };

    return (
        <div className="mt-20">
            <Link to="/list-ahorros"><ArrowLeftIcon className="-mt-3 mx-5 w-1/12 text-pink-600"/></Link>
            <div className="mx-5">
                <Line data={data} />
            </div>

            <div className="mx-5 mt-8 text-pink-600">Ingresos y Egresos del $date</div>

            <div className="mx-5 mt-5">
                {
                    entriesAndWithdraw.map((ew) => (
                        <div key={ew.id} className="grid grid-cols-2">
                            <div>
                                <ul>{ew.date}</ul>
                            </div>
                            <div className="text-center">
                                {ew.type === 'entry' ?
                                    <ul className="text-green-500"><TrendingUpIcon className="w-3.5 inline" /> {ew.quantity}</ul>
                                    :
                                    <ul className="text-red-500"><TrendingDownIcon className="w-3.5 inline" /> {ew.quantity}</ul>
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}