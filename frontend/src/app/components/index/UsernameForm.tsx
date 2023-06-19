import React from 'react'

type Props = {}

const UsernameForm = (props: Props) => {
  return (
    <div><form action="">
        <div className='flex flex-col items-center my-1'>
            <label htmlFor="displayName" className='text-white font-vt323 m-1'>Aventurer name:</label>
            <input type="text" id='displayName' className='bg-gray-400 bg-opacity-30 p-1 border-double border-4 border-gold' />
        </div>
        
    </form> </div>
  )
}

export default UsernameForm