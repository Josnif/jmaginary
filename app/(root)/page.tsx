import React from 'react'
import { UserButton } from "@clerk/nextjs";
import { User } from '@clerk/backend';


const Home = () => {
  return (
    <div>
      <p>Home</p>

      <UserButton afterSignOutUrl='/' />
    </div>
  )
}

export default Home