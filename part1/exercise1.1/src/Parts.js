const Parts = (props) => (
    <ul>
        {props.parts.map(item=>(
            <li key={item.name}>{item.name}: {item.exercises}</li>
        ))}
    </ul>
);

export default Parts;