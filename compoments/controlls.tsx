import { faBriefcase, faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector, useDispatch } from 'react-redux';

import { selectNumeroPageState, setNumeroPage } from '../store/page';
import styles from '../styles/controlls.module.css';


export default function Controlls(){

    const numeroPage = useSelector(selectNumeroPageState);
    const dispatch = useDispatch()

    return (
    <div className={styles.controlls}>
        <div style={{backgroundPosition: numeroPage===0 ? "left" : "right"}} 
            onClick={() => dispatch(setNumeroPage(0))}
        >
            <i><FontAwesomeIcon icon={faHome}/></i>
        </div>
        <div style={{backgroundPosition: numeroPage===1 ? "left" : "right"}} 
            onClick={() => dispatch(setNumeroPage(1))}
        >
            <i><FontAwesomeIcon icon={faUser} /></i>
        </div>
        <div style={{backgroundPosition: numeroPage===2 ? "left" : "right"}} 
            onClick={() => dispatch(setNumeroPage(2))}>
            <i> <FontAwesomeIcon icon={faBriefcase}/></i>
        </div>
        <div style={{backgroundPosition: numeroPage===3 ? "left" : "right"}} 
            onClick={() => dispatch(setNumeroPage(3))} data-id="contact"
        >
            <i><FontAwesomeIcon icon={faEnvelope}/></i>
        </div>
    </div>
    )
}