import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGaugeHigh, faMobileScreen, faRocket } from "@fortawesome/free-solid-svg-icons"
import Head from "next/head"

import styles from "../../styles/latin/workspace.module.css"
import Controlls from "../../compoments/controlls"

export default function WorkSpace() {
    return (
        <>
            <Head>
                <title>Workspace</title>
                <link rel="icon" type="image/jpg" href="/logo.jpg" />
                <meta charSet='utf-8' />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Head>
            <div className={styles.container}>
                <div className={styles.chars}>
                    <div className={styles.itemChar}>
                        <span>
                            <i><FontAwesomeIcon icon={faRocket} /></i>
                        </span>
                        <h3>Dynamic</h3>
                        <p>
                            Websites don{"'"}t have to be static,<br/>
                            I love making pages come to life. 
                        </p>
                    </div>
                    <div className={styles.itemChar}>
                        <span>
                            <i><FontAwesomeIcon icon={faGaugeHigh} /></i>
                        </span>
                        <h3>Speed</h3>
                        <p>Websites don{"'"}t have to be static,<br/>
                        I love making pages come to life.
                        </p>
                    </div>
                    <div className={styles.itemChar}>
                        <span>
                            <i><FontAwesomeIcon icon={faMobileScreen} /></i>
                        </span>
                        <h3>Responsive</h3>
                        <p>My layouts will work on any device,<br/> pc or mobile.</p>
                    </div>
                </div>
                <div className={styles.workContainer}>
                    <h3>My works</h3>
                </div>
            </div>
            <Controlls prefix={""}/>
        </>
    )
}