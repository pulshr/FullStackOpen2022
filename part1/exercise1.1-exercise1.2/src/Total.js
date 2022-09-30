const Total = (props) => {
    let sum = 0;
    for(let i=0;i<props.parts.length;i++) {
        sum+=props.parts[i].exercises;
    }
    return (
        <p>Number of total exercises: {sum}</p>
    )
}

export default Total