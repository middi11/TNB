import React from 'react'

function ReportAnnotation() {
  return (
    <div className='d-flex flex-column shadow p-3 mb-5 bg-body-tertiary rounded p-3 bg-light'>
        <div className="col my-3">
           <button className='btn btn-primary'>Generate PDF</button>
        </div>
        <div className="col my-3">
           <button className='btn btn-primary'>Annotate Image</button>
        </div>
        <div className="col my-3">
          <button className='btn btn-primary'>Upload Folder</button>
        </div>
    </div>
  )
}

export default ReportAnnotation