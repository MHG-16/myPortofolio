import Head from "next/head";
import { useState } from "react";

import useModal from "../../hooks/ModalHooks";
import styles from "../../styles/latin/workspace.module.css";
import Controlls from "../../compoments/controlls";
import CustomModal from "../../compoments/customModal";
import Header from "../../compoments/workshopheader";
import WorkspaceNav from "../../compoments/workspaceNav";
import path from "path";
import { parseCookies } from "../../helpers";
import { GetServerSideProps } from "next";
import { useDispatch, useSelector } from "react-redux";
import { selectNumeroPageState, setNumeroPage } from "../../store/page";

export default function WorkSpace({dataJson} : any) {
  const {isOpen, toggle} = useModal();
  const [images, setImages] = useState<any>();
  const dispatch = useDispatch()
  const numeroPage = useSelector(selectNumeroPageState)
  numeroPage === null ? dispatch(setNumeroPage(2)) : null;
  return (
    <div className={styles.darkMode}>
      <Head>
        <title>Workspace</title>
      </Head>
      <div className={styles.container}>
        <Header {...dataJson}/>
        <div className={styles.workContainer}>
          <h3>{dataJson.workspace.myWorksTitle}</h3>
          <WorkspaceNav setImages={setImages} toggle={toggle}/>
        </div>
      </div>
      <Controlls />
      {isOpen &&<CustomModal toggle={toggle} isOpen={isOpen} title={images.title} images={images.images}/>}
    </div>
  );
}


export const getServerSideProps: GetServerSideProps = async({req, res}:any) =>{
  const data = parseCookies(req)
  if (res) {
      if (Object.keys(data).length === 0 && data.constructor === Object) {
        res.writeHead(301, { Location: "/" })
        res.end()
      }
  }
  const languageState = data.langState
  let dataJson ={}
  const pathFile = path.join("/locales/"+ "" + languageState, "common.json");
  await fetch("http://localhost:3000" + pathFile)
        .then(res =>  res.json())
        .then(json => {dataJson = json; console.log(dataJson)})
        .finally(() => console.log("ok"))

  return {
    props: {
      dataJson,
    },
  };
};
