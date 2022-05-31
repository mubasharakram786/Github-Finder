import React from 'react'
import Users from '../components/users/Users'

function Home() {
  return (
    <div>
        <h1 className="text-6xl px-2 py-4">
        Welcome
        </h1>
        <Users/>
    </div>
  )
}

export default Home