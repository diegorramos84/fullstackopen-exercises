const App = () => {
    const course = "Half Stack application development"
    const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  return (
    <div>
      <Header course={course} />
      <p>Content:</p>
      <Content parts={parts}/>
      <Total parts={parts} />
    </div>
  )
}

  const Header = ({course}) => {
    return (
      <div>
        <h1>Course: {course}</h1>
      </div>
    )
  }

  const Content = ({parts}) => {
    return (
      <div>
        <Part part ={parts[0].name} /> <Exercise exercise={parts[0].exercises} />
        <Part part ={parts[1].name} /> <Exercise exercise={parts[1].exercises}  />
        <Part part ={parts[2].name} /> <Exercise exercise={parts[2].exercises}  />
      </div>
    )
  }

  const Part = ({part}) => {
    return (
    <div>
      <p>{part}</p>
    </div>
    )
  }

  const Exercise = ({exercise}) => {
    return(
      <div>
        <p>{exercise}</p>
      </div>
    )
  }

  const Total = ({parts}) => {
    return (
      <>
      <p>Total of exercises: {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
      </>
    )
  }



export default App;
