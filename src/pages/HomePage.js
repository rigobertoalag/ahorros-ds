import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage(){
    return(
        <div className="mt-20">
            <Link to="/home">Entrar</Link>
            <br></br>
            <Link to="/login">Login</Link>
        </div>
    )
}