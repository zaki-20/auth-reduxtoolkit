import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { logout } from '../features/auth/auth.thunk'
import { reset } from '../features/auth/auth.slice'

const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user } = useSelector(state => state.auth)

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset)
        navigate('/')
    }
    return (

        <div className="">
            <nav className="bg-gray-400   mb-10">
                <div className="container mx-auto flex flex-wrap items-center justify-between">
                    <Link to="/" className="flex">
                        <span className="self-center text-lg font-semibold whitespace-nowrap">Goals</span>
                    </Link>
                    <div className="flex md:order-2">
                        <div className="relative mr-3 md:mr-0 hidden md:block">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>
                            </div>
                            <input type="text" id="email-adress-icon" className="mx-2 my-2 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2" placeholder="Search..." />
                        </div>
                        <button data-collapse-toggle="mobile-menu-3" type="button" className="md:hidden text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center" aria-controls="mobile-menu-3" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
                            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                        </button>
                    </div>
                    <div className="hidden md:flex justify-between items-center w-full md:w-auto md:order-1" id="mobile-menu-3">
                        <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
                            <li>
                                <Link to="/" className="bg-blue-700 md:bg-transparent text-white block pl-3 pr-4 py-2 md:text-blue-700 md:p-0 rounded" aria-current="page">Home</Link>
                            </li>
                            {
                                user ? (
                                    <li>
                                        <button onClick={onLogout} className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">Logout</button>
                                    </li>)
                                    : (
                                        <>
                                            <li>
                                                <Link to="/login"  className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">Login</Link>
                                            </li>
                                            <li>
                                                <Link to="/register"  className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">Register</Link>
                                            </li>
                                        </>)
                            }

                        </ul>
                    </div>
                </div >
            </nav >
        </div >


    )
}

export default Header