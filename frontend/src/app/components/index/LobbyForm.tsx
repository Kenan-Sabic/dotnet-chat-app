import React from 'react'

type Props = {}

const LobbyForm = (props: Props) => {
  return (
    <div className='border-double border-gold border-4 p-2 w-full'> 
     <h2 className='text-white text-lg font-vt323 font-semibold p-1 w-full text-center'>Lobby config:</h2>
        <form action="" className='flex flex-col gap-1 justify-center text-white  font-vt323'>
            <div className='flex flex-row gap-2 font-vt323 text-white'>
              <input type="radio" name="" id="publicLobby" />
              <label htmlFor="publicLobby">Public Lobby</label>
              <input type="radio" name="" id="privateLobby" />
              <label htmlFor="privateLobby">Private Lobby</label>
              </div>
              <label htmlFor="lobbyCapacity">Guest capacity</label>
              <input type="number" name="capacity" min="1" max="3" defaultValue="1" id="lobbyCapacity" className='bg-gray-400 p-2' />
            <input type="button" value="Create Dungeon"  className='bg-gold p-2' />
            
            </form>
    </div>
  )
}

export default LobbyForm