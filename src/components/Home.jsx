import React, { useContext } from 'react'
import { UsersContext } from '../context'

const Home = () => {
  const { users, removeUser, loading, clearAllUsers, getUsersFromAPI } =
    useContext(UsersContext)

  return (
    <section>
      <h1 className='display-1'>Home</h1>

      {users.length === 0 && (
        <div className='text-center '>
          <button onClick={getUsersFromAPI} className='my-5 btn btn-success'>
            refresh
          </button>
        </div>
      )}

      {loading ? (
        <h1 className='text-center display-1'>Loading ...</h1>
      ) : (
        <ul className='list-group'>
          {users.map((user) => {
            return (
              <li
                className='list-group-item d-flex justify-content-between'
                key={user.id}
              >
                <div>
                  <strong>{user.id}</strong>
                </div>
                <div>{user.name}</div>
                <div>{user.email}</div>
                <div>
                  <button
                    onClick={() => removeUser(user.id)}
                    className='btn btn-sm btn-outline-danger'
                  >
                    remove
                  </button>
                </div>
              </li>
            )
          })}
        </ul>
      )}

      <div className='text-center '>
        <button onClick={clearAllUsers} className='btn btn-warning'>
          Clear All
        </button>
      </div>
    </section>
  )
}

export default Home
