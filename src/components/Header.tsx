import React from 'react'
import { HeaderProp } from '../interfaces/Props.interface'

export const Header = ({ title }: HeaderProp) => {
    return (

        <div className='bg-secondary'>
            <nav className='navbar'>
                <div className="container-fluid d-flex justify-content-center">
                    <a className='navbar-brand fs-4 fw-bold text-white' href="#">{title}</a>
                </div>
            </nav>
        </div>
    )
}
