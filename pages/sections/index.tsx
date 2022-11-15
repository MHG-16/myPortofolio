import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import path from 'path';
import { useDispatch, useSelector } from 'react-redux';

import EnPage from '../../compoments/homePAge';
import { parseCookies } from '../../helpers';
import { selectNumeroPageState, setNumeroPage } from '../../store/page';


const Home: NextPage = ({data}: any) => {
  const dispatch = useDispatch()
  const numeroPage = useSelector(selectNumeroPageState)
  numeroPage === null ? dispatch(setNumeroPage(0)) : null;
  return (
    <>
      <Head>
        <title>My portofolio</title>
      </Head>
      <EnPage {...data}/>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async({req, res}:any) =>{
  const data = parseCookies(req)
  if (res) {
      if (Object.keys(data).length === 0 && data.constructor === Object) {
        res.writeHead(301, { Location: "/" })
        res.end()
      }
  }
  const languageState = JSON.parse(data.cookies)
  const pathFile = path.join("/locales/"+ "" + languageState.langue, "common.json");
  let dataJson = {};
  await fetch("http://localhost:3000" + pathFile)
        .then(res =>  res.json())
        .then(json => {dataJson = json; console.log(dataJson)})
        .finally(() => console.log("ok"))

  return {
    props: {
      data:dataJson,
    },
  };
};



export default Home
