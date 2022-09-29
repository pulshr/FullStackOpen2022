const Hello = (props) => (
  <div>
    <p>Hello {props.name}, you are {props.age} years old.</p>
  </div>
)

const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="George" age="25"/>
      <Hello name="Daisy" age="23"/>
    </div>
  )
}

export default App;
