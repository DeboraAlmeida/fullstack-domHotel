import React, { useState } from 'react'
import './App.css'
import PrincipalTitle from './components/atoms/PrincipalTitle'
import ComponentsArea from './components/organisms/ComponentsArea'
import NavMenu from './components/organisms/NavMenu'
import Carrousel from './components/organisms/Carrousel'

const App = () => {
  const [stage, setStage] = useState('initial')

  return (
    <div className="App">
      <NavMenu setStage={setStage} />
      {stage === 'initial' && (
        <>
          <PrincipalTitle>{'Olá Devs :)'}</PrincipalTitle>
        </>
      )}
      {stage === 'components' && (
        <>
          <ComponentsArea />
        </>
      )}
    </div>
  )
}

export default App
