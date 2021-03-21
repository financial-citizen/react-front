import React, { useContext } from 'react'
import './dashboard.styles.css'

import { GlobalContext } from '../../context/global.provider'

import { ContentBox, DataList } from '../../components/presentational/presentational.components'
import { MainHeader, MainParagraph, LogoComponent, PageComponent } from '../../components/general/general.components'

import {
  Link
} from "react-router-dom";

const DashMainContainer = ({image, title, ...props}) => {

  const {appState: {mode}} = useContext(GlobalContext)
  return (
    <div className="row center dash-content-container">
      <ContentBox className="column center half-box dash-main">
        <div className="row profile-image-box">
          <img className="round-profile-picture" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_ghahI2Uoqs0ylTHZzyujwiYa7MoDecJBig&usqp=CAU" alt="" />
          <MainHeader>
            Good Day, Tanya
          </MainHeader>
        </div>
        <MainParagraph>Welcome to the platform.</MainParagraph>
        <MainParagraph>You have <a href="">10 Days left</a>to suggestnew ideas until the next vote.</MainParagraph>
        <MainParagraph>Meanwhile take a look at the suggestions <a href="">here</a></MainParagraph>
      </ContentBox>

      <ContentBox className="half-box">
      </ContentBox>
    </div>
  )
}

export default DashMainContainer
