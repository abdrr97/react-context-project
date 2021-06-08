import React, { useContext } from 'react'
import { PersonContext } from '../context/context'

// SinglePerson component
const SinglePerson = ({ person: { id, name } }) => {
  const { deletePerson } = useContext(PersonContext)

  return (
    <li>
      {id} - {name}
      <button onClick={() => deletePerson(id)} className='btn btn-link'>
        delete user
      </button>
    </li>
  )
}

export default SinglePerson
