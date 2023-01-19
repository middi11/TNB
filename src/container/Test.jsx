import React, {useState} from 'react'
import RectangleAnnotation from '../component/annotation/RectangleAnnotation'

function Test() {
  const [rectangles, setRectangles] = useState([]);

  function handleCreate(newRectangle) {
    setRectangles([...rectangles, newRectangle]);
  }
  return (
    <div style={{
      width: '100%',
      height: '500px',
      border: '1px solid black'
  }}>
      <RectangleAnnotation onCreate={handleCreate} />
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
  )
}

export default Test