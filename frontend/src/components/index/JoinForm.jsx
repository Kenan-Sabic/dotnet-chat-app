import React from 'react'

const JoinForm = () => {
  return (
    <div className='border-double border-gold border-4 p-2 w-full'>
      <h1 className='w-full text-center text-white text-xl font-vt323 font-semibold'>Join a lobby</h1>
      <div className='flex flex-col gap-1 md:flex-row'>
        <form action='' className='flex flex-col md:w-2/3'>
          <label htmlFor='targetID' className='font-vt323 text-white'>
            Enter ID to join:
          </label>
          <input type='text' id='targetID' className='bg-gray-400 m-1' />
          <input type='button' value='Join' className='p-2 bg-gray-400 font-vt323 w-1/3 text-white mx-1' />
        </form>
        <div className='md:w-1/3 flex flex-col items-center'>
          <h2 className='font-vt323 text-white m-1'>Alternatively join a random lobby</h2>
          <form>
            <input type='button' value='Join random' className='p-2 bg-gray-400 font-vt323 text-white' />
          </form>
        </div>
      </div>
    </div>
  );
};

export default JoinForm
