import React from 'react'

const btn = (type, children, onClick) => {
  return (
    <button
    type={type}
    onClick={onClick}
    >
    {children}
    </button>
  )
}

export default btn