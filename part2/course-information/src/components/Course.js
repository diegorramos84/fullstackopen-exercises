import React from 'react'

const Course = ({courses}) => {
  return (
    <div>
      {courses.map(item =>
        <div>
          <h1 key={item.id}>{item.name}</h1>
            {item.parts.map(part =>
              <p>{part.name} {part.exercises}</p>
            )}
              <p><strong> total of {item.parts.reduce((total, item) => {
                return total + item.exercises
              },0)
              } exercises</strong></p>
        </div>
      )}
    </div>
  )
}
export default Course
