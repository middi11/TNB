import React, { useRef, useState, useLayoutEffect, useEffect } from 'react'
import RectangleAnnotation from './annotation/RectangleAnnotation';

function ReportTemplate2(props) {
    const ref = useRef()
    const boxRef = useRef()

    const [selectedImage, setSelectedImage] = useState(undefined);
    const [selectedImage1, setSelectedImage1] = useState(undefined);
    const [selectedImage2, setSelectedImage2] = useState(undefined);
    const [selectedImage3, setSelectedImage3] = useState(undefined);
    const [imageSelected, setImageSelected] = useState(false)
    const [imageSelected1, setImageSelected1] = useState(false)
    const [imageSelected2, setImageSelected2] = useState(false)
    const [imageSelected3, setImageSelected3] = useState(false)
    const [imageSize, setImageSize] = useState({
        width: 0,
        height: 0
    });
    // const [boundingRect, setBoundingRect] = useState()
    const [rectangles, setRectangles] = useState([])
    const [boundRect, setBoundRect] = useState()

    function handleCreate(newRectangle) {
        setRectangles([...rectangles, newRectangle]);
    }

    useEffect(() => {

        setImageSize({ width: ref.current.clientWidth, height: ref.current.clientHeight })
    }, [])

    useEffect(() => {
        setBoundRect(boxRef.current)
    }, [props.annotateState])


    return (
        <>
            <div id='report-template-2' ref={boxRef}>
                <div ref={props.reportTemplateRef2} className='p-3' >
                    {
                        props.annotateState ? (
                            <div
                                style={{
                                    position: 'absolute',
                                    width: '100%',
                                    height: '100%',
                                    border: '1px solid black',
                                }}

                            >
                                <RectangleAnnotation onCreate={handleCreate} boundingBox={boundRect} annotateState={props.annotateState} />
                                {rectangles.map((rectangle, i) => (
                                    <div
                                        key={i}
                                        style={{
                                            position: "absolute",
                                            top: Math.min(rectangle.y1, rectangle.y2),
                                            left: Math.min(rectangle.x1, rectangle.x2),
                                            width: Math.abs(rectangle.x1 - rectangle.x2),
                                            height: Math.abs(rectangle.y1 - rectangle.y2),
                                            border: '1px solid red'
                                        }}
                                    />
                                ))
                                }
                            </div>
                        ) : null
                    }


                    {/* <div style={{ position: 'absolute', width: '50px', height: '50px', border: '2px solid blue', top: '0' }}>
                    </div> */}

                    <div className=''>
                        <div className='row gx-0 border border-2 border-dark'>
                            <div className='col-2 border-end border-2 border-dark'>
                                logo
                            </div>
                            <div className='col-10'>
                                <div className='row gx-0 border-bottom border-2 border-dark'>
                                    <div className='col-2 p-1 border-end border-2 border-dark'>
                                        FEEDER
                                    </div>
                                    <div className='col-10 p-1'>
                                        <input type="text" className='fw-bold w-100' />
                                    </div>
                                </div>
                                <div className='row gx-0 border-bottom border-2 border-dark'>
                                    <div className='col-2 p-1 border-end border-2 border-dark'>
                                        NO TIANG
                                    </div>
                                    <div className='col-4 p-1 border-end border-2 border-dark'>
                                        <input type="text" className='fw-bold w-100' />
                                    </div>
                                    <div className='col-2 p-1 border-end border-2 border-dark'>
                                        TARIKH
                                    </div>
                                    <div className='col-4 p-1'>
                                        <input type="text" className='fw-bold w-100' />
                                    </div>
                                </div>
                                <div className='row gx-0 border-bottom border-2 border-dark'>
                                    <div className='col-2 p-1 border-end border-2 border-dark'>
                                        KOORDINAT
                                    </div>
                                    <div className='col-4 border-end border-2 border-dark p-1'>
                                        <input type="text" className='fw-bold w-100' />
                                    </div>
                                    <div className='col-2 p-1 border-end border-2 border-dark'>
                                        MASA
                                    </div>
                                    <div className='col-4 p-1'>
                                        <input type="text" className='fw-bold w-100' />
                                    </div>
                                </div>
                                <div className='row gx-0'>
                                    <div className='col-2 p-1 border-end border-2 border-dark'>
                                        PERALATAN
                                    </div>
                                    <div className='col-4 p-1 border-end border-2 border-dark'>
                                        <input type="text" className='fw-bold w-100' />
                                    </div>
                                    <div className='col-2 p-1 border-end border-2 border-dark'>
                                        VOLTAN
                                    </div>
                                    <div className='col-4 p-1'>
                                        <input type="text" className='fw-bold w-100' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <div className='row gx-0 border border-2 border-dark'>
                            <div className='col-6 fw-bold text-center border-end border-2 border-dark'>
                                GAMBAR TERMAL/VISUAL
                            </div>
                            <div className='col-6 fw-bold text-center border-start border-2 border-dark'>
                                GAMBAR TERMAL/VISUAL
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <div className='row gx-0 border border-2 border-dark pics-row'>
                            <div className='col-6 border-end border-2 border-dark' ref={ref}>
                                <div className={imageSelected ? 'pics' : 'pics p-2'}>
                                    <div className={!imageSelected ? "d-none" : "btn-remove"}>
                                        <button onClick={(e) => {
                                            setSelectedImage(undefined)
                                            setImageSelected(!imageSelected)
                                        }}
                                            className='btn btn-primary'>Remove</button>
                                    </div>
                                    {selectedImage && (
                                        <div>
                                            <img alt="not found" width={imageSize.width} height={imageSize.height} src={URL.createObjectURL(selectedImage)} />
                                        </div>
                                    )}
                                    <div className={imageSelected ? "d-none" : 'd-flex justify-content-center align-items-center w-100 h-100 input-file-style p-2'}>
                                        <input
                                            type="file"
                                            name="myImage"
                                            onChange={(event) => {
                                                event.target.files = null
                                                console.log(event.target.files[0]);
                                                setSelectedImage(event.target.files[0]);
                                                setImageSelected(!imageSelected)
                                            }}
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='col-6 border-start border-2 border-dark'>
                                <div className={imageSelected1 ? 'pics' : 'pics p-2'}>
                                    <div className={!imageSelected1 ? "d-none" : "btn-remove"}>
                                        <button onClick={(e) => {
                                            setSelectedImage1(undefined)
                                            setImageSelected1(!imageSelected1)
                                        }}
                                            className='btn btn-primary'>Remove</button>
                                    </div>
                                    {selectedImage1 && (
                                        <div>
                                            <img alt="not found" width={imageSize.width} height={imageSize.height} src={URL.createObjectURL(selectedImage1)} />
                                        </div>
                                    )}
                                    <div className={imageSelected1 ? "d-none" : 'd-flex justify-content-center align-items-center w-100 h-100 input-file-style p-2'}>
                                        <input
                                            type="file"
                                            name="myImage"
                                            onChange={(event) => {
                                                event.target.files = null
                                                console.log(event.target.files[0]);
                                                setSelectedImage1(event.target.files[0]);
                                                setImageSelected1(!imageSelected1)
                                            }}
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='row gx-0 border border-2 border-dark'>
                            <div className='col-6 fw-bold text-center border-end border-2 border-dark'>
                                GAMBAR TERMAL/VISUAL
                            </div>
                            <div className='col-6 fw-bold text-center border-start border-2 border-dark'>
                                GAMBAR TERMAL/VISUAL
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <div className='row gx-0 border border-2 border-dark pics-row'>
                            <div className='col-6 border-end border-2 border-dark' ref={ref}>
                                <div className={imageSelected2 ? 'pics' : 'pics p-2'}>
                                    <div className={!imageSelected2 ? "d-none" : "btn-remove"}>
                                        <button onClick={(e) => {
                                            setSelectedImage2(undefined)
                                            setImageSelected2(!imageSelected2)
                                        }}
                                            className='btn btn-primary'>Remove</button>
                                    </div>
                                    {selectedImage2 && (
                                        <div>
                                            <img alt="not found" width={imageSize.width} height={imageSize.height} src={URL.createObjectURL(selectedImage2)} />
                                        </div>
                                    )}
                                    <div className={imageSelected2 ? "d-none" : 'd-flex justify-content-center align-items-center w-100 h-100 input-file-style p-2'}>
                                        <input
                                            type="file"
                                            name="myImage"
                                            onChange={(event) => {
                                                event.target.files = null
                                                console.log(event.target.files[0]);
                                                setSelectedImage2(event.target.files[0]);
                                                setImageSelected2(!imageSelected2)
                                            }}
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='col-6 border-start border-2 border-dark'>
                                <div className={imageSelected3 ? 'pics' : 'pics p-2'}>
                                    <div className={!imageSelected3 ? "d-none" : "btn-remove"}>
                                        <button onClick={(e) => {
                                            setSelectedImage3(undefined)
                                            setImageSelected3(!imageSelected3)
                                        }}
                                            className='btn btn-primary'>Remove</button>
                                    </div>
                                    {selectedImage3 && (
                                        <div>
                                            <img alt="not found" width={imageSize.width} height={imageSize.height} src={URL.createObjectURL(selectedImage3)} />
                                        </div>
                                    )}
                                    <div className={imageSelected3 ? "d-none" : 'd-flex justify-content-center align-items-center w-100 h-100 input-file-style p-2'}>
                                        <input
                                            type="file"
                                            name="myImage"
                                            onChange={(event) => {
                                                event.target.files = null
                                                console.log(event.target.files[0]);
                                                setSelectedImage3(event.target.files[0]);
                                                setImageSelected3(!imageSelected3)
                                            }}
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-3 border border-2 border-dark'>
                        <div className='row gx-0 bg-secondary text-center text-light'>
                            <div className='col-2 border-end border-2 border-dark'>
                                PARAMETER
                            </div>
                            <div className='col-2 border-end border-2 border-dark'>
                                NILAI
                            </div>
                            <div className='col-2 border-end border-2 border-dark'>
                                PARAMETER
                            </div>
                            <div className='col-2 border-end border-2 border-dark'>
                                NILAI
                            </div>
                            <div className='col-2 border-end border-2 border-dark'>
                                PARAMETER
                            </div>
                            <div className='col-2'>
                                NILAI
                            </div>
                        </div>
                        <div className='row gx-0 text-center border-bottom border-2 border-dark'>
                            <div className='col-2 border-end border-2 border-dark p-1'>
                                TITIK SUHU 1 (C)
                            </div>
                            <div className='col-2 border-end border-2 border-dark p-1'>
                                <input type="text" className='w-100' />
                            </div>
                            <div className='col-2 border-end border-2 border-dark p-1'>
                                DELTA T
                            </div>
                            <div className='col-2 border-end border-2 border-dark p-1'>
                                <input type="text" className='w-100' />
                            </div>
                            <div className='col-2 border-end border-2 border-dark p-1'>
                                BEBAN
                            </div>
                            <div className='col-2 p-1'>
                                <input type="text" className='w-100' />
                            </div>
                        </div>
                        <div className='row gx-0 text-center border-bottom border-2 border-dark'>
                            <div className='col-2 border-end border-2 border-dark p-1'>
                                TITIK SUHU 2 (C)
                            </div>
                            <div className='col-2 border-end border-2 border-dark p-1'>
                                <input type="text" className='w-100' />
                            </div>
                            <div className='col-2 border-end border-2 border-dark p-1'>
                                AMBIEN
                            </div>
                            <div className='col-2 border-end border-2 border-dark p-1'>
                                <input type="text" className='w-100' />
                            </div>
                            <div className='col-2 border-end border-2 border-dark p-1'>
                                FASA
                            </div>
                            <div className='col-2 p-1'>
                                <input type="text" className='w-100' />
                            </div>
                        </div>
                        <div className='row gx-0 text-center'>
                            <div className='col-2 border-end border-2 border-dark p-1'>
                                TITIK SUHU 3 (C)
                            </div>
                            <div className='col-2 border-end border-2 border-dark p-1'>
                                <input type="text" className='w-100' />
                            </div>
                            <div className='col-2 border-end border-2 border-dark p-1'>
                                KELEMBAPAN
                            </div>
                            <div className='col-2 border-end border-2 border-dark p-1'>
                                <input type="text" className='w-100' />
                            </div>
                            <div className='col-2 border-end border-2 border-dark'>
                                EMISIVITI
                            </div>
                            <div className='col-2 p-1'>
                                <input type="text" className='w-100' />
                            </div>
                        </div>
                    </div>
                    <div className='mt-3 border border-2 border-dark'>
                        <div className='text-center bg-warning text-light border-bottom border-2 border-dark'>
                            ANALISA DAN CADANGAN
                        </div>
                        <div>
                            <textarea className="w-100" rows="8"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReportTemplate2