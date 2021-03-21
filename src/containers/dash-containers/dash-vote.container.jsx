import React, { useContext } from 'react'
import './dashboard.styles.css'

import { GlobalContext } from '../../context/global.provider'

import { ContentBox, DataList } from '../../components/presentational/presentational.components'
import { MainHeader, MainParagraph, LogoComponent, PageComponent } from '../../components/general/general.components'

import {
  Link
} from "react-router-dom";

const DashVoteContainer = ({image, title, ...props}) => {

  const {appState: {mode}} = useContext(GlobalContext)
  return (
    <div className="column center dash-content-container">
      <MainHeader>
        {title}
      </MainHeader>
    </div>
  )
}

export default DashVoteContainer
