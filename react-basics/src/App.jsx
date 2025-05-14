import { useState } from "react";
const App = () => {
  const [count,setCount] = useState("chandu")
  const increment = () =>setCount(count + 1)
  const decrement = () =>setCount(count - 1)
  const [friends,setFriends] = useState('hina','tina')

  const addOneFrnd = () =>  setFriends ([...friends,"chandu"])

  const removeFriend = () => setFriends(friends.filter((f) => f === "hina"))

  const updateOneFriend = () => {
    setFriends(friends.map((f) => (f==="hina" ? "hina vina" : f)))
  }

  return (
    <div>
      <h1>{count}</h1>
      {/* changing the state of cont */}
      {/* anytime we  change the value of our state by using any set method it will re render whole components rerender*/}
      <button onClick={increment}></button>
      <button onClick={decrement}></button>

      {friends.map((f) => (
          <li key = {Math.random()}>{f}</li>
        ))}

      <button onClick={addOneFrnd}>Add new friend</button>

      <button onClick={removeFriend}>remove one friend</button>

      <button onClick={updateOneFriend}>update one friend</button>

    </div>
  );
};

export default App;