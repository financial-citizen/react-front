import React, { useState, useContext } from 'react';

import { GlobalContext } from '../../context/global.provider'

import { ContentBox, GovernmentForm, CitizenForm } from '../../components/presentational/presentational.components'
import { MainHeader, LogoComponent } from '../../components/general/general.components'


const SignUp = ({image, ...props}) => {

  // Global Context
  const {appState: {mode}} = useContext(GlobalContext)

  // Form User Type
  const [ userType, setUserType ] = useState('government');

  // For Later Use
  // Next Form
  const [governmentData, setGovernmentData ] = useState({
    name: {
      first: '',
      surname: ''
    },
    email: ''
  })


  // User Type Toggle Handler
  const userTypeHandler = () => {
    if(userType === 'government'){
      setUserType('dj')
    } else {
      setUserType('government')
    }
  }

  return (
    <div className="landing-page" style={{backgroundImage: `url(${image})`}}>
      <div className="landing-content">
        <ContentBox className="welcome-box">
          <div className="row space-around title-row">
            <MainHeader>Sign Up</MainHeader>
            <div
              className="column center main-button"
              onClick={
                ()=>userTypeHandler()
              }
            >
              {
                userType === "government"
                  ? "I'm a Citizen"
                  : "I'm a Government Offical"
              }
            </div>
          </div>

          {
            userType === "government"
              ? <GovernmentForm />
              : <CitizenForm />
          }
        </ContentBox>
      </div>
    </div>
  )
}

export default SignUp
