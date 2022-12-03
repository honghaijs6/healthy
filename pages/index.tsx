import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Home from './home'



export default function Layout() {
  return (
    <div className="HEALTH-APP">
      <Head>
        <title>Health App</title>
        <meta name="description" content="Health App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Home />
      </main>
      {/*<footer className='site-footer'>
          adasd
      </footer>
      */}
    </div>
  )
}
