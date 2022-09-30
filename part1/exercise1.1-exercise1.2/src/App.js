import Header from './Header';
import Parts from './Parts';
import Total from './Total';

const course = "Half Stack Application Development"
const part1 = {
  name:"Fundamentals of React",
  exercises:10
}
const part2 = {
  name:"Using props to pass data",
  exercises:7
}
const part3 = {
  name:"State of the component",
  exercises:14
}
const parts = [part1,part2,part3];

const App = () => {
  return (
    <div>
      <Header courseName={course}/>
      <Parts parts={parts}/>
      <Total parts={parts}/>
    </div>
  )
}
export default App;
