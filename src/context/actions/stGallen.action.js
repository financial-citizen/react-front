// import { authInstance } from '../../helpers/axios.helper';
// import {
//   CHANGE_THEME_MODE,
// } from '../reducers/app.reducer'
// import { CONNECTION_ERROR } from "../../constants/api.actionTypes";
// import { FIREBASE_PERSONAL_IMAGE_REF } from '../../constants/firebase.constants';
// import { storage } from '../../helpers/firebase.helper'
//
export const stGallenCalcs = (records) => (dispatch) => {

  console.log("Calcs")

  let currentYear = {
    totalOfExpenses: 0,
    totalOfRevenue: 0,
    totalOfDifference: 0
  }

  let previousYear = {
    totalOfExpenses: 0,
    totalOfRevenue: 0,
    totalOfDifference: 0,
  }

  records.forEach((item, i) => {

    if(item.fields.aufwand_ertrag === "Expense"){
        currentYear.totalOfExpenses = currentYear.totalOfExpenses + item.fields.budget_2021;
        previousYear.totalOfExpenses = previousYear.totalOfExpenses + item.fields.budget_2020;
        currentYear.totalOfDifference = currentYear.totalOfDifference + item.fields.abweichung_vom_vorjahresbudget;

        console.log(item);
    }

    if(item.fields.aufwand_ertrag === "Revenue"){
        console.log("hi", item.fields.budget_2021)
        currentYear.totalOfRevenue = currentYear.totalOfRevenue + item.fields.budget_2021;
        previousYear.totalOfRevenue = previousYear.totalOfRevenue + item.fields.budget_2020;
        currentYear.totalOfDifference = currentYear.totalOfDifference + item.fields.abweichung_vom_vorjahresbudget;
    }

  });

  dispatch({ type: "ST_GALLEN_CALCULATIONS", payload: {currentYear, previousYear} })

}
