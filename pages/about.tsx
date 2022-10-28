import React, { useState } from "react";

import Controlls from "../compoments/controlls";
import styles from "../styles/latin/about.module.css";
import certifs from "../data/en/certif"
import { Image } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { setNumeroPage } from "../store/page";
import { useDispatch } from "react-redux";


export default function About(){
    const certificates = certifs;
    const [imageActuel, setNumeroImage] = useState(0)
    const dispatch = useDispatch()
    dispatch(setNumeroPage(1))
    return (
        <div className={styles.myApp}>
            <main className={styles.mainContainer}>
                <h2 >Education</h2>
                <ul>
                    <li>
                        <h3>Mathematics Bachelor</h3>
                        <h4>Juin 2019, High School Said Boubaker Moknine Tunisie</h4>
                    </li>
                    <li>
                        <h3>Degree in software engineering</h3>
                        <h4>September 2022, Highe Institute of Computer Science and Mathematics Monastir Tunisie</h4>
                    </li>
                </ul>
                <h2>Certificats</h2>
                <div>
                    <button className={styles.btns}
                    onClick={() => imageActuel!==1? setNumeroImage(0):setNumeroImage(imageActuel-1)}>
                        <i><FontAwesomeIcon icon={faArrowLeft}/></i></button>
                    {certificates.map((certif, index) => 
                    <div key={"img"+index} hidden={!(index< imageActuel+3 && index>= imageActuel)} className={styles.cardImage}>
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
                <h2>Hobbies</h2>
                <ul>
                    <li>Anime and football watching</li>
                    <li>Fishing</li>
                    <li>Books reading</li>
                </ul>
                <h2>Others informations</h2>
                <ul>
                    <li>Date of birth : Januar, 6th 2000</li>
                    <li>Place of birth: Gardone V.T , Brescia (ita)</li>
                    <li>place of residence: Moknine 5050 Tunisia</li>
                </ul>
            </main>
            <Controlls prefix={""}/>
        </div>
    )
}
