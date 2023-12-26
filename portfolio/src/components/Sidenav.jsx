import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineMail} from 'react-icons/ai'
import {GrProjects} from 'react-icons/gr'


const Sidenav = () => {

  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div>
      <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden'/>
      {
        nav ? (
            <div className='fixed w-full h-screen bg-gray-700/90 flex flex-col justify-center items-center z-20'>
              <a onClick={handleNav} href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-300 shadow-gray-700 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                <AiOutlineHome size={20}/>
                <span className='pl-4'>Home</span>
              </a>
              <a onClick={handleNav} href="#formation" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-300 shadow-gray-700 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                <GrProjects size={20}/>
                <span className='pl-4'>Formations</span>
              </a>
              <a onClick={handleNav} href="#projet" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-300 shadow-gray-700 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                <AiOutlineProject size={20}/>
                <span className='pl-4'>Projets</span>
              </a>
              <a onClick={handleNav} href="#contact" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-300 shadow-gray-700 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                <AiOutlineMail size={20}/>
                <span className='pl-4'>Contact</span>
              </a>
            </div>
        ) 
        : (
            ''
        )}
        <div className='md:block hidden fixed top-[25%] z-10'>
          <div className='flex flex-col'>
            <a href="#main" className='rounded-full shadow-lg bg-gray-300 shadow-gray-600 m-2 p-4 cursor-pointer hover:scale-110 duration-300'>
              <AiOutlineHome size={20}/>
            </a>
            <a href="#formation" className='rounded-full shadow-lg bg-gray-300 shadow-gray-600 m-2 p-4 cursor-pointer hover:scale-110 duration-300'>
              <GrProjects size={20}/>
            </a>
            <a href="#projet" className='rounded-full shadow-lg bg-gray-300 shadow-gray-600 m-2 p-4 cursor-pointer hover:scale-110 duration-300'>
              <AiOutlineProject size={20}/>
            </a>
            <a href="#contact" className='rounded-full shadow-lg bg-gray-300 shadow-gray-600 m-2 p-4 cursor-pointer hover:scale-110 duration-300'>
              <AiOutlineMail size={20}/>
            </a>
          </div>
        </div>
    </div>
  )
}

export default Sidenav