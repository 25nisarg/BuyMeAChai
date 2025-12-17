import React from 'react'

const Username = async ({ params }) => {
  const username = await params;
  return (
    <>
      <div className='cover w-full relative'>
        <img src="https://images.unsplash.com/photo-1765202662614-fa22254ee59c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='object-cover w-full h-[350]' alt="" />
        <div className='absolute -bottom-16 right-[46%] border-white border-2 rounded-full'>
          <img width={120} height={120} className='object-cover rounded-full min-h-[120px]' src="https://images.unsplash.com/photo-1765206685652-da5e0873327e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
      </div>
      <div className="info flex justify-center items-center my-22 flex-col gap-1">
        <div className='font-bold text-lg'>
          @{username.username}
        </div>
        <div className='text-slate-400'>
          Creating Podcasts
        </div>
        <div className='text-slate-400'>
          10,586 members . 914 posts
        </div>
        <div className="payment flex gap-3 w-[80%] mt-11">
          <div className="supporters w-1/2 bg-slate-800 rounded-lg p-10">
            <h2 className='text-lg font-bold my-5'>Supporters</h2>
            <ul className='mx-5 text-lg'>
              <li className='my-2 flex items-center gap-1'>
                <img width={40} src="avatar.gif" alt="" className='rounded-full border-white border-2 p-1'/>
                Subham Donated<span className='font-bold'>$30</span>with a message "I support You Bro..."
              </li>
              <li className='my-2 flex items-center gap-1'>
                <img width={40} src="avatar.gif" alt="" className='rounded-full border-white border-2 p-1'/>
                Subham Donated<span className='font-bold'>$30</span>with a message "I support You Bro..."
              </li>
              <li className='my-2 flex items-center gap-1'>
                <img width={40} src="avatar.gif" alt="" className='rounded-full border-white border-2 p-1'/>
                Subham Donated<span className='font-bold'>$30</span>with a message "I support You Bro..."
              </li>
              
            </ul>
          </div>
          <div className="makePayment w-1/2 bg-slate-800 rounded-lg p-10">
            <h2 className='text-2xl font-bold my-5'>Make A Payment</h2>
            <div className='flex gap-2 flex-col'>
              <input type="text" className='w-full p-3 rounded-lg bg-slate-700' placeholder='Enter Name' />
              <input type="text" className='w-full p-3 rounded-lg bg-slate-700' placeholder='Enter Message' />

              <input type="text" className='w-full p-3 rounded-lg bg-slate-700' placeholder='Enter Amount' />
              <button className='text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center leading-5 me-2 mb-2'>Pay</button>
            </div>
            <div className='flex gap-2 mt-5'>
              <button className='bg-slate-700 p-3 rounded-lg'>Pay $10</button>
              <button className='bg-slate-700 p-3 rounded-lg'>Pay $20</button>
              <button className='bg-slate-700 p-3 rounded-lg'>Pay $30</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Username
