import styles from "../styles/modal/modalFooter.module.css";
import { modalFooterType } from "../types/modalType";


export default function ModalFooter(props: modalFooterType){
    return(
        <div className={styles.modalFooter}>
            <hr/>
            {props.children}
            <button className={styles.closeButton} onClick={props.toggle}>Close</button>
        </div>
    )
}