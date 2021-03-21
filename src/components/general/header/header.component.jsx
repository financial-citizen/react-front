import React, { useContext } from 'react'
import './header.styles.css'

import { Link, useHistory, useLocation } from 'react-router-dom'


// Context
import { GlobalContext } from '../../../context/global.provider'

// Day Night Toggler
import  { useDarkMode } from "../../../assets/styling/useDarkMode"
import { DayNightToggler, LogoComponent } from '../../../components/general/general.components'

// Logo
// import logo from '../../../assets/logo.png'

const HeaderNew = (props) => {

  const { appState: { siteName, mode }, authState: { user } } = useContext(GlobalContext)
  const location = useLocation();
  let history = useHistory();
  const [theme, themeToggler] = useDarkMode();

  const routeTo = (page) => {
    history.push(`/${page}`);
  }


  return (
    <>
    {
      location.pathname === '/'
        ? <div className="row space-between header header-background" style={{backgroundColor: mode.modeTheme.background}}>
            <div className="auth-options-dark-text row space-around">
              {
                location.pathname === "/signup"
                  ? null
                  : user.id === null
                      ? <Link to="/signup" style={{color: mode.modeTheme.text}}>Sign up</Link>
                      : <Link to="/dashboard" style={{color: mode.modeTheme.text}}>Dashboard</Link>
              }
              <Link to="/signup" style={{color: mode.modeTheme.text}}>How it works</Link>
              <Link to="/signup" style={{color: mode.modeTheme.text}}>Winning Team</Link>
            </div>

            <LogoComponent className="header-logo" handler={()=>routeTo('')}/>
            <DayNightToggler className="mobile-hidden" theme={theme} modeDetails={mode.modeTheme} toggleTheme={themeToggler} />
            <div className="column center burger-menu">
              <div className="burger-line" style={{backgroundColor: mode.modeTheme.text}}></div>
              <div className="burger-line" style={{backgroundColor: mode.modeTheme.text}}></div>
              <div className="burger-line" style={{backgroundColor: mode.modeTheme.text}}></div>
            </div>
          </div>
        : <div className="row space-between header header-short" style={{backgroundColor: mode.modeTheme.background}}>
            <div className="auth-options row space-around">
              {
                location.pathname === "/signup"
                  ? null
                  : user.id === null
                      ? <Link to="/signup" style={{color: mode.modeTheme.text}}>Sign up</Link>
                      : <Link to="/dashboard" style={{color: mode.modeTheme.text}}>Dashboard</Link>
              }
              <Link to="/signup" style={{color: mode.modeTheme.text}}>How it works</Link>
              <Link to="/signup" style={{color: mode.modeTheme.text}}>Winning Team</Link>
            </div>
            <LogoComponent className="header-logo" handler={()=>routeTo('')}/>
            <DayNightToggler className="mobile-hidden" theme={theme} modeDetails={mode.modeTheme} toggleTheme={themeToggler} />
            <div className="column space-around burger-menu">
              <div className="burger-line" style={{backgroundColor: mode.modeTheme.text}}></div>
              <div className="burger-line" style={{backgroundColor: mode.modeTheme.text}}></div>
              <div className="burger-line" style={{backgroundColor: mode.modeTheme.text}}></div>
            </div>
          </div>
    }
    </>
  )
}

export default HeaderNew;
