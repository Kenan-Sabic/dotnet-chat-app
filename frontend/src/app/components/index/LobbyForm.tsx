import React from 'react'

type Props = {}

const LobbyForm = (props: Props) => {
  return (
    <div className='border-double border-gold border-4 p-2 w-full'> 
    <h1 className='text-white text-xl font-vt323 font-semibold p-1 w-full text-center'>Create a lobby</h1>
     <h2 className='text-white text-lg font-vt323 font-semibold p-1 w-full text-center'>Lobby config:</h2>
        <form action="" className='flex flex-col gap-1 justify-center text-white  font-vt323'>
            <div className='flex flex-row items-center justify-center gap-5 p-1 font-vt323 text-white'>
              <input type="radio" name="lobbyType" id="publicLobby"  value="publicLobby"  className='accent-raisingBlack'/>
              <label htmlFor="publicLobby">Public Lobby</label>
              <input type="radio" name="lobbyType" id="privateLobby" value="privateLobby" className='accent-raisingBlack'/>
              <label htmlFor="privateLobby">Private Lobby</label>
              </div>
              <label htmlFor="lobbyCapacity">Number of guests</label>
              <select id='lobbyCapacity' className='bg-gray-400 px-2'>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            <input type="submit" value="Create Dungeon"  className='bg-gold p-2' />
            
            </form>
    </div>
  )
}

export default LobbyForm