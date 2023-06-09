import { useState } from 'react';
import data from './data.js'
const App = () => {
  const [people , setPeople ] = useState(data)
  console.log(people)
  return (
    <>
      <h2>Birthday Reminder - Starter</h2>
      {people.map((person)=>{
        const {id, name, age, image} = person
        return (
          <div key={id} style={{ padding: '1rem', border: '0.5rem solid red' }}>
            <h4 style={{ padding: '0.5rem' }}>Name: {name}</h4>
            <h4 style={{ padding: '0.5rem' }}>Age: {age}</h4>
            <h4 style={{ padding: '0.5rem' }}>URL: {image}</h4>
          </div>
        )
      })}

    </>
  )
};
export default App;
