import React from 'react'
import VhnUsestate from './components/VhnuseState'
import VhnuseState from './components/VhnuseState'
import VhnUseEffect from './components/VhnUseEffect'
import VhnUseContext from './components/VhnUseContext'

export default function App() {
  return (
    <div className='container border mt-3'>
    <h1 className='text center'>Vũ Hoài Nam - Hook</h1>
    <hr/>
   <VhnuseState />
   <hr/>
   <VhnUseEffect />
   <hr/>
   <VhnUseContext />
  </div>
  )
}
