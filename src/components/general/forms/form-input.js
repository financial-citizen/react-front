import React from 'react'
import './form.styles.css'

const FormInput = ({type, title, value, name, placeholder, handler, ...props}) => {
  return (
    <input className={`user-form-input ${props.className}`} onChange={(e) => handler(e.target.value, e.target.name)} type={type} value={value} name={name} placeholder={placeholder} />
  )
}

export default FormInput
