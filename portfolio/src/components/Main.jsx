import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'

const Main = () => {
  return (
    <div id='main'>
        <img className='w-full h-screen object-cover' src='/Me.jpg'></img>
        <div className='w-full h-screen absolute top-0 left-0 bg-black-200/50'>
            <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                <h1 className='sm:text-5xl text-4xl font-bold text-white'>Jean-Francis Achard</h1>
                <h2 className='flex sm:text-3xl text-2xl pt-4 text-white'>
                    <TypeAnimation
                        sequence={[
                            'Etudiant',
                            2000,
                            'Developpeur',
                            2000,
                        ]}
                        wrapper="span"
                        speed={50}
                        cursor={true}
                        style={{ fontSize: '1em' }}
                        repeat={Infinity}
                    />
                </h2>
                <div className='flex justify-between pt-6 max-w-[75px] w-full'>
                    <a href="https://github.com/jfachard">
                        <FaGithub className='cursor-pointer text-white' size={30}/>
                    </a>
                    <a href="https://www.linkedin.com/in/jeanfrancis-achard/">
                        <FaLinkedinIn className='cursor-pointer text-white' size={30}/>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main