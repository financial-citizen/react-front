import React, { useContext } from 'react'
import './dashboard-navigator.styles.css'

import { GlobalContext } from '../../../context/global.provider'

import { useHistory } from 'react-router-dom'

import { MainParagraph } from '../../general/general.components'

const DashboardNavigatorButton = ({ selected, routeToPage, ...props}) => {

  const { appState: { mode } } = useContext(GlobalContext)
  const history = useHistory();

  const routeTo = (page) => {
    history.push(`${page}`);
  }

  return (
    <div className={`dash-nav-button row center ${selected ? 'selected' : null }`} onClick={()=> routeTo(routeToPage)} >
      <MainParagraph className="column center dash-nav-text">{props.children}</MainParagraph>
    </div>
  )
}

export default DashboardNavigatorButton
