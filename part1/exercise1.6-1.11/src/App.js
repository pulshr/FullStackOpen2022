import {useState} from 'react'

import Header from "./Header";
import Button from './Button';
import Statistic from './Statistic';

const heading1 = "Give Feedback";
const heading2 = "Statistics";
const percent = " %";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const handleGoodClick = () => {
    setGood(good+1);
    setAll(all+1);
  }
  const handleNeutralClick = () => {
    setNeutral(neutral+1);
    setAll(all+1);
  }
  const handleBadClick = () => {
    setBad(bad+1);
    setAll(all+1);
  }

  return (
    <div>
      <Header name={heading1}/>
      <Button text="good" onClick={handleGoodClick}/>
      <Button text="neutral" onClick={handleNeutralClick}/>
      <Button text="bad" onClick={handleBadClick} />
      <Header text={heading2}/>
      <Statistic text="good" count={good}/>
      <Statistic text="neutral" count={neutral}/>
      <Statistic text="bad" count={bad}/>
      <Statistic text="all" count={all}/>
      <Statistic text="average" count={(good-bad)/all}/>
      <Statistic text="positive" count={(good/all)+percent}/>
    </div>
  );
}

export default App;
