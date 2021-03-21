import React, { useContext } from 'react'
import './landing.css'

import { GlobalContext } from '../../context/global.provider'

import { ContentBox, DataList } from '../../components/presentational/presentational.components'
import { MainHeader, MainParagraph, LogoComponent } from '../../components/general/general.components'

import {
  Link
} from "react-router-dom";

const LandingPage = ({image, title, ...props}) => {

  const {appState: {mode}} = useContext(GlobalContext)
  return (
    <div className="row landing-page">
      <div className="column center landing-left">
        <MainHeader>
          Your portal for more self determination
        </MainHeader>
        <MainParagraph>
          Submit, upvote and share your suggestions with the city.
        </MainParagraph>

        <MainParagraph>
          Lets thrive together in St Gallen.
        </MainParagraph>

        <div className="row space-around button-row">
          <Link to="/signup" className="sign-up-button">
            Sign Up
          </Link>
          <Link to="/signup" className="sign-up-button">
            Sign Up
          </Link>
        </div>
      </div>
      <div className="landing-right" style={{backgroundImage:`url(${'https://images.pexels.com/photos/3671083/pexels-photo-3671083.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'})`}}>

      </div>

    </div>
  )
}

export default LandingPage
