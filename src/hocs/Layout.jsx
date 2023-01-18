import React, { useState } from 'react'
import Sidebar from '../component/Sidebar'
import Navbar from '../component/Navbar'

function Layout(props) {
    const [active, setActive] = useState(true)

    return (
        <>
            <div className='d-flex'>
                <div className={active ? 'sidebar-main' : 'sidebar-main-notact'}>
                    <Sidebar activeSide={active} />
                </div>
                <div className={active ? 'main-content w-100' : 'main-content-notact w-100'}>
                    <div className='w-100'>
                        <Navbar activeSide={() => setActive(!active)} />
                    </div>
                    <div className='main-cont-report'>
                        {props.children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout