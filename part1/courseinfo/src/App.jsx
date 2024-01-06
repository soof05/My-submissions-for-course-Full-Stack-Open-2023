const Header = (props) => {
  return (
    <div>
      <h1>{props.coursename}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.part[0].name} exercise={props.part[0].exercises}/>
      <Part part={props.part[1].name} exercise={props.part[1].exercises}/>
      <Part part={props.part[2].name} exercise={props.part[2].exercises}/>
    </div>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercise}
    </p>
  )
}

const Total = (props) => {
  const total = props.part[0].exercises + props.part[1].exercises + props.part[2].exercises;
  return (
    <p>
      Number of exercises {total}
    </p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <Header coursename={course.name}/>
      <Content part={course.parts}/>
      <Total part={course.parts}/>
    </div>
  )
}

export default App