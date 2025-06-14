import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

function UserPage() {
  const userId = useParams().userId
  const [user, setUser] = useState();

  const getUser = () => {
    axios.get(`https://fakestoreapi.com/users/${userId}`).then(
      user => {
        setUser(user.data);
      }
    )
  }

  useEffect(() => {
    { getUser() }
  }, [])

  return (
    <div>
      <div className="mx-auto mt-10 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-blue-900 dark:border-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{user?.name.firstname} {user?.name.lastname}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">City : {user?.address.city}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Street : {user?.address.street}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">ZipCode : {user?.address.zipcode}</p>
      </div>
      <div className='flex w-3/4 m-4  text-blue-900 text-xl justify-center'>
        <Link to={'/users'}>Go Back</Link>
      </div>
    </div>
  )
}

export default UserPage
