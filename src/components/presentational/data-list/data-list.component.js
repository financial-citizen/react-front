import React, { useContext } from 'react'
import './data-list.styles.css'

import axios from 'axios'

import { GlobalContext } from '../../../context/global.provider'
import { EmptyState, Loader } from '../../general/general.components'


const DataList = () => {

  const { stGallenState } = useContext(GlobalContext)

  return (
      <ul className="column data-list">
        <li>Revenue - CHF{stGallenState.calculations.currentYear.totalOfRevenue}  Expenses - CHF{stGallenState.calculations.currentYear.totalOfExpenses}</li>
        {
          stGallenState.isLoading
            ? <EmptyState>
              <Loader />
            </EmptyState>
            : stGallenState.data.records.slice(0, 25).map((item) =>
              <li key={item.recordid}>{item.fields.kontotitel} {item.fields.aufwand_ertrag} CHF{item.fields.budget_2021} CHF{item.fields.budget_2020} CHF{item.fields.abweichung_vom_vorjahresbudget}</li>
            )
          }
      </ul>
  )
}

export default DataList
