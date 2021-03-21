import React, { useContext, useState } from 'react';
import './lost.styles.css'

import { Link } from 'react-router-dom';

// Context
import { GlobalContext } from '../../context/global.provider';

// Components
import { PageComponent, EmptyState, Loader } from '../../components/general/general.components'

// SVG
import { ReactComponent as HomeIcon } from '../../assets/icons/home-solid.svg'


const LostPage = (props) => {

  const { appState: {siteName, mode} } = useContext(GlobalContext);

  return (
    <PageComponent className="column center lost-page" style={{backgroundColor: mode.modeTheme.background}}>


      <h1>{siteName}</h1>
      <p>Looks Like you're lost</p>

      <Link to="/" className="highlight-txt row center text-align-center" style={{color: mode.modeTheme.text}}><HomeIcon height='20' style={{marginRight: '10px'}} /> Return Home</Link>


    </PageComponent>
  );
}

export default LostPage
