import React, { useState, useRef, useEffect } from 'react'
import { Layer, Rect, Stage } from 'react-konva'
import { Button } from 'react-bootstrap'
import jsPDF from 'jspdf'
import ReportTemplate1 from '../component/ReportTemplate1';
import ReportTemplate2 from '../component/ReportTemplate2';
import ReportAnnotation from '../component/ReportAnnotation'
import PopupPDF from '../component/PopupPDF';
import RectangleAnnotation from '../component/annotation/RectangleAnnotation';

const initialStyle = `display: none`

function Report() {
    const reportTemplateRef = useRef(null);
    const testRef = useRef()
    const [pdfSize, setPdfSize] = useState(false)
    const [loading, setLoading] = useState(false)
    const [startAnnotate, setStartAnnotate] = useState(false)

    const handleGeneratePdf = () => {
        setLoading(true)
        setPdfSize(!pdfSize)

        const doc = new jsPDF({
            orientation: 'p',
            unit: 'mm',
            format: 'a4',
        });

        doc.html(reportTemplateRef.current, {
            html2canvas: {
                width: '200',
                scale: 0.21
            },
            margin: [8, 7, 8, 7],
            async callback(doc) {
                // doc.setFontSize(9);
                await doc.save('document');
            },
        });
        setLoading(false)
    };

    const onClickAnnotate = () => {
        setStartAnnotate(!startAnnotate)
      }

    return (
        <div className='w-100 test'>
            <PopupPDF loadingSc={loading} />
            <div className=' h-100 w-100'>
                <div className='px-4 pb-4' id='report-temp'>
                    <div className='position-fixed'>
                        <div className='d-flex flex-column shadow p-3 mb-5 bg-body-tertiary rounded bg-light'>
                            <div className="col my-3">
                                <button className='btn btn-primary' onClick={handleGeneratePdf}>Generate PDF</button>
                            </div>
                            <div className="col my-3">
                                <button className='btn btn-primary' onClick={onClickAnnotate}>Annotate Image</button>
                            </div>
                            <div className="col my-3">
                                <button className='btn btn-primary'>Upload Folder</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <ReportTemplate2 reportTemplateRef2={reportTemplateRef} annotateState={startAnnotate}/>
                    </div>
                </div>
                {/* <ReportTemplate1 reportTemplateRef={reportTemplateRef} pdfSize={pdfSize} /> */}
            </div >
        </div>
    )
}

export default Report