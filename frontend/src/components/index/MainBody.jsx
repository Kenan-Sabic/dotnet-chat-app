import React from 'react'
import UsernameForm from './UsernameForm'
import UserDisplay from './UserDisplay'
import PropTypes from 'prop-types';



const MainBody = ({uniqueId}) => {
  return (
    <div className='flex flex-col items-center gap-4 py-4 px-2 md:px-6 my-2 min-h-[80vh] w-11/12 md:w-10/12 lg:8/12 bg-raisingBlack bg-opacity-90'>
<UsernameForm/>
<UserDisplay uniqueId={uniqueId}/>
    </div>
  )
}
MainBody.propTypes = {
  uniqueId: PropTypes.string.isRequired,
};

export default MainBody