import React, { useContext } from 'react'
import './form.styles.css'

import { GlobalContext } from '../../../context/global.provider'

import FormInput from './form-input'

const FormRow = ({title, value, name, placeholder, handler}) => {

  const {appState: {mode}} = useContext(GlobalContext)
  console.log(mode)
  return (
    <div className="column input-box">
      <label htmlFor="">{title}</label>
      <FormInput style={{color: mode.modeTheme.text}} handler={handler} type="text" value={value} name={name} placeholder={placeholder} />
    </div>
  )
}

export default FormRow
