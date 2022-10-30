import { Image } from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../styles/home.module.css";

const Home: NextPage = () =>   {
    const [langue, setLangue] = useState("en");
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
                        <li className={styles.langueSelected}><b>{langueActuel()}</b></li>
                        <div className={styles.others}>
                            <li><hr/></li>
                            <li onClick={() => setLangue("en")} className={ langue === "en" ? styles.active : "" }><Image src="/uk.png" alt="uk"/>English </li>
                            <li onClick={() => setLangue("fr")} className={ langue === "fr" ? styles.active : "" }><Image src="/france.png" alt="fr"/>Français</li>
                            <li onClick={() => setLangue("it")} className={ langue === "it" ? styles.active : "" }><Image src="/italy.jpeg" alt="it"/>Italiano</li>
                            <li onClick={() => setLangue("de")} className={ langue === "de" ? styles.active : "" }><Image src="/germany.jpeg" alt="de"/>Deutsch</li>
                            <li onClick={() => setLangue("ar")} className={ langue === "ar" ? styles.active : "" } id={styles.arabeSp}>العربية <Image src="/tunisie.png" alt="tun"/></li>
                        </div>
                    </ul>
                    and press 
                    <a className={styles.startBtn} onClick={() =>router.push("/"+langue)}>start</a></div>
                </div>
            </>
        )
}

export default Home;