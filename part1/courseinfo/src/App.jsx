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
    <>
      <Header course={course.name}/>
      <Content data={course.parts} />
      <Total data={course.parts} />
    </>
  )
}

const Header = (course) => {
  return (
    <h1>{course.course}</h1>
  )
}

const Content = (data) => {
  const list = data.data
  return(
  <>
    <Part data={list[0]}></Part>
    <Part data={list[1]}></Part>
    <Part data={list[2]}></Part>
  </>
)
}

const Part = (props) => {
  return (
    <p> {props.data.name} {props.data.exercises}</p>
  )
}


const Total = (data) => {
  let total = 0
  for (const item of data.data) {
    total += item.exercises
  }

  return (
    <p>Number of exercises {total}</p>
  )

}

export default App