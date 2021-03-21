import React, { useContext } from 'react'
import './content-box.styles.css'

import { GlobalContext } from '../../../context/global.provider'

const ContentBox = (props) => {

  const { appState: { mode } } = useContext(GlobalContext)

  return (
    <div className={`content-box ${props.className}`} style={{backgroundColor: mode.modeTheme.background}}>
      {props.children}
    </div>
  )
}

export default ContentBox
