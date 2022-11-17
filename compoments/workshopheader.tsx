import { faGaugeHigh, faMobileScreen, faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "../styles/latin/workspace.module.css";
import { WordLanguage } from "../types/globalsType";

const fetcher = (...args: any) => fetch(args).then(res => res.json())

export default function Header(data: WordLanguage) {
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
          {data.workspace.DynamicDesc}
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
          {data.workspace.SpeedDesc}
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
          {data.workspace.SpeedDesc}
        </p>
      </div>
    </div>
  );
}
