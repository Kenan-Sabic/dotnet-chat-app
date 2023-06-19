import React from 'react'

type Props = {}

const UserIDdisplay = (props: Props) => {
  return (
    <div className='bg-transparent p-5 h-full flex flex-row gap-1 w-full'>
       <div className='w-1/2 h-fit border-double border-4 border-gold flex flex-col justify-center p-1'>
        <h2 className='text-white text-lg font-semibold font-vt323'>Your ID is:</h2>
        <h2 className='text-white text-lg font-vt323 font-semibold'>
          Placeholder
        </h2>
       </div>
       <div className='w-1/2 h-full border-double border-4 border-gold flex flex-col justify-center p-1'>
        <h2 className='text-white text-lg font-semibold font-vt323'>Your name is:</h2>
        <h2 className='text-white text-lg font-vt323 font-semibold'>
          Placeholder
        </h2>
       </div>

    </div>
  )
}

export default UserIDdisplay