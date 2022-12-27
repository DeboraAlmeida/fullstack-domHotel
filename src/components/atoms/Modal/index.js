import React from 'react'



const Modal = ({ children, isOpen, setModalOpen }) => {
  if (!isOpen) return null
  return (<div className='Backdrop'>
  <div>{ children }</div></div>)
}

export default Modal