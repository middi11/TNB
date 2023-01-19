import React, { useState, useEffect, useRef } from 'react'
import Draggable, { DraggableCore } from 'react-draggable';
import dragResize from 'react-drag-resize/lib/drag-resize';

function RectangleAnnotation({ onCreate, boundingBox, annotateState }) {
    // const [rect, setRect] = useState({ x: 0, y: 0, width: 0, height: 0 });
    // const [createRect, setCreateRect] = useState({ x: 0, y: 0, width: 0, height: 0 })
    // const [isDrawing, setIsDrawing] = useState(false)
    // const [mousePos, setMousePos] = useState({ x1: 0, x2: 0, y1: 0, y2: 0 })
    // const ref = useRef()

    // const handleMouseDown = (e) => {
    //     setIsDrawing(true)
    //     const { clientX, clientY } = e;
    //     setMousePos({ ...mousePos, x1: clientX, y1: clientY })
    //     setMousePos({ ...mousePos, x1: clientX, y1: clientY })
    // };

    // const handleMouseMove = (e) => {
    //     const { clientX, clientY } = e;
    //     // const width = clientX - rect.x;
    //     // const height = clientY - rect.y;
    //     // setRect({ x: Math.min(mousePos, ), width: width, height: height });
    //     setMousePos({ ...mousePos, x2: clientX, y2: clientY })
    //     // setRect({ x: Math.min(mousePos.x1, mousePos.x2 ), y: Math.min(mousePos.y1, mousePos.y2), width: Math.abs(mousePos.x2 - mousePos.x1), height: Math.abs(mousePos.y2 - mousePos.y1) });
    // };

    // const handleMouseUp = () => {
    //     // setCreateRect({ x: rect.x, y: rect.y, width: rect.width, height: rect.height })
    //     setCreateRect({ x: Math.min(mousePos.x1, mousePos.x2), y: Math.min(mousePos.y1, mousePos.y2), width: Math.abs(mousePos.x2 - mousePos.x1), height: Math.abs(mousePos.y2 - mousePos.y1) })
    //     setIsDrawing(false)
    // };

    // console.log(rect)

    const [boundRect, setBoundRect] = useState(null)
    const [rectangle, setRectangle] = useState({
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0,
        display: "none"
    });

    // const [getRect, setGetRect] = useState()

    useEffect(() => {
        setBoundRect(boundingBox)
    }, [annotateState])


    function handleMouseDown(event) {
        // setRectangle({
        //     x1: event.clientX,
        //     y1: event.clientY,
        //     x2: event.clientX,
        //     y2: event.clientY,
        //     display: "block"
        // });
        console.log('anjing')

        setRectangle({
            x1: event.clientX - boundRect.getBoundingClientRect().x,
            y1: event.clientY - boundRect.getBoundingClientRect().y,
            x2: event.clientX - boundRect.getBoundingClientRect().x,
            y2: event.clientY - boundRect.getBoundingClientRect().y,
            display: "block"
        });
    }

    function handleMouseMove(event) {
        if (rectangle.display === "block") {
            setRectangle({
                x1: rectangle.x1,
                y1: rectangle.y1,
                x2: event.clientX - boundRect.getBoundingClientRect().x,
                y2: event.clientY - boundRect.getBoundingClientRect().y,
                display: "block"
            })
        }
    }

    function handleMouseUp() {
        onCreate({
            x1: rectangle.x1,
            y1: rectangle.y1,
            x2: rectangle.x2,
            y2: rectangle.y2,
            display: "block"
        });
        setRectangle({
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 0,
            display: "none"
        });
    }

    console.log(rectangle)

    return (
        // <>
        //     <div
        //         onMouseDown={handleMouseDown}
        //         onMouseMove={handleMouseMove}
        //         onMouseUp={handleMouseUp}
        //         ref={ref}
        //         style={{
        //             position: 'absolute',
        //             width: '100%',
        //             height: '500px',
        //             border: '1px solid black'
        //         }}
        //     >
        //         {isDrawing && mousePos.x1 != 0 && mousePos.y1 != 0 ? (
        //             <div
        //                 style={{
        //                     position: 'absolute',
        //                     left: Math.min(mousePos.x1, mousePos.x2),
        //                     top: Math.min(mousePos.y1, mousePos.y2),
        //                     width: Math.abs(mousePos.x2 - mousePos.x1),
        //                     height: Math.abs(mousePos.y2 - mousePos.y1),
        //                     backgroundColor: 'red',
        //                 }}
        //             />
        //         ) : !isDrawing && mousePos.x1 != 0 && mousePos.y1 != 0 ? (
        //             <div
        //                 style={{
        //                     position: 'absolute',
        //                     left: createRect.x,
        //                     top: createRect.y,
        //                     width: createRect.width,
        //                     height: createRect.height,
        //                     backgroundColor: 'red',
        //                 }}
        //             />
        //         ) : null
        //         }
        //     </div>
        // </>
        <>
            {
                annotateState ? (
                    <div
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        style={{
                            width: '100%',
                            height: '100%',
                        }}
                    >
                        <div
                            style={{
                                position: "absolute",
                                top: Math.min(rectangle.y1, rectangle.y2),
                                left: Math.min(rectangle.x1, rectangle.x2),
                                width: Math.abs(rectangle.x1 - rectangle.x2),
                                height: Math.abs(rectangle.y1 - rectangle.y2),
                                display: rectangle.display,
                                border: '1px solid black'
                            }}
                        ></div>
                    </div>
                ) : null
            }

        </>
    )
}

export default RectangleAnnotation