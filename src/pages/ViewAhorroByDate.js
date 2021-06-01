import React, { useState } from 'react'
import { Line } from 'react-chartjs-2'
import {TrendingUpIcon, TrendingDownIcon} from '@heroicons/react/outline'

export default function ViewAhorroByDate() {
    const [date, getDate] = useState(['1', '2', '3', '4', '5', '6', '7']);
    const [entries, getEntries] = useState([200, 100, 300, 150, 500]);
    const [withdraw, geWithdraw] = useState([100, 50, 0, 50, 0]);

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
            id: 2,
            date: '31/05/2021 16:30',
            quantity: 50,
            type: 'withdraw'
        },
    ]

    console.log(entriesAndWithdraw)

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
        <div>
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
                                    <ul className="text-red-500"><TrendingDownIcon className="w-3.5 inline"/> {ew.quantity}</ul>
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

/*
var entriesFilter = entriesAndWithdraw.filter(function (el) {
        return el.type === 'entry';
    });

    var withdrawFilter = entriesAndWithdraw.filter(function (el) {
        return el.type === 'withdraw';
    });

    console.log('entriesFilter', entriesFilter);
    console.log('withdrawFilter', withdrawFilter);

    const setEntryOrWithdraw = (entriesAndWithdraw) => {
        if (!entriesAndWithdraw) {
            console.log('nada que mostrar')
        } else {
            const result = entriesAndWithdraw.filter(entry => entry === 'entry');
            console.log(result);
            console.log('todo chido')
        }
    }
*/