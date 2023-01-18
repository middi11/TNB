import React from 'react'
import { NavLink } from 'react-router-dom';

function Sidebar({ activeSide }) {

    return (
        <div className='sidebar'>
            <div className='text-light logo-item d-flex justify-content-center align-items-center'>
                <h3>LOGO</h3>
            </div>
            <div className='text-light sidebar-item d-flex justify-content-center align-items-center'>
                <NavLink to='/home' className='link-item'>Home</NavLink>
            </div>
            <div className='text-light sidebar-item d-flex justify-content-center align-items-center'>
                <NavLink to='/report' className={({ isActive }) => isActive ? 'link-item active' : 'link-item'}>Report</NavLink>
            </div>
            <div className='text-light sidebar-item d-flex justify-content-center align-items-center'>
                <NavLink to='/test' className={({ isActive }) => isActive ? 'link-item active' : 'link-item'}>Test</NavLink>
            </div>
        </div>
    )
}

export default Sidebar