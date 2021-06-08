import React, { useState, createContext } from 'react'
import { data } from '../data'

const PersonContext = createContext()

const PersonProvider = ({ children }) => {
  const [people, setPeople] = useState(data)

  // detele person from data/people list
  const deletePerson = (id) => {
    const newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
  }

  const values = {
    people,
    deletePerson,
  }

  return (
    <PersonContext.Provider value={values}>{children}</PersonContext.Provider>
  )
}

export { PersonContext, PersonProvider }
