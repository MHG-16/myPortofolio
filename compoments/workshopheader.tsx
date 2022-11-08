import { faGaugeHigh, faMobileScreen, faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "../styles/latin/workspace.module.css";

export default function Header() {
  return (
    <div className={styles.chars}>
      <div className={styles.itemChar}>
        <span>
          <i>
            <FontAwesomeIcon icon={faRocket} />
          </i>
        </span>
        <h3>Dynamic</h3>
        <p>
          Websites don{"'"}t have to be static,
          <br />I love making pages come to life.
        </p>
      </div>
      <div className={styles.itemChar}>
        <span>
          <i>
            <FontAwesomeIcon icon={faGaugeHigh} />
          </i>
        </span>
        <h3>Speed</h3>
        <p>
          Websites don{"'"}t have to be static,
          <br />I love making pages come to life.
        </p>
      </div>
      <div className={styles.itemChar}>
        <span>
          <i>
            <FontAwesomeIcon icon={faMobileScreen} />
          </i>
        </span>
        <h3>Responsive</h3>
        <p>
          My layouts will work on any device,
          <br /> pc or mobile.
        </p>
      </div>
    </div>
  );
}
