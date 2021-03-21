import React from 'react'
import './empty-state.styles.css'

const EmptyState = (props) => {
  return (
    <div className="empty-state column center">
      {props.children}
    </div>
  )
}

export default EmptyState
