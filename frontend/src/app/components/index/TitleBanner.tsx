import React from 'react'

type Props = {}

const TitleBanner = (props: Props) => {
  return (
    <div className='flex flex-row bg-transparent justify-center w-full py-10 z-10 '>
        <h1 className='font-vt323 font-extrabold text-4xl text-white '>Rogue Talk</h1>
    </div>
  )
}

export default TitleBanner