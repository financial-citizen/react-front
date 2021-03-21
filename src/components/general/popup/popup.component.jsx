import React from 'react'
import './popup.styles.css'

const Popup = (props) => {
  return (
    <div className="column center popup">
      {props.children}
    </div>
  )
}

export default Popup
