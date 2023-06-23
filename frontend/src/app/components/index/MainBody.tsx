'use client'
import React, {useState} from 'react'
import UserDisplay from './UserDisplay'
import LobbyForm from './LobbyForm'
import UsernameForm from './UsernameForm'
import AboutSection from './AboutSection'
import JoinForm from './JoinForm'

type Props = {

  uniqueId: string;
}

const MainBody = (props: Props) => {
  const [displayName, setDisplayName] = useState('');

  const handleNameSubmit = (name: string) => {
    setDisplayName(name);
  };

  return (
    <div className='flex flex-col items-center gap-4 py-4 px-2 md:px-6 my-2 min-h-[80vh] w-11/12 md:w-10/12 lg:8/12 bg-raisingBlack bg-opacity-90'>

      <UsernameForm onNameSubmit={handleNameSubmit} ></UsernameForm>
      <UserDisplay uniqueId={props.uniqueId} displayName={displayName}></UserDisplay>
      <JoinForm></JoinForm>
      <LobbyForm></LobbyForm>
      <AboutSection></AboutSection>

    </div>
  )
}

export default MainBody