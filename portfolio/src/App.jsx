import { useState } from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Formation from './components/Formation'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {

  return (
    <>
      <Sidenav/>
      <Main/>
      <Formation/>
      <Projects/>
      <Contact/>
    </>
  )
}

export default App