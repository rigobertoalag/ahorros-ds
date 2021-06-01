import React from 'react'

import { LockClosedIcon } from '@heroicons/react/solid'

export default function Login() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Inicio de sesion</h2>
                </div>
                <form className="mt-8 space-y-6" action="#" method="POST">
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email-address" className="sr-only">
                                Correo
                      </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-pink-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm"
                                placeholder="Ingresa tu correo electronico"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Contraseña
                      </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-pink-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm"
                                placeholder="Contraseña"
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="text-sm">
                            <a href="#" className="font-medium text-pink-600 hover:text-pink-500">
                                ¿No tienes cuenta? - Registrate
                      </a>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                        >
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                <LockClosedIcon className="h-5 w-5 text-pink-500 group-hover:text-indigo-400" aria-hidden="true" />
                            </span>
                      Entrar
                    </button>
                    </div>
                </form>
            </div>
        </div>
    )
}