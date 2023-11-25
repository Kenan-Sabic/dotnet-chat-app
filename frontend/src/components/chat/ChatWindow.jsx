import React from 'react'


const guestName = 'guest'

const ChatWindow = () => {
  return (
    <div className='w-full md:w-11/12 min-h-screen border-4 border-gold bg-raisingBlack bg-opacity-90'>
        <div className='p-0.5 w-full h-full flex items-center text-white'>
            <h1>Beginning chat with {guestName} </h1> </div>


    </div>
  )
}

export default ChatWindow