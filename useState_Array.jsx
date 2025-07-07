import {useState} from 'react'
import Friends from '../Friends';

const App = () => {
  const [friends, setFriends] = useState(["Sobhit", "himanshu", "Sumit"]);
  return (
    <div>
      <Friends friends = {friends} setFriends = {setFriends}/>
    </div>
  )
}

export default App
///



const Friends = (props) => {

  const add = () => {
    props.setFriends([...props.friends, "Ranveer"]);
  }
  const Delete = () => {
    props.setFriends(props.friends.filter((f)=>
      f !== "himanshu"
    ));
  }
  return (
    <div>
      {props.friends.map((f) => (
        <li key = {Math.random()}>{f}</li>
      ))}
      <button onClick={add}>Add Friend</button>
      <button onClick={Delete}>Delete Friend</button>
    </div>
  )
}

export default Friends