import React, { useState, useEffect, useRef, useLayoutEffect } from 'react'
import { ReactPictureAnnotation } from 'react-picture-annotation';
import blank from '../images/blank.jpg'
import imageCompression from 'browser-image-compression';
import html2canvas from 'html2canvas';

function Home() {
    const ref = useRef(null)
    const [pageSize, setPageSize] = useState({
        width:0,
        height: 0
    });
    const [compressedFile, setCompressedFile] = useState(undefined)
    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)
    const [annotateData, setAnnotateData] = useState([])

    useLayoutEffect(() => {
        setWidth(ref.current.clientWidth);
        setHeight(ref.current.clientHeight);
    }, []);

    const onResize = () => {
        setPageSize({ width: width, height: height });
    };

    const defaultShapeStyle = {
        /** text area **/
        padding: 5, // text padding
        fontSize: 12, // text font size
        fontColor: "#000000", // text font color
        fontBackground: "#FF0000", // text background color
        fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', Helvetica, Arial, sans-serif",

        /** stroke style **/
        lineWidth: 2, // stroke width
        shapeBackground: "hsla(210, 16%, 93%, 0.2)", // background color in the middle of the marker
        shapeStrokeStyle: "#FF0000", // shape stroke color
        shadowBlur: 10, // stroke shadow blur
        shapeShadowStyle: "hsla(210, 9%, 31%, 0.35)", // shape shadow color

        /** transformer style **/
        transformerBackground: "#5c7cfa",
        transformerSize: 10
    };

    useEffect(() => {
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    const handleImageCompression = async (e) => {
        const image = e.target.files[0]
        // console.log('originalFile instanceof Blob', image instanceof Blob); // true
        // console.log(`originalFile size ${image.size / 1024 / 1024} MB`);

        const options = {
            maxSizeMB: 1,
            maxWidthOrHeight: 1920,
            useWebWorker: true
        }

        try {
            const compressedFile = await imageCompression(image, options);
            console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
            console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`); // smaller than maxSizeMB
            setCompressedFile(compressedFile); // write your own logic
        } catch (error) {
            console.log(error);
        }
    }

    const onSelect = selectedId => {
        console.log(selectedId);
    }

    const onChange = data => {
        console.log(data)
    }

    const downloadImage = (blob, fileName) => {
        const fakeLink = window.document.createElement("a");
        fakeLink.style = "display:none;";
        fakeLink.download = fileName;

        fakeLink.href = blob;

        document.body.appendChild(fakeLink);
        fakeLink.click();
        document.body.removeChild(fakeLink);

        fakeLink.remove();
    };

    const onClick = async (el, imageFileName) => {
        const canvas = await html2canvas(el)
        const image = canvas.toDataURL("image/png", 1.0);
        downloadImage(image, imageFileName);
    }

    return (
        <div className='w-100 px-5'>
            <div className='p-3'>
                <div className='d-flex justify-content-evenly align-items-center w-50'>
                    <div>
                        <button className='btn btn-primary' onClick={() => onClick(ref.current, "test")}>Download</button>
                    </div>
                    <div>
                        <input type="file" id='file' name="myImage" onChange={e => handleImageCompression(e)} className='form-control' />
                    </div>
                </div>
                <div className='mt-4 w-100 bg-secondary p-5 ann-image' ref={ref}>
                    {
                        compressedFile === undefined ? (
                            <div className="ann-image-no" id="ann-img">

                            </div>
                        ) : (

                            <ReactPictureAnnotation
                                image={URL.createObjectURL(compressedFile)}
                                onSelect={onSelect}
                                onChange={onChange}
                                width={pageSize.width}
                                height={pageSize.height}
                                annotationStyle={defaultShapeStyle}
                            />
                        )
                    }
                </div>
            </div>
        </div >
    )
}

export default Home