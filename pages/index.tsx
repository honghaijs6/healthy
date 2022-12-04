import SiteFooter from 'components/SiteFooter'
import SiteHeader from 'components/SiteHeader'
import Head from 'next/head'

import Home from './home'



export default function Layout() {
  return (
    <div className="HEALTH-APP">
      <SiteHeader />
      <Home />

      <SiteFooter />  

    </div>
  )
}
