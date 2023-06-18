import React from 'react'

type Props = {}

const UsernameForm = (props: Props) => {
  return (
    <div><form action="">
        <div className='flex flex-col'>
            <label htmlFor="displayName">Aventurer name:</label>
            <input type="text" id='displayName' className='bg-gray-400 p-1' />
        </div>
        
    </form> </div>
  )
}

export default UsernameForm