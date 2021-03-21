
import axios from 'axios';

import { stGallenCalcs } from '../context/actions/stGallen.action'

export const stGallenFetchBudget = () => (dispatch) => {
  dispatch({type: "ST_GALLEN_UPDATE_LOADING"})
  axios.get("https://daten.stadt.sg.ch/api/records/1.0/search/?dataset=budget-2021-stadt-stgallen-funktionale-gliederung-english-data&q=&lang=en&rows=10000&sort=zeilennummer&facet=typ&facet=aufwand_ertrag&facet=kontostruktur&facet=ebene_1&facet=ebene_2&facet=ebene_3&facet=konto&facet=kontotitel")
  .then(function (response) {
    console.log("I got back the following", response);
    dispatch({type: "ST_GALLEN_UPDATE_SUCCESS", payload: response.data})

    stGallenCalcs(response.data.records)(dispatch)

  })
  .catch(function (error) {
    console.log("I got back the following ERROR", error);
    dispatch({type: "ST_GALLEN_UPDATE_ERROR", payload: error.message})
  });
}
