import { Image } from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";
import Router from "next/router";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { CookieSetOptions } from "universal-cookie";
import styles from "../styles/home.module.css";

const Home: NextPage = () =>   {
    const [langue, setLanguageState] = useState("en");
    const [, setCookies] = useCookies(["langState"])
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
                </Head>
                <div className={styles.container + " " + styles.darkMode}>
                    <div className={styles.tiere}>
                        <span className={styles.dino}></span>
                    </div>
                    <div className={styles.startLink}>choose the langue
                    <ul className={styles.langues}>
                        <li className={styles.langueSelected} id={langue === "ar" ? styles.arabelg : ""}><b>{langueActuel()}</b></li>
                        <div className={styles.others}>
                            <li><hr/></li>
                            <li onClick={() => setLanguageState("en")} className={ langue === "en" ? styles.active : "" }><Image src="/uk.png" alt="uk"/>English </li>
                            <li onClick={() => setLanguageState("fr")} className={ langue === "fr" ? styles.active : "" }><Image src="/france.png" alt="fr"/>Français</li>
                            <li onClick={() => setLanguageState("it")} className={ langue === "it" ? styles.active : "" }><Image src="/italy.jpeg" alt="it"/>Italiano</li>
                            <li onClick={() => setLanguageState("de")} className={ langue === "de" ? styles.active : "" }><Image src="/germany.jpeg" alt="de"/>Deutsch</li>
                            <li onClick={() => setLanguageState("ar")} className={ langue === "ar" ? styles.active : "" } id={styles.arabeSp}>العربية <Image src="/tunisie.png" alt="tun"/></li>
                        </div>
                    </ul>
                    and press 
                    <a className={styles.startBtn} onClick={() =>goTohome(langue, setCookies)}>start</a></div>
                </div>
            </>
        )
}


function goTohome(langue: string, setCookies: (name: "langState", value: any, options?: CookieSetOptions | undefined) => void) {
    setCookies("langState", langue, {
        path: "/",
        maxAge: 3600, // Expires after 1hr
        sameSite: true,
    })
    Router.push("/"+"sections");
}

export default Home;