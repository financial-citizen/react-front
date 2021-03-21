import React, { useContext } from 'react'
import './text.styles.css'

import { GlobalContext } from '../../../context/global.provider'


export const MainHeader = (props) => {
  const { appState: { mode } } = useContext(GlobalContext)
   return (
    <h1 className={`main-header-text ${props.className}`} style={{color: mode.modeTheme.text}}>
      {props.children}
    </h1>
  )
}

export const SecondaryHeader = (props) => {
  const { appState: { mode } } = useContext(GlobalContext)
  return (
    <h2 className={`secondary-header-text ${props.className}`} style={{color: mode.modeTheme.text}}>
      {props.children}
    </h2>
  )
}

export const SupportingHeader = (props) => {
  const { appState: { mode } } = useContext(GlobalContext)
  return (
    <h3 className={`supporting-header-text ${props.className}`} style={{color: mode.modeTheme.text}}>
      {props.children}
    </h3>
  )
}

export const MainParagraph = (props) => {
  const { appState: { mode } } = useContext(GlobalContext)
  return (
    <p className={`main-paragraph-text ${props.className}`} style={{color: mode.modeTheme.text}}>
      {props.children}
    </p>
  )
}

export const SecondaryParagraph = (props) => {
  const { appState: { mode } } = useContext(GlobalContext)
  return (
    <p className={`secondary-paragraph-text ${props.className}`} style={{color: mode.modeTheme.text}}>
      {props.children}
    </p>
  )
}
