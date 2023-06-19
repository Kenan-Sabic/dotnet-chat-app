import React from 'react'

type Props = {}

const JoinForm = (props: Props) => {
  return (
    <div className='border-double border-gold border-4 p-2 w-full flex flex-col gap-1'>
        <form action="">
            <label htmlFor="targetID" className='font-vt323 text-white'>Enter ID to join:</label>
            <input type="text" name="" id="targetID" className='bg-gray-400 m-1 ' />
            <input type="button" value="Join" className='p-2 bg-gray-400 font-vt323 text-white mx-1'/>
        </form>
        <h2 className='font-vt323 text-white'>Alternatively join a random lobby</h2>
        <form>
            <input type="button" value="Join random" className='p-2 bg-gray-400 font-vt323 text-white'/>
        </form>
    </div>
  )
}

export default JoinForm