import './dayNightToggler.styles.css'
import React, { useContext } from 'react'
import { func, string } from 'prop-types';

import styled from "styled-components"

import { ReactComponent as SunIcon } from '../../../assets/icons/sun-solid.svg';
import { ReactComponent as MoonIcon } from '../../../assets/icons/moon-solid.svg';

const DayNightToggler = ({theme, modeDetails, toggleTheme }) => {
  console.log(theme)
    return (
        <div onClick={toggleTheme} >
          {
            theme !== 'light'
              ? <SunIcon className="togglerIcon" style={{color: modeDetails.modeToggleColor }} />
              : <MoonIcon className="togglerIcon" style={{color: modeDetails.modeToggleColor }} />
          }
        </div>
    );
};

export default DayNightToggler;
