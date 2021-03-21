import React, { useContext } from 'react'
import './dashboard.styles.css'

import { GlobalContext } from '../../context/global.provider'

import { Link, Switch, Route, useParams, useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import DashboardRoutes from '../../routes/dashboard.routes'

import { ContentBox, DataList } from '../../components/presentational/presentational.components'
import { MainHeader, MainParagraph, LogoComponent, PageComponent } from '../../components/general/general.components'


const DashboardPage = ({image, title, ...props}) => {
  const {appState: {mode}} = useContext(GlobalContext)

  const routeMatch = useRouteMatch();
  const location = useLocation();
  
  return (
    <div className="row center dash-page">
      <div className="dash-nav-box">
        <Switch>
          {DashboardRoutes.map((route, index) => (
            // You can render a <Route> in as many places
            // as you want in your app. It will render along
            // with any other <Route>s that also match the URL.
            // So, a sidebar or breadcrumbs or anything else
            // that requires you to render multiple things
            // in multiple places at the same URL is nothing
            // more than multiple <Route>s.
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              children={<route.sidebar />}
            />
          ))}
        </Switch>
      </div>
      <div className="dash-content">
        <Switch>
            {DashboardRoutes.map((route, index) => (
              // Render more <Route>s with the same paths as
              // above, but different components this time.
              <Route
                key={index}
                path={route.path}
                title={title}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
      </div>
    </div>
  )
}

export default DashboardPage
