import React from 'react'

type Props = {}

const AboutSection = (props: Props) => {
  return (
    <div className='text-white font-vt323'>
      <h1 className='text-xl'>About</h1>
      <p>This is a real time chat app that allows 2 to 4 users to
        join a lobby and send text messages to each other.
        It allows a user to set their display names so other users can
        recognize them. Users have no permanent accounts and they receive a unique 
        ID each session. Users are allowed to either host a lobby or join one, 
        either by entering another user's ID or randomly joining 
        a lobby set to public.
        The project is obviously not finished yet and nothing works.
        Later on there might be more features but for now these are 
        the ones I have planned. 
      </p>
    </div>
  )
}

export default AboutSection