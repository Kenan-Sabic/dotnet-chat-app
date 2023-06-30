import React, { useState } from 'react';
import UsernameForm from './UsernameForm';
import UserDisplay from './UserDisplay';
import PropTypes from 'prop-types';
import JoinForm from './JoinForm';
import LobbyForm from './LobbyForm';
import AboutSection from './AboutSection';

const MainBody = ({ uniqueId }) => {
  const [displayName, setDisplayName] = useState('');

  const handleNameSubmit = (name) => {
    setDisplayName(name);
  };

  return (
    <div className='flex flex-col items-center gap-4 py-4 px-2 md:px-6 my-2 min-h-[80vh] w-11/12 md:w-10/12 lg:8/12 bg-raisingBlack bg-opacity-90'>
      <UsernameForm onNameSubmit={handleNameSubmit} />
      <UserDisplay uniqueId={uniqueId} displayName={displayName} />
      <JoinForm/>
      <LobbyForm/>
      <AboutSection/>
    </div>
  );
};

MainBody.propTypes = {
  uniqueId: PropTypes.string.isRequired,
};

export default MainBody;
