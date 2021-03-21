import { lazy } from 'react'

// Icons
import { ReactComponent as LightBlub } from '../assets/icons/lightbulb-regular.svg';
import { ReactComponent as Checkbox } from '../assets/icons/check-square-regular.svg';
import { ReactComponent as FileInvoice } from '../assets/icons/file-invoice-dollar-solid.svg';

import { DashboardNavigatorButton } from '../components/presentational/presentational.components'

const DashMainContainer = lazy(() => import ('../containers/dash-containers/dash-main.container'))
const DashSuggestContainer = lazy(() => import ('../containers/dash-containers/dash-suggest.container'))
const DashVoteContainer = lazy(() => import ('../containers/dash-containers/dash-vote.container'))
const DashTaxContainer = lazy(() => import ('../containers/dash-containers/dash-tax.container'))

const DashboardRoutes = [
  {
      path: "/dashboard",
      sidebar: () =>
        <div className="dash-nav-box-options column space-between">
          <DashboardNavigatorButton selected={true} routeToPage={'/dashboard'}>Home</DashboardNavigatorButton>
          <DashboardNavigatorButton selected={false} routeToPage={'/user/suggest'}><LightBlub/> Suggest</DashboardNavigatorButton>
          <DashboardNavigatorButton selected={false} routeToPage={'/user/vote'}><Checkbox/> Vote</DashboardNavigatorButton>
          <DashboardNavigatorButton selected={false} routeToPage={'/user/tax'}><FileInvoice/> Tax Overview</DashboardNavigatorButton>
          <DashboardNavigatorButton selected={false}>Logout</DashboardNavigatorButton>
        </div>,
      main: () => <DashMainContainer title="Main" />
    },
    {
      path: "/user/suggest",
      sidebar: () =>
        <div className="dash-nav-box-options column space-between">
          <DashboardNavigatorButton selected={false} routeToPage={'/dashboard'}>Home</DashboardNavigatorButton>
          <DashboardNavigatorButton selected={true} routeToPage={'/user/suggest'}><LightBlub/> Suggest</DashboardNavigatorButton>
          <DashboardNavigatorButton selected={false} routeToPage={'/user/vote'}><Checkbox/> Vote</DashboardNavigatorButton>
          <DashboardNavigatorButton selected={false} routeToPage={'/user/tax'}><FileInvoice/> Tax Overview</DashboardNavigatorButton>
          <DashboardNavigatorButton selected={false}>Logout</DashboardNavigatorButton>
        </div>,
      main: () => <DashSuggestContainer title="Suggest" />
    },
    {
      path: "/user/vote",
      sidebar: () => <div className="dash-nav-box-options column space-between">
        <DashboardNavigatorButton selected={false} routeToPage={'/dashboard'}>Home</DashboardNavigatorButton>
        <DashboardNavigatorButton selected={false} routeToPage={'/user/suggest'}><LightBlub/> Suggest</DashboardNavigatorButton>
        <DashboardNavigatorButton selected={true} routeToPage={'/user/vote'}><Checkbox/> Vote</DashboardNavigatorButton>
        <DashboardNavigatorButton selected={false} routeToPage={'/user/tax'}><FileInvoice/> Tax Overview</DashboardNavigatorButton>
        <DashboardNavigatorButton selected={false}>Logout</DashboardNavigatorButton>
      </div>,
      main: () => <DashVoteContainer title="Vote" />
    },
    {
      path: "/user/tax",
      sidebar: () => <div className="dash-nav-box-options column space-between">
        <DashboardNavigatorButton selected={false} routeToPage={'/dashboard'}>Home</DashboardNavigatorButton>
        <DashboardNavigatorButton selected={false} routeToPage={'/user/suggest'}><LightBlub/> Suggest</DashboardNavigatorButton>
        <DashboardNavigatorButton selected={false} routeToPage={'/user/vote'}><Checkbox/> Vote</DashboardNavigatorButton>
        <DashboardNavigatorButton selected={true} routeToPage={'/user/tax'}><FileInvoice/> Tax Overview</DashboardNavigatorButton>
        <DashboardNavigatorButton selected={false} >Logout</DashboardNavigatorButton>
      </div>,
      main: () => <DashTaxContainer title="Tax" />
    }
]

export default DashboardRoutes;
