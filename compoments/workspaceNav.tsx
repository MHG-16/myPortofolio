import { faMobileScreen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

import styles from "../styles/latin/workspace.module.css"
import works from "../data/en/works";
import ListCards from "./listCards";
import { faPython, faReact } from "@fortawesome/free-brands-svg-icons";

export default function WorkspaceNav(props: PropsNavType){
  const [section, setSection] = useState("all");
  const worksInPython = works.filter((obj) => obj.language_programming === "python");
  const worksInJs = works.filter((obj) =>obj.language_programming === "next Js" || obj.language_programming === "react Js");
    return(
        <nav className={styles.nav}>
            <NavHeader section={section} setSection={setSection}/>
            <div className={styles.allSection} style={{display : section !== 'all'?"none": ""}}>
              <ListCards data={works} setImages={props.setImages} toggle={props.toggle}/>
            </div>
            <div className={styles.allSection} style={{display: section !== 'nextJs'?"none": ""}}>
              <ListCards data={worksInJs} setImages={props.setImages} toggle={props.toggle}/>
            </div>
            <div className={styles.allSection} style={{display: section !== 'python'?"none": ""}}>
              <ListCards data={worksInPython} setImages={props.setImages} toggle={props.toggle}/>
            </div>
        </nav>
    )
}

function NavHeader(props: PropsHeaderType): JSX.Element{
    return (
        <ul>
              <li className={props.section==="all"?styles.active:""} onClick={()=> props.setSection("all")}>All</li>
              <li className={props.section === "nextJs" ? styles.active: ""} onClick={() => props.setSection("nextJs")}><FontAwesomeIcon icon={faReact}/></li>
              <li className={props.section === "python" ? styles.active: ""} onClick={() => props.setSection("python")}><FontAwesomeIcon icon={faPython}/></li>
              <li><FontAwesomeIcon icon={faMobileScreen}/></li>
        </ul>
    )
}

interface PropsHeaderType{
    section: string;
    setSection: React.Dispatch<React.SetStateAction<string>>;
}

interface PropsNavType{
    toggle: () => void;
    setImages: any;

}