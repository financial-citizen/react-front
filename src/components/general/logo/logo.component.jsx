import React, { useContext } from 'react'
import './logo.styles.css'

import { GlobalContext } from '../../../context/global.provider'

const LogoComponent = ({handler, ...props}) => {
  const { appState: { mode } } = useContext(GlobalContext)

  return (
    <div className="row logo-component" onClick={handler}>
      <div className="row stripes-container">
        <div className="red-stripe"></div>
        <div className="black-stripe" style={{backgroundColor: mode.modeTheme.text}}></div>
      </div>
      <div className="column flex-end logo-text-column">
        <p className="logo-text">st.gallen</p>
      </div>
    </div>
  )
}

export default LogoComponent
