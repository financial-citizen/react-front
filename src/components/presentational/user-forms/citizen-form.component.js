import React, { useState } from 'react'

import axios from 'axios'

import { FormRow } from '../../general/general.components'

import './user-forms.styles.css'

const CitizenForm= () => {

  const [ citizenData, setCitizenData  ] = useState({
    citizenName: '',
    personal: {
      id: ''
    },
    contact: {
      email: '',
      phone: ''
    }
  })

  const [ citizenSubmit, setCitizenSubmit  ] = useState({
    isLoading: false,
    hasSubmitted: false,
  })

  const inputCitizenNameHandler = (value) => {
    setCitizenData(prev => {
      return {
        ...prev,
        citizenName: value
      }
    })
  }

  const inputPersonalHandler = (value, name) => {
    setCitizenData(prev => {
      return {
        ...prev,
        personal: {
          ...prev.personal,
          [name]: value
        }
      }
    })
  }

  const inputContactHandler = (value, name) => {
    setCitizenData(prev => {
      return {
        ...prev,
        contact: {
          ...prev.contact,
          [name]: value
        }
      }
    })
  }

  const buttonPressHandler = () => {

    if(citizenSubmit.hasSubmitted === false){
      setCitizenSubmit(prev => {
        return {
          ...prev,
          isLoading: true
        }
      })
      axios.post("/newCitizen", citizenData)
      .then(function (response) {
        console.log("I got back the following", response);
        setCitizenSubmit(prev => {
          return {
            ...prev,
            isLoading: false,
            hasSubmitted: true
          }
        })
      })
      .catch(function (error) {
        console.log("I got back the following ERROR", error);
        setCitizenSubmit(prev => {
          return {
            ...prev,
            isLoading: false
          }
        })
      });
    }
  }

  return (
      <div className="user-form-container">
        {
          citizenSubmit.isLoading
            ? <>
              <h1>Loading...</h1>
            </>
            : <>
              <h1>Citizen</h1>
              <form>
                <FormRow
                  title={'Citizen name*'}
                  value={citizenData.citizenName}
                  name={'citizenName'}
                  placeholder="Citizen Smith"
                  handler={inputCitizenNameHandler}
                  required
                />
                <FormRow
                  title={'Email*'}
                  value={citizenData.contact.email}
                  name={'email'}
                  placeholder="smith@gmail.com"
                  handler={inputContactHandler}
                  required
                />
                <FormRow
                  title={'Phone'}
                  value={citizenData.contact.phone}
                  name={'phone'}
                  placeholder="+44 465723"
                  handler={inputContactHandler}
                />
                <FormRow
                  title={'National Id'}
                  value={citizenData.personal.id}
                  name={'id'}
                  placeholder="AHV48736FH"
                  handler={inputPersonalHandler}

                />

                <div className="column center main-button" onClick={ buttonPressHandler }>Submit</div>
              </form>
            </>
        }

      </div>
  )
}

export default CitizenForm
