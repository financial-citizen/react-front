import { lazy } from 'react'

import {
  DashboardPage,
  LandingPage,
  LostPage,
  SignUpPage
} from '../containers/index.containers'

// const CheckoutContainer = lazy(() => import ('../containers/checkout/checkout.container'))

const routes = [
  {
    path: `/user/suggest`,
    component: DashboardPage,
    title: "Suggest",
    needsAuth: false
  },
  {
    path: `/user/vote`,
    component: DashboardPage,
    title: "Vote",
    needsAuth: false
  },
  {
    path: `/user/tax`,
    component: DashboardPage,
    title: "Tax",
    needsAuth: false
  },
  {
    path: `/dashboard`,
    component: DashboardPage,
    title: "Dashboard",
    needsAuth: false
  },
  {
    path: `/signup`,
    component: SignUpPage,
    title: "Sign up",
    needsAuth: false
  },
  {
    path: `/lost`,
    component: LostPage,
    title: "Lost",
    needsAuth: false,
  },
  {
    path: `/`,
    component: LandingPage,
    title: "Financial Citizen",
    needsAuth: false
  }
]

export default routes;
