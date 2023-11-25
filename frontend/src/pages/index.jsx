import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TitleBanner from '../components/general/TitleBanner';
import MainBody from '../components/index/MainBody';
import { v4 as uuidv4 } from 'uuid';

const Index = () => {
  const [uniqueId, setUniqueId] = useState(uuidv4());

  return (
    <div className='flex flex-col items-center min-h-screen w-full bg-deungeonwall-1 bg-repeat'>
      <TitleBanner />
      <MainBody uniqueId={uniqueId} />
    </div>
  );
};

export default Index;

MainBody.propTypes = {
  uniqueId: PropTypes.string.isRequired,
};
