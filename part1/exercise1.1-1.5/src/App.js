import Header from './Header';
import Parts from './Parts';
import Total from './Total';

const course = {
  courseName: "Half Stack Application Development",
  parts: [
    {
      name:"Fundamentals of React",
      exercises:10
    },
    {
      name:"Using props to pass data",
      exercises:7
    },
    {
      name:"State of the component",
      exercises:14
    }
  ]
}

const App = () => {
  return (
    <div>
      <Header courseName={course.courseName}/>
      <Parts parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}
export default App;
