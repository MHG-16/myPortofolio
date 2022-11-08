import { modalHeaderType } from "../types/modalType";
import  styles from "../styles/modal/modalHeader.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";


export default function ModalHeader(props: modalHeaderType ){
    return (
        <div className={styles.modalHeaderContainer}>
            <span className={styles.modalHeader}>
                <label>{props.title}</label>
                {props.closeButton && <button className={styles.closeButton} onClick={props.toggle}>
                        <i><FontAwesomeIcon icon={faClose}/></i>
                    </button>}
            </span>
            {props.children}
            <hr/>
        </div>
    )
}