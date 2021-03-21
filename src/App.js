import React, { useContext, useEffect, Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, useLocation, useHistory } from "react-router-dom"

import { GlobalContext } from './context/global.provider'
import { stGallenFetchBudget } from './api/stGallen'



// Themes
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./assets/styling/GlobalStyle";
import  { useDarkMode } from "./assets/styling/useDarkMode"
import { lightTheme, darkTheme } from "./assets/styling/Themes"

import routes from './routes/index.routes';

import { DayNightToggler, Header, Loader, PageComponent } from './components/general/general.components'

const GeneralRoutes = (route) => {

  const history = useHistory();

  useEffect(() => {

    if(!route.computedMatch.isExact){
      history.push("/lost")
    }
    // if(route.needsAuth && isAuthenticated() === false ){
    //   history.push("/auth/login");
    // }
  }, [route])

  return (
    <React.Fragment>
      <Route
        path={route.path}
        exact
        render={(props) => <route.component {...route} {...props} />}
      ></Route>
    </React.Fragment>
  );
};

function App() {
  const [themeToggler] = useDarkMode();
  const { appState: {mode}, stGallenState: {data}, stGallenDispatch } = useContext(GlobalContext);
  const themeMode = mode.theme === 'light' ? lightTheme : darkTheme;


  console.log("StGallen", stGallenFetchBudget())

  useEffect(() => {
    if(data.records.length === 0){
      stGallenFetchBudget()(stGallenDispatch)
    }

  }, [0])

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles/>
      <Router>
        <Header />
        <Suspense fallback={<PageComponent><Loader /></PageComponent>}>
          <Switch>
            {
              routes.map((route, index) => (
                <GeneralRoutes {...route} key={index} />
              ))
            }
          </Switch>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default App;
