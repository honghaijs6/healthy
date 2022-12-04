import SiteFooter from 'components/SiteFooter'
import Head from 'next/head'

import Home from './home'



export default function Layout() {
  return (
    <div className="HEALTH-APP">
      
      <Home />

      <SiteFooter />

    </div>
  )
}
