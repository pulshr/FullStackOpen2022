import Header from './Header';
import Content from './Content';
import Total from './Total';

const Course = (props) => {
    return (
      <div>
        <Header id={props.id} text={props.name}/>
        <Content id={props.id} parts={props.parts}/>
        <Total id={props.id} parts={props.parts}/>
      </div>
    )
}

export default Course;  