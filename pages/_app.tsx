import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

import { wrapper } from '../store/store';
import '../styles/globals.css'
import { appWithTranslation } from 'next-i18next';

config.autoAddCss = false

function MyApp({ Component, pageProps }: AppProps) {
  return( 
  <ChakraProvider>
    <Component {...pageProps}/>
  </ChakraProvider>
  )
}

export default wrapper.withRedux(appWithTranslation(MyApp));

