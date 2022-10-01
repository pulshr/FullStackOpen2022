const Total = (props) => (
    <p>total of {props.parts.map(part=>part.exercises).reduce((a,b)=>a+b,0)} exercises</p>
)
export default Total;