import { Image } from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectLanguageState, setLanguageState } from "../store/language";
import styles from "../styles/home.module.css";

const Home: NextPage = () =>   {
    const langue = useSelector(selectLanguageState);
    const dispatch = useDispatch();
    const router = useRouter();
    const langueActuel = ():string => {
        if (langue === "en") {
            return "English"
        }
        else if (langue === "fr") {
            return "Français"
        }
        else if (langue === "it") {
            return "Italiano"
        }
        else if (langue === "de") {
            return "deutsch"
        }
        else {
            return "العربية"
        }
    }
    return (<>
                <Head>
                    <title>Home</title>
                    <meta name="description" content="Home" />
                    <link rel="icon" type="image/jpg" href="/logo.jpg" />
                    <meta charSet='utf-8' />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                </Head>
                <div className={styles.container}>
                    <div className={styles.tiere}>
                        <span className={styles.dino}></span>
                    </div>
                    <div className={styles.startLink}>choose the langue
                    <ul className={styles.langues}>
                        <li className={styles.langueSelected} id={langue === "ar" ? styles.arabelg : ""}><b>{langueActuel()}</b></li>
                        <div className={styles.others}>
                            <li><hr/></li>
                            <li onClick={() => dispatch(setLanguageState("en"))} className={ langue === "en" ? styles.active : "" }><Image src="/uk.png" alt="uk"/>English </li>
                            <li onClick={() => dispatch(setLanguageState("fr"))} className={ langue === "fr" ? styles.active : "" }><Image src="/france.png" alt="fr"/>Français</li>
                            <li onClick={() => dispatch(setLanguageState("it"))} className={ langue === "it" ? styles.active : "" }><Image src="/italy.jpeg" alt="it"/>Italiano</li>
                            <li onClick={() => dispatch(setLanguageState("de"))} className={ langue === "de" ? styles.active : "" }><Image src="/germany.jpeg" alt="de"/>Deutsch</li>
                            <li onClick={() => dispatch(setLanguageState("ar"))} className={ langue === "ar" ? styles.active : "" } id={styles.arabeSp}>العربية <Image src="/tunisie.png" alt="tun"/></li>
                        </div>
                    </ul>
                    and press 
                    <a className={styles.startBtn} onClick={() =>router.push("/"+"sections")}>start</a></div>
                </div>
            </>
        )
}

export default Home;