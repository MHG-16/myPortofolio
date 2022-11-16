import React, { useEffect, useState } from "react";

import Controlls from "../../compoments/controlls";
import styles from "../../styles/latin/about.module.css";
import certifs from "../../data/en/certif"
import { Image } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { selectNumeroPageState, setNumeroPage } from "../../store/page";
import { useDispatch, useSelector } from "react-redux";
import Head from "next/head";
import path from "path";
import { WordLanguage } from "../../types/globalsType";
import { GetServerSideProps } from "next";
import { parseCookies } from "../../helpers";


export default function About(dataJson: WordLanguage){
    const certificates = certifs;
    const [imageActuel, setNumeroImage] = useState(0)
    const dispatch = useDispatch()
    const numeroPage = useSelector(selectNumeroPageState)
    numeroPage === null ? dispatch(setNumeroPage(1)) : null;
    const [isDark, toggleTheme] = useState(true);
    useEffect(()=> {
    let dataDark = true;
    const root = document.querySelector(":root") as HTMLElement;
    dataDark = getComputedStyle(root).getPropertyValue('--primary-color').trim() == '#082032';
    toggleTheme(dataDark);
    }, [])
  return (
    <div className={isDark?styles.darkMode:styles.lightMode}>
            <Head>
                <title>About</title>
            </Head>
            <div className={styles.myApp}>
                <main className={styles.mainContainer}>
                    <h2 >{dataJson.about.EducationTitle}</h2>
                    <ul>
                        <li>
                            <h3>{dataJson.about.BachelorTitle}</h3>
                            <h4>{dataJson.about.BachelorDate}</h4>
                        </li>
                        <li>
                            <h3>{dataJson.about.LicenseTitle}</h3>
                            <h4>{dataJson.about.LicenseDate}</h4>
                        </li>
                    </ul>
                    <h2>{dataJson.about.certificatesTitle}</h2>
                    <div >
                        <button className={styles.btns}
                        onClick={() => imageActuel!==1? setNumeroImage(0):setNumeroImage(imageActuel-1)}>
                            <i><FontAwesomeIcon icon={faArrowLeft}/></i></button>
                        {certificates.map((certif, index) => 
                        <div key={"img"+index} hidden={!(index< imageActuel+3 && index>= imageActuel)} className={styles["CardItem__00"+(index-imageActuel)]}>
                            <Image 
                                src={certif.image_url}
                                alt={certif.image_alt}
                            />
                            <h3>{certif.name}</h3>
                        </div>
                        )}
                        <button className={styles.btns}
                        onClick={()=> imageActuel+3 !== certificates.length ? setNumeroImage(imageActuel+1): setNumeroImage(0)}
                        ><i><FontAwesomeIcon icon={faArrowRight}/></i></button>
                    </div>
                </main>
                <Controlls />
            </div>
        </div>
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
    let dataJson ={}
    const pathFile = path.join("/locales/"+ "" + languageState.langue, "common.json");
    await fetch("http://localhost:3000" + pathFile)
          .then(res =>  res.json())
          .then(json => {dataJson = json; console.log(pathFile)})
          .finally(() => console.log("ok"))
  
    return {
      props: {
        ...dataJson,
      },
    };
};
