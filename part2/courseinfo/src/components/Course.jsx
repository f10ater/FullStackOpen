import Part from './Part'

const Course = ({course}) => {
    const total = course.parts.reduce((sum, part) => sum + part.exercises, 0)

    return (
    <>
        <h2>{course.name}</h2>
        {course.parts.map( part => <Part part={part} />)}
        <strong>Total of {total} exercises</strong>
    </>)
}

export default Course