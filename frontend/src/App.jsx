import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages'
import ChatPage from './pages/chatPage';
import './App.css'

function App() {


  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Index/>} />
      <Route path='/chat' element={<ChatPage/>}/>

      </Routes>
      </BrowserRouter>
      </div>
  )
}

export default App
