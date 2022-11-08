import { modalType } from "../types/modalType";
import styles from "../styles/modal/modal.module.css";
import React from "react";




export default function Modal( props : modalType){
    return (
        <>
            {props.isOpen && 
                <div className={styles.modal_overlay} onClick={props.toggle}>
                    <div className={styles.modalBox} onClick={(evt) => {evt.stopPropagation()}}>
                    {props.children}
                    </div>
                </div>
            }
        </>
    )
}