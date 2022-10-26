import type { NextPage } from 'next';
import Head from 'next/head';
import EnPage from '../compoments/en';


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>My portofolio</title>
        <meta name="description" content="my portofolio" />
        <link rel="icon" type="image/jpg" href="/logo.jpg" />
        <meta charSet='utf-8' />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>
      <EnPage />
    </>
  )
}

export default Home
