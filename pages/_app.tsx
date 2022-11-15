import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

import { wrapper } from '../store/store';
import '../styles/globals.css'
import Head from 'next/head';
import { CookiesProvider } from 'react-cookie';
import { Provider } from 'react-redux';

config.autoAddCss = false

function MyApp({ Component, ...rest }: AppProps) {
  const {store, props} = wrapper.useWrappedStore(rest);
  return( 
  <ChakraProvider>
    <Head>
        <meta name="viewport" content="viewport-fit=cover" />
    </Head>
    <CookiesProvider>
      <Provider store={store}>
        <Component {...props.pageProps}/>
      </Provider>
    </CookiesProvider>
  </ChakraProvider>
  )
}

export default MyApp;

