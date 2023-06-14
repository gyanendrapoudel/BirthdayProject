import { useState } from 'react';
import data from './data.js'
import List from './List.jsx';
const App = () => {
  const [count ,setCount] = useState(data.length);
  const [people , setPeople ] = useState(data)
  console.log(people)
  const handleClick = ()=>{
    setPeople([]);
    console.log(people.length)
    setCount(0);
  }
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays Today</h3>
        <List people={people} />

        <button className="btn btn-block" onClick={handleClick}>
          Clear all
        </button>
      </section>
    </main>
  )
};
export default App;
