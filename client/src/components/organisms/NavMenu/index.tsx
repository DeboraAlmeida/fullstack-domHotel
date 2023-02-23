import PropTypes from 'prop-types'
import React from 'react'
import * as S from './styles.js'

interface Props {
  setStage: (stage: string) => void
}

const NavMenu = ({ setStage }: Props) => {

  const changeStage = (step: string) => {
    setStage(step)
  }

  return (
    <S.Menu>
      <S.MenuItem onClick={() => changeStage('initial')}>Home</S.MenuItem> |
      <S.MenuItem onClick={() => changeStage('components')}>Components</S.MenuItem>
    </S.Menu>
  )
}

NavMenu.propTypes = {
  setStage: PropTypes.func.isRequired
}

export default NavMenu
