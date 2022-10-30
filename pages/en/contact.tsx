import { faLinkedinIn, faSkype } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  ReCAPTCHA  from "react-google-recaptcha";

import styles from "../../styles/latin/contact.module.css";
import Controlls from "../../compoments/controlls";
import React, { useRef, useState } from "react";
import { selectNumeroPageState, setNumeroPage } from "../../store/page";
import { useDispatch, useSelector } from "react-redux";
import Head from 'next/head';

export default function Contact() {
  const [verified, setverified] = useState(false);
  const dispatch = useDispatch()
  const numeroPage = useSelector(selectNumeroPageState)
  numeroPage === null ? dispatch(setNumeroPage(3)) : null;
  const captchaRef = useRef(null)
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="my portofolio" />
        <link rel="icon" type="image/jpg" href="/logo.jpg" />
        <meta charSet='utf-8' />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>
      <div className={styles.contactContent}>
        <main className={styles.contactContainer}>
          <div className={styles.rightPartie}>
            <h2>Contact</h2>
            <div className={styles.contactField}>
              <i>
                <FontAwesomeIcon icon={faEnvelope} />
              </i>
              hammahadi2006@gmail.com
            </div>
            <div className={styles.contactField}>
              <i>
                <FontAwesomeIcon icon={faSkype} />
              </i>
              Guibane Mohamed Hedi
            </div>
            <div className={styles.contactField}>
              <i>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </i>
              Guibane Mohamed Hedi
            </div>
          </div>
          <div className={styles.leftPartie}>
            <div className={styles.screen}>
              <div className={styles.imageContent}>
                <h3>Send your feedback</h3>
                <FontAwesomeIcon icon={faMessage} />
              </div>
              <div>
                <form>
                  <input type="text" placeholder="Your name" required />
                  <input type="email" placeholder="Your email" required />
                  <textarea placeholder="Your message......" required />
                  <ReCAPTCHA style={{marginTop: "2em"}} theme="dark" sitekey={"6LcOE74iAAAAABHd_aFKxUtvMAMthA_5gWQ6SUE1"} ref={captchaRef}/>
                  <button type="submit" >Send a message</button>
                </form>
              </div>
            </div>
          </div>
        </main>
        <Controlls prefix={"/en"} />
      </div>
    </>
  );
}
