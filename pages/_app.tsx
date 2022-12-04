
import 'styles/globals.scss';

import 'styles/achievement.scss';
import 'styles/myGraph.css';
import 'styles/myRecordData.css';
import 'styles/myDiary.css';
import 'styles/myColumn.css';
import 'styles/responsive.scss';


import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
