import React from 'react'
import UserIDdisplay from './UserDisplay'
import LobbyForm from './LobbyForm'
import UsernameForm from './UsernameForm'
import AboutSection from './AboutSection'
import JoinForm from './JoinForm'

type Props = {}

const MainBody = (props: Props) => {
  return (
    <div className='flex flex-col items-center gap-4 py-4 px-2 my-2 min-h-[80vh] w-11/12 bg-raisingBlack bg-opacity-90'>

      <UsernameForm></UsernameForm>
      <UserIDdisplay></UserIDdisplay>
      <JoinForm></JoinForm>
      <LobbyForm></LobbyForm>
      <AboutSection></AboutSection>

    </div>
  )
}

export default MainBody