import SiteFooter from 'components/SiteFooter'
import SiteHeader from 'components/SiteHeader'
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
