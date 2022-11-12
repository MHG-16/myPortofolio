// eslint-disable-next-line @next/next/no-document-import-in-page
import { Html, Head, Main, NextScript } from 'next/document'
import { wrapper } from '../store/store'

export default function Document() {
  return (
    <Html lang="it">
      <Head>
        <link rel="icon" type="image/jpg" href="/logo.jpg" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
