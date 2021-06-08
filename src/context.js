import React, { useState, useEffect, createContext } from 'react'

const API_URL = 'https://jsonplaceholder.typicode.com/users'

export const UsersContext = createContext()

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  // fetch users from users api
  const getUsersFromAPI = () => {
    setLoading(true)
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data)
        setLoading(false)
      })
  }
  // delete user from users array
  const removeUser = (id) => {
    const newUsersList = users.filter((user) => user.id !== id)
    setUsers(newUsersList)
  }
  // clear All users
  const clearAllUsers = () => {
    setUsers([])
  }
  useEffect(() => {
    getUsersFromAPI()
  }, [])

  const values = {
    removeUser,
    users,
    loading,
    clearAllUsers,
    getUsersFromAPI,
  }

  return <UsersContext.Provider value={values} children={children} />
}
