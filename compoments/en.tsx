import { Image } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faDocker, faGithub, faJs, faPython, faUbuntu } from "@fortawesome/free-brands-svg-icons";

import styles from "../styles/latin/darkmode.module.css";
import Controlls from "./controlls";


export default function EnPage() {
  return (
    <div className={styles.mainContent}>
      <div className={styles.headerContent}>
        <div className={styles.leftHeader}>
          <Image
            borderRadius="full"
            boxSize="150px"
            src="/profilImage.jpg"
            alt="Dan Abramov"
          />
        </div>
        <div className="right-header">
          <h2 className="name">
            {("home.desc_myself")} <span className={styles.name}>Guibane Mohamed Hedi</span>.
          </h2>
          <p>
            {("home.desc_detailed_part1")}.<br/>
            I master the different technical stages of creating a website or a web application; 
            from understanding user needs, to frontend and backend development and maintenance.
          </p>
          <button className={styles.mainbtn}>
            Download CV 
          </button>
        </div>
      </div>
      <div className={styles.skills}>
        <h2>
          Skills
        </h2>
        <ul>
          <li>Backend and frontend development of websites and web applications.</li>
          <li>Maintenance, bug fixing and improvement of web sites or applications.</li>
          <li>Set up various unit, end to end, regression und vulnerability tests</li>
          <li>Etablish best practices to ensure code quality</li>
          <li>Database administration with mysql</li>
          <li>little knowledge in marketing and SEO</li>
          <li>Adaptability, ability to work on various subjects/universes.</li>
        </ul>
      </div>
      <div className={styles.skills}>
        <h2>Informatique</h2>
        <ul>
          <li>Use Git and Github to control and follow my projects</li>
          <li>Languages and frameworks( Vanilla Js, nextJs, React, ReactNative, Flask, Flutter...)</li>
          <li>use outils to implement unit test with postMan or use frameworks of Test(pytest, jtest, ...)</li>
          <li>Continuous integration and deployment tools (Jenkins, GitLab, Docker)</li>
          <li> operating system used: Ubuntu</li>
          <li> Editor used: VsCode</li>
        </ul>
      </div>
      <div className={styles.skills}>
        <h2>Langues</h2>
        <ul>
          <li>Deutsch(courant B1, OSD test)</li>
        </ul>
      </div>
      <div className={styles.logos}>
          <i><FontAwesomeIcon icon={faJs}/></i>
          <i><FontAwesomeIcon icon={faDocker}/></i>
          <i><FontAwesomeIcon icon={faGithub}/></i>
          <i><FontAwesomeIcon icon={faPython}/></i>
          <i><FontAwesomeIcon icon={faReact}/></i>
          <i><FontAwesomeIcon icon={faUbuntu}/></i>
      </div>
      <Controlls prefix={"/en"}/>
    </div>
  );
}


