import type { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import EnPage from '../../compoments/en';
import { selectNumeroPageState, setNumeroPage } from '../../store/page';


const Home: NextPage = () => {
  const dispatch = useDispatch()
  const numeroPage = useSelector(selectNumeroPageState)
  numeroPage === null ? dispatch(setNumeroPage(0)) : null;
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

export async function getStaticProps({ locale }: any){

  return {
    props: {
      ...(await serverSideTranslations(locale, ['home'])),
    }
  }
}


export default Home
