import React, { useState, useRef, useLayoutEffect,useEffect } from 'react'

function ReportTemplate1(props) {
    const ref = useRef(null)

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
    const [formPDF, setFormPDF] = useState({
        test1: '',
        test2: '',
        test3: '',
        test4: '',
        test5: '',
        test6: '',
        test7: '',
    })

    const onChange = (e) => {
        setFormPDF({...formPDF, [e.target.name]: e.target.value})
    }    

    useLayoutEffect(() => {
        setImageSize({ width: ref.current.offsetWidth, height: ref.current.offsetHeight });
    }, []);

    return (
        <>

            <div className='bg-white shadow p-5 bg-body-tertiary rounded bg-white' ref={props.reportTemplateRef}>
                <div className='row py-2'>
                    <div className='col-2 border'>
                        Logo
                    </div>
                    <div className='col-10 border'>
                        <div className='row bg-white'>
                            <div className='col-3'>
                                test
                            </div>
                            <div className='col-9 border-start'>
                                <input type="text" className='w-100 bg-white' placeholder='Test' name='test1' value={formPDF.test1} onChange={e => onChange(e)}/>
                            </div>
                        </div>
                        <div className='row bg-white'>
                            <div className='col-2 border-top'>
                                test
                            </div>
                            <div className='col-4 border-start border-top'>
                                <input type="text" className='w-100 bg-white w-100' placeholder='Test' name='test2' value={formPDF.test2} onChange={e => onChange(e)}/>
                            </div>
                            <div className='col-2 border-start border-top'>
                                test
                            </div>
                            <div className='col-4 border-start border-top '>
                                <input type="text" className='w-100 bg-white' placeholder='Test' name='test3' value={formPDF.test3} onChange={e => onChange(e)}/>
                            </div>
                        </div>
                        <div className='row bg-white'>
                            <div className='col-2 border-top'>
                                test
                            </div>
                            <div className='col-4 border-start border-top'>
                                <input type="text" className='w-100 bg-white w-100' placeholder='Test' name='test4' value={formPDF.test4} onChange={e => onChange(e)}/>
                            </div>
                            <div className='col-2 border-start border-top'>
                                test
                            </div>
                            <div className='col-4 border-start border-top '>
                                <input type="text" className='w-100 bg-white' placeholder='Test' name='test5' value={formPDF.test5} onChange={e => onChange(e)}/>
                            </div>
                        </div>
                        <div className='row bg-white'>
                            <div className='col-2 border-top'>
                                test
                            </div>
                            <div className='col-4 border-start border-top'>
                                <input type="text" className='w-100 bg-white w-100' placeholder='Test' name='test6' value={formPDF.test6} onChange={e => onChange(e)}/>
                            </div>
                            <div className='col-2 border-start border-top'>
                                test
                            </div>
                            <div className='col-4 border-start border-top '>
                                <input type="text" className='w-100 bg-white' placeholder='Test' name='test7' value={formPDF.test7} onChange={e => onChange(e)}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row pics-row'>
                    <div className="col-6 border p-0" >
                        <div className={imageSelected ? 'pics': 'pics p-2'}>
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
                    <div className="col-6 border p-0" >
                        <div className={imageSelected1 ? 'pics': 'pics p-2'} ref={ref}>
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
                <div className='row pics-row'>
                    <div className="col-6 border p-0" >
                        <div className={imageSelected2 ? 'pics': 'pics p-2'}>
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
                    <div className="col-6 border p-0" >
                        <div className={imageSelected3 ? 'pics': 'pics p-2'}>
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
                <div className='pt-2'>
                    <div className='row bg-white border-top border-end'>
                        <div className='col-2 border-start border-bottom'>
                            Test
                        </div>
                        <div className='col-2 border-start border-bottom'>
                            Test
                        </div>
                        <div className='col-2 border-start border-bottom'>
                            Test
                        </div>
                        <div className='col-2 border-start border-bottom'>
                            Test
                        </div>
                        <div className='col-2 border-start border-bottom'>
                            Test
                        </div>
                        <div className='col-2 border-start border-bottom'>
                            Test
                        </div>
                    </div>
                    <div className='row bg-white border-end'>
                        <div className='col-2 border-start border-bottom'>
                            Test
                        </div>
                        <div className='col-2 border-start border-bottom'>
                            Test
                        </div>
                        <div className='col-2 border-start border-bottom'>
                            Test
                        </div>
                        <div className='col-2 border-start border-bottom'>
                            Test
                        </div>
                        <div className='col-2 border-start border-bottom'>
                            Test
                        </div>
                        <div className='col-2 border-start border-bottom'>
                            Test
                        </div>
                    </div>
                    <div className='row bg-white border-end'>
                        <div className='col-2 border-start border-bottom'>
                            Test
                        </div>
                        <div className='col-2 border-start border-bottom'>
                            Test
                        </div>
                        <div className='col-2 border-start border-bottom'>
                            Test
                        </div>
                        <div className='col-2 border-start border-bottom'>
                            Test
                        </div>
                        <div className='col-2 border-start border-bottom'>
                            Test
                        </div>
                        <div className='col-2 border-start border-bottom'>
                            Test
                        </div>
                    </div>
                    <div className='row bg-white border-end'>
                        <div className='col-2 border-start border-bottom'>
                            Test
                        </div>
                        <div className='col-2 border-start border-bottom'>
                            Test
                        </div>
                        <div className='col-2 border-start border-bottom'>
                            Test
                        </div>
                        <div className='col-2 border-start border-bottom'>
                            Test
                        </div>
                        <div className='col-2 border-start border-bottom'>
                            Test
                        </div>
                        <div className='col-2 border-start border-bottom'>
                            Test
                        </div>
                    </div>
                </div>
                <div className='py-2 row'>
                    <div className='p-1 border'>
                        Test
                    </div>
                    <div className='p-1 border'>
                        Test
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReportTemplate1