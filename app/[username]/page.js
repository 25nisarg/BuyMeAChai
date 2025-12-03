import React from 'react'

const Username = async({params}) => {
const username=await params;
  return (
    <>
    {username.username}
    <div className='text-white'>
      <img src="" alt="" />
    </div>
    </>
  )
}

export default Username
