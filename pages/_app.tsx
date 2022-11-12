import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

import { wrapper } from '../store/store';
import '../styles/globals.css'
import Head from 'next/head';
import { CookiesProvider } from 'react-cookie';

config.autoAddCss = false

function MyApp({ Component, pageProps }: AppProps) {
  return( 
  <ChakraProvider>
    <Head>
        <meta name="viewport" content="viewport-fit=cover" />
    </Head>
    <CookiesProvider>
      <Component {...pageProps}/>
    </CookiesProvider>
  </ChakraProvider>
  )
}

export default wrapper.withRedux(MyApp);

