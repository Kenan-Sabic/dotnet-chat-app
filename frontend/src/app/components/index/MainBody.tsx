import React from 'react'
import UserIDdisplay from './UserIDdisplay'
import LobbyForm from './LobbyForm'
import UsernameForm from './UsernameForm'

type Props = {}

const MainBody = (props: Props) => {
  return (
    <div className='flex flex-col items-center pt-4 min-h-[80vh] w-11/12 bg-raisingBlack'>
     <div className='w-10/12 min-h-[50vh] bg-dimGray '>
      <UsernameForm></UsernameForm>
      <UserIDdisplay></UserIDdisplay>
      <LobbyForm></LobbyForm>
     </div>
    </div>
  )
}

export default MainBody