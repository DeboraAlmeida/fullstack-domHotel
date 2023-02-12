import React from 'react'
import PropTypes from 'prop-types'

const SubTitle = ({ children }) => {
  return (
    <h2>{children}</h2>
  )
}

SubTitle.propTypes = {
  children: PropTypes.node.isRequired
}

export default SubTitle