import React, { useState, useEffect, useRef } from 'react'
import Draggable, { DraggableCore } from 'react-draggable';
import dragResize from 'react-drag-resize/lib/drag-resize';

function RectangleAnnotation(props) {
    // const [rect, setRect] = useState({ x: 0, y: 0, width: 0, height: 0 });
    const [createRect, setCreateRect] = useState({ x: 0, y: 0, width: 0, height: 0 })
    const [isDrawing, setIsDrawing] = useState(false)
    const [mousePos, setMousePos] = useState({ x1: 0, x2: 0, y1: 0, y2: 0 })

    const handleMouseDown = (e) => {
        setIsDrawing(true)
        const { clientX, clientY } = e;
        setMousePos({ ...mousePos, x1: clientX, y1: clientY })
    };

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        // const width = clientX - rect.x;
        // const height = clientY - rect.y;
        // setRect({ x: Math.min(mousePos, ), width: width, height: height });
        setMousePos({ ...mousePos, x2: clientX, y2: clientY })
        // setRect({ x: Math.min(mousePos.x1, mousePos.x2 ), y: Math.min(mousePos.y1, mousePos.y2), width: Math.abs(mousePos.x2 - mousePos.x1), height: Math.abs(mousePos.y2 - mousePos.y1) });
    };

    const handleMouseUp = () => {
        // setCreateRect({ x: rect.x, y: rect.y, width: rect.width, height: rect.height })
        setCreateRect({ x: Math.min(mousePos.x1, mousePos.x2), y: Math.min(mousePos.y1, mousePos.y2), width: Math.abs(mousePos.x2 - mousePos.x1), height: Math.abs(mousePos.y2 - mousePos.y1) })
        setIsDrawing(false)
    };

    // console.log(rect)

    return (
        <>
            <div
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '500px'
                }}
            >
                {isDrawing && mousePos.x1 != 0 && mousePos.y1 != 0 ? (
                    <div
                        style={{
                            position: 'absolute',
                            left: Math.min(mousePos.x1, mousePos.x2),
                            top: Math.min(mousePos.y1, mousePos.y2),
                            width: Math.abs(mousePos.x2 - mousePos.x1),
                            height: Math.abs(mousePos.y2 - mousePos.y1),
                            backgroundColor: 'red',
                        }}
                    />
                ) : !isDrawing && mousePos.x1 != 0 && mousePos.y1 != 0 ? (
                    <div
                        style={{
                            position: 'relative',
                            left: createRect.x,
                            top: createRect.y,
                            width: createRect.width,
                            height: createRect.height,
                            backgroundColor: 'red',
                        }}
                    />
                ) : null
                }
            </div>
        </>

    )
}

export default RectangleAnnotation