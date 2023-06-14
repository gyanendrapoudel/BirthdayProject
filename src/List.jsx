import Person from "./Person"
const List = ({people}) => {
  return (
    <section>
      {people.map((person) => {
        // const { id, name, age, image } = person
        return (
            <Person key={person.id} {...person}/>
         
        )
      })}
    </section>
  )
}
export default List