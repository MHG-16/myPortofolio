import {
  faBriefcase,
  faCloudMoon,
  faCloudSun,
  faEnvelope,
  faHome,
  faSun,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectNumeroPageState, setNumeroPage } from "../store/page";
import styles from "../styles/latin/controlls.module.css";

export default function Controlls() {
  const numeroPage = useSelector(selectNumeroPageState);
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <>
      <div className={styles.controlls}>
        <div
          style={{ backgroundPosition: numeroPage === 0 ? "left" : "right" }}
          onClick={() => {
            setTimeout(() => {
              dispatch(setNumeroPage(0));
            }, 250);
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
            setTimeout(() => dispatch(setNumeroPage(1)), 250);
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
            setTimeout(() => dispatch(setNumeroPage(2)), 250);
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
            setTimeout(() => dispatch(setNumeroPage(3)), 250);
            router.push("/sections/contact");
          }}
          data-id="contact"
        >
          <i className={styles.icons}>
            <FontAwesomeIcon icon={faEnvelope} />
          </i>
        </div>
      </div>
    </>
  );
}
