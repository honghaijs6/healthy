
import 'styles/globals.css';
import 'styles/myGraph.css';
import 'styles/myRecordData.css';
import 'styles/myDiary.css';
import 'styles/myColumn.css';

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
