import React from 'react'

function PopupPDF(props) {
    return (
        <div className={!props.loadingSc ? 'd-none':'pdf-modal'}>
            <div className='d-flex justify-content-center align-items-center w-100 h-100'>
                <h1>TEST</h1>
            </div>
        </div>
    )
}

export default PopupPDF