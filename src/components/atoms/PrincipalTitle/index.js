import React from 'react'
import PropTypes from 'prop-types'

const PrincipalTitle = ({ children }) => {
  return (
    <h1>{children}</h1>
  )
}

PrincipalTitle.propTypes = {
  children: PropTypes.node.isRequired
}

export default PrincipalTitle