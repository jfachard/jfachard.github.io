import React from 'react'
import FormaItems from './FormaItems'

const data = [
  {
    year:2026,
    title: 'Architecte logiciel, développeur d’application EPITECH',
    duration : '3ans',
    detail:'D’éveloppement mobile, web, logiciel et administration système et réseaux et transformation digitale'
  },
  {
    year:2023,
    title: 'Obtention de mon DUT GEII',
    duration : '2ans',
    detail:'L’institut universitaire de technologie de Nice',
  },
  {
    year:2020,
    title: 'Obtention du BAC Technologique STI2D',
    duration : '2ans',
    detail:'Lycée Don Bosco de Nice'
  }
]

const Formation = () => {
  return (
    <div id='formation' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Formation</h1>
      {data.map((item, idx) => (
        <FormaItems
          key={idx} 
          year={item.year} 
          title={item.title} 
          duration={item.duration} 
          detail={item.detail}
        />
      ))}
    </div>
  )
}

export default Formation