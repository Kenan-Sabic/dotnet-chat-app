import React from 'react'
import ChatWindow from '../components/chat/chatWindow'
import TitleBanner from '../components/general/TitleBanner'

const ChatPage = () => {
  return (
    <div className='flex flex-col items-center md:justify-center w-full min-h-screen bg-chat-wall bg-repeat'>
    <TitleBanner/>
    <ChatWindow/>
    </div>
  )
}

export default ChatPage