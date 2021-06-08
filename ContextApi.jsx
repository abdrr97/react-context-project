import React, { createContext, useState, useContext } from 'react'
import { data } from './data'

const PersonContext = createContext()

const ContextAPI = () => {
  const [people, setPeople] = useState(data)
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id)
    })
  }

  const values = {
    people,
    removePerson,
  }
  return (
    <PersonContext.Provider value={values}>
      <h3>prop drilling</h3>
      <List />
    </PersonContext.Provider>
  )
}

const List = () => {
  const { people } = useContext(PersonContext)

  return (
    <>
      {people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
            // removePerson={removePerson}
          />
        )
      })}
    </>
  )
}

const SinglePerson = ({ id, name }) => {
  const { removePerson } = useContext(PersonContext)

  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  )
}

export default ContextAPI
