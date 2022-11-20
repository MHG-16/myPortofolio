import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";

import styles from "../../styles/ar/homePage.module.css";


export default function HomePage(){
    const router = useRouter();
    return <>
        <div className={styles.container}>
            تَرْجَمَة الصفحات إلى العربية في حالة الصيانة و الرجاء الذهاب إلى الصفحة الرئيسية و الاختيار اللغة الأخرى 
            <br/> 
            <button onClick={()=> router.push("/")}><FontAwesomeIcon icon={faHome}/></button> 
        </div>
    </>
}