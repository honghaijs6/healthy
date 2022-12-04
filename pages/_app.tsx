
import 'styles/globals.css';
import 'styles/myGraph.css';
import 'styles/myRecordData.css';
import 'styles/myDiary.css';
import 'styles/myColumn.css';

import Head from "next/head"
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>
          {"Health App | Home" }
        </title>
        <meta charSet="utf-8" />

        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" href="logo.png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
