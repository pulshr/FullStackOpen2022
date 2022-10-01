import {useState} from 'react';

import Heading from './Heading';
import Button from './Button';

const anecdotes = [
  {
    text:"If it hurts, do it more often.",
    votes:0
  },
  {
    text:"Adding manpower to a late software project makes it later!",
    votes:0
  },
  {
    text:"The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    votes:0
  },
  {
    text:"Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    votes:0
  },
  {
    text:"Premature optimization is the root of all evil.",
    votes:0
  },
  {
    text:"Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    votes:0
  },
  {
    text:"Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    votes:0
  }
]
const VoteStatus = (props) => {
  if(props.anecdoteInd===0) {
    return (
      <p></p>
    )
  } else {
    return (
      <p>has {props.anecdotes[props.anecdoteInd].votes} votes.</p>
    )
  }
}
const MostVotesStatus = (props) => {
  if(props.anecdotes[props.mostVotedAnecdote].votes===0) {
    return (
      <p></p>
    )
  } else {
    return (
      <div>
        <p>{props.anecdotes[props.mostVotedAnecdote].text}</p>
        <p>has {props.anecdotes[props.mostVotedAnecdote].votes} votes</p>
      </div>
    )
  }
}

const App = () => {
  
  //Anecdote Heading
  const [anecdoteInd,setAnecdoteInd] = useState(0);
  const [anecdote,setAnecdote] = useState([]);
  const changeAnecdote = () => {
    let ind = Math.floor(Math.random()*anecdotes.length)
    setAnecdoteInd(ind);
    setAnecdote(anecdotes[ind].text);
  }

  //Anecdote Votes
  const [anecdoteVotes, setAnecdoteVote] = useState([]);
  const changeAnecdoteVote = () => {
    setAnecdoteVote(anecdotes[anecdoteInd].votes++);
    changeMostVotedAnecdote();
  }

  //Most Voted Anecdote
  const[mostVotedAnecdote,setMostVotedAnecdote] = useState(0);
  const changeMostVotedAnecdote = () => {
    let maxVotes = 0;
    let maxVoteInd = 0;
    for(let idx=0;idx<anecdotes.length;idx++) {
      if(anecdotes[idx].votes>maxVotes) {
        maxVotes = anecdotes[idx].votes;
        maxVoteInd = idx;
      }
    }
    setMostVotedAnecdote(maxVoteInd);
  }

  return (
    <div>
      <Heading text="Anecdote of the day"/>
      <Heading text={anecdote}/>
      <VoteStatus anecdotes={anecdotes} anecdoteInd={anecdoteInd}/>
      <Button text="vote" onClick={changeAnecdoteVote}/>
      <Button text="next anecdote" onClick={changeAnecdote}/>
      <Heading text="Anecdote with most votes"/>
      <MostVotesStatus anecdotes={anecdotes} mostVotedAnecdote={mostVotedAnecdote}/>
    </div>
  );
}

export default App;
