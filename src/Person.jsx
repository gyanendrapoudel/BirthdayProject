const Person = ({...person}) => {
   const { id, name, age, image } = person

  return (
    <article className="person">
      <img src={image} alt={name} className="img" />

      <div>
        <h4>Name: {name}</h4>
        <p>Age: {age} years</p>
      </div>
    </article>
  )
}
export default Person