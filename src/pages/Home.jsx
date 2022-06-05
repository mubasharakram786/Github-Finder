import React from 'react'
import Users from '../components/users/Users'
import UserSearch from '../components/users/UserSearch'

function Home() {
  return (
    <div >
      <UserSearch/>
        <Users/>
    </div>
  )
}

export default Home