import React, { useContext } from 'react'
import SinglePerson from './SinglePerson'
import { PersonContext } from '../context/context'
// List component
const List = () => {
  const { people } = useContext(PersonContext)

  return (
    <ul>
      {people.map((person) => (
        <SinglePerson
          //   deletePerson={deletePerson}
          key={person.id}
          person={person}
        />
      ))}
    </ul>
  )
}

export default List
