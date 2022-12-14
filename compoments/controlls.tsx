import {
  faBriefcase,
  faCloudSun,
  faEnvelope,
  faHome,
  faMoon,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectNumeroPageState, setNumeroPage } from "../store/page";
import styles from "../styles/latin/controlls.module.css";
import styles2 from "../styles/latin/darkmode.module.css";
import styles3 from "../styles/latin/about.module.css";
import styles4 from "../styles/latin/workspace.module.css";
import styles5 from "../styles/latin/contact.module.css";
import { AnyAction } from "@reduxjs/toolkit";

export default function Controlls() {
  const numeroPage = useSelector(selectNumeroPageState);
  const dispatch = useDispatch();
  const router = useRouter();
  const [isDark, toggleTheme] = useState(true);
  useEffect(()=> {
    let dataDark = true;
    const root = document.querySelector(":root") as HTMLElement;
    dataDark = getComputedStyle(root).getPropertyValue('--primary-color').trim() == '#082032';
    toggleTheme(dataDark);
  }, [])
  
  return (
    <div className={isDark?styles.darkMode: styles.lightMode}>
      <div className={styles.controlls}>
        <div className={styles.themeButton} onClick={() => {changeTheme(numeroPage, dispatch ); toggleTheme(!isDark)}}>
          <i className={styles.icons}>
            <FontAwesomeIcon  style={{display: isDark?"none":""}} icon={faCloudSun}/>
            <FontAwesomeIcon  style={{display: !isDark?"none":""}} icon={faMoon}/>
          </i>
        </div>
        <div
          style={{ backgroundPosition: numeroPage === 0 ? "left" : "right" }}
          onClick={() => {
            setTimeout(() => {
              dispatch(setNumeroPage(0));
            }, 0);
            router.push("/sections/");
          }}
        >
          <i className={styles.icons}>
            <FontAwesomeIcon icon={faHome} />
          </i>
        </div>
        <div
          style={{ backgroundPosition: numeroPage === 1 ? "left" : "right" }}
          onClick={() => {
            setTimeout(() => dispatch(setNumeroPage(1)), 0);
            router.push("/sections/about/");
          }}
        >
          <i className={styles.icons}>
            <FontAwesomeIcon icon={faUser} />
          </i>
        </div>
        <div
          className={styles.icons}
          style={{ backgroundPosition: numeroPage === 2 ? "left" : "right" }}
          onClick={() => {
            setTimeout(() => dispatch(setNumeroPage(2)), 0);
            router.push("/sections/workspace");
          }}
        >
          <i>
            {" "}
            <FontAwesomeIcon icon={faBriefcase} />
          </i>
        </div>
        <div
          style={{ backgroundPosition: numeroPage === 3 ? "left" : "right" }}
          onClick={() => {
            setTimeout(() => dispatch(setNumeroPage(3)), 0);
            router.push("/sections/contact");
          }}
          data-id="contact"
        >
          <i className={styles.icons}>
            <FontAwesomeIcon icon={faEnvelope} />
          </i>
        </div>
      </div>
    </div>
  );
}
 
function changeTheme(numeroPage:number|null, dispatch: React.Dispatch<AnyAction>){
  const root = document.querySelector(":root") as HTMLElement;
  if(getComputedStyle(root).getPropertyValue('--primary-color').trim() == '#082032'){
    changeToLightMode(numeroPage, dispatch);
  }
  else {
    changeToDarkMode(numeroPage,dispatch)
  }
}


function changeToDarkMode(numeroPage: number|null, dispatch: React.Dispatch<AnyAction>){
  const ParentDivOfControlls = document.querySelector(`.${styles.lightMode}`) as HTMLDivElement;
  let root = document.querySelector(":root") as HTMLElement;
  ParentDivOfControlls.className = `${styles.darkMode}`;
  root.style.setProperty('--primary-color','#082032');
  if (numeroPage === 0){
    const ParentDiv = document.querySelector(`.${styles2.lightMode}`) as HTMLDivElement;
    ParentDiv.className = `${styles2.darkMode}`
  }
  else if(numeroPage === 1){
    const ParentDiv = document.querySelector(`.${styles3.lightMode}`) as HTMLDivElement;
    ParentDiv.className = `${styles3.darkMode}`
  }
  else if(numeroPage === 2){
    const ParentDiv = document.querySelector(`.${styles4.lightMode}`) as HTMLDivElement;
    ParentDiv.className = `${styles4.darkMode}`
  }
  else{
    const ParentDiv = document.querySelector(`.${styles5.lightMode}`) as HTMLDivElement;
    ParentDiv.className = `${styles5.darkMode}`
  }
}

function changeToLightMode(numeroPage: number|null, dispatch: React.Dispatch<AnyAction>){
  const ParentDivOfControlls = document.querySelector(`.${styles.darkMode}`) as HTMLDivElement;
  let root = document.querySelector(":root") as HTMLElement;
  ParentDivOfControlls.className = `${styles.lightMode}`;
  root.style.setProperty('--primary-color','#FFF5E4');
  if (numeroPage === 0){
    const ParentDiv = document.querySelector(`.${styles2.darkMode}`) as HTMLDivElement;
    ParentDiv.className = `${styles2.lightMode}`
  }
  else if(numeroPage === 1){
    const ParentDiv = document.querySelector(`.${styles3.darkMode}`) as HTMLDivElement;
    ParentDiv.className = `${styles3.lightMode}`
  }
  else if(numeroPage === 2){
    const ParentDiv = document.querySelector(`.${styles4.darkMode}`) as HTMLDivElement;
    ParentDiv.className = `${styles4.lightMode}`
  }
  else{
    const ParentDiv = document.querySelector(`.${styles5.darkMode}`) as HTMLDivElement;
    ParentDiv.className = `${styles5.lightMode}`
  }
}

