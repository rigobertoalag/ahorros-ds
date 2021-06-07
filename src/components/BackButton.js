import React from 'react'
import { Link } from 'react-router-dom'
import {ArrowLeftIcon} from '@heroicons/react/outline'

export default function BackButton({path}){
    return(
        <div>
            <Link to={path}><ArrowLeftIcon className="mt-2 mx-2 w-1/12 text-pink-600"/></Link>
        </div>
    )
}