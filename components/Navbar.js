"use client"
import React, {useState} from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'

const Navbar = () => {
  const { data: session } = useSession()
  const [showDropdown, setshowDropdown] = useState(false)
  // if (session) {
  //   return (
  //     <>
  //       Signed in as {session.user.name} <br />
  //       <button onClick={() => signOut()}>Sign out</button>
  //     </>
  //   )
  // }

  return (
    <nav className='bg-gray-900 text-white flex justify-between px-4 items-center h-16'>
      <Link href={"/"} className="logo font-bold text-xl">
        GetMeAChai
      </Link>
      {/* <ul className='flex justify-between gap-4'>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Sign Up</li>
        <li>Login</li>
      </ul> */}
      <div className='relative'>
        {session && <>

          <button onClick={()=>{setshowDropdown(!showDropdown)}} onBlur={()=>{setTimeout(()=>{
            setshowDropdown(false)
          },300)}} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="inline-flex items-center justify-center text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center leading-5 me-2 mb-2" type="button">
            Welcome {session.user.name}
            <svg className="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" /></svg>
          </button>

          <div id="dropdown" className={`z-10 ${showDropdown?" ":"hidden"} absolute left-2.5 bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-44`}>
            <ul className="p-2 text-sm text-body font-medium" aria-labelledby="dropdownDefaultButton">
              <li>
                <Link href="/dashboard" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Dashboard</Link>
              </li>
              <li>
                <Link href="#" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Your Page</Link>
              </li>
              <li>
                <Link href="#" onClick={()=>{signOut()}} className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Sign out</Link>
              </li>
            </ul>
          </div>

        </>}
        
        {session &&
          <button onClick={() => { signOut() }} className="text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center leading-5 me-2 mb-2" >Logout</button>}
        {!session && <Link href={"/login"}>
          <button className="text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center leading-5 me-2 mb-2" >Login</button>
        </Link>}
      </div>
    </nav>
  )
}

export default Navbar
