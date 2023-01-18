import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi"
import { useLocation } from 'react-router-dom'

function Navbar({ activeSide }) {

    const location = useLocation()

    return (
        <div className='w-100-sm border-bottom shadow mb-5 bg-body'>
            <div className='d-flex justify-content-between p-3'>
                <div className='d-flex'>
                    <div className='hamb-menu'>
                        <GiHamburgerMenu size={30} onClick={activeSide} />
                    </div>
                    <div className='px-4'>
                        <h4>{location.pathname.split('/')[1].charAt(0).toUpperCase() + location.pathname.split('/')[1].slice(1)}</h4>
                    </div>
                </div>
                <div>
                    page
                    page
                    page
                </div>
            </div>
        </div>
    )
}

export default Navbar