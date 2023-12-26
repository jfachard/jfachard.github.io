import React from 'react'
import ProjItems from './ProjItems'
import robotImg from '../assets/robot.png'
import flipperImg from '../assets/flipper.png'
import roueImg from '../assets/Roue.jpg'
import jobBoardImg from '../assets/job-board.jpg'
import pokemonImg from '../assets/pokemon.png'

const Projects = () => {
  return (
    <div id='projet' className='max-w-[1040px m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projets</h1>
      <p className='text-center py-8'>
        Voici les différents projets que j'ai pu réaliser lors de mes différentes formations.
      </p>
      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjItems img={robotImg} title='Robot suiveur de lignes' language='C++'/>
        <ProjItems img={flipperImg} title='Flipper automatique/manuel' language='C++'/>
        <ProjItems img={roueImg} title='Roue de vélo électrique' language='C++'/>
        <ProjItems img={jobBoardImg} title='Job Board' language='HTLM,CSS,JS'/>
        <ProjItems img={pokemonImg} title='Jeu 2D Pokemon' language='Java'/>
      </div>
    </div>
  )
}

export default Projects