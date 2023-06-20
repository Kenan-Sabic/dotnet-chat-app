
import React from 'react'
import Link from 'next/link'
import MainBody from '../components/index/MainBody'
import TitleBanner from '../components/index/TitleBanner'
import Footer from '../components/general/Footer'
import { generateUniqueId } from '../containers/UUIDGenerator'
type Props = {}

const Index = (props: Props) => {
  const uniqueId = generateUniqueId();

  return (
    <div className='flex flex-col items-center min-h-screen w-full bg-dungeonWall-1 bg-repeat'>
      <TitleBanner></TitleBanner>
      <MainBody uniqueId={uniqueId}></MainBody>
      <Footer></Footer>
      

    </div>
  )
}

export default Index