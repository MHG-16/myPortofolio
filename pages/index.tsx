import { Image } from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/home.module.css";

const Home: NextPage = () =>   {
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
                        <li className={styles.langueSelected}><b>English</b></li>
                        <div className={styles.others}>
                            <li><hr/></li>
                            <li className={styles.active}><Image src="/uk.png" alt="uk"/>English </li>
                            <li><Image src="/france.png" alt="fr"/>Français</li>
                            <li><Image src="/italy.jpeg" alt="it"/>Italiano</li>
                            <li><Image src="/germany.jpeg" alt="de"/>Deutsch</li>
                            <li className={styles.arabeSp}>العربية <Image src="/tunisie.png" alt="tun"/></li>
                        </div>
                    </ul>
                    and press <a className={styles.startBtn}>start</a></div>
                </div>
            </>
        )
}

export default Home;