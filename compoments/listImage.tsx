/* eslint-disable @next/next/no-img-element */
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Box, Image } from "@chakra-ui/react";
import styles from "../styles/ListImage.module.css";

export default function ListImage( props: propsType){
    const [imageActuel, setNumeroImage] = useState(0);
    const NUMBEROFIMAGE = props.imageData.length;
    const imgs = props.imageData.map((image, index) => {
    return (<div key={index} className={styles.ImageContainer}>
        <div className={styles.imageItem} >
            {imageActuel === index && <Box boxSize={"auto"}><Image src={image.img_url} alt={image.img_alt} className={styles.images} width={"70%"} height={"90%"} /></Box>}
        </div>
    </div>)
    }
    )
    return  (<div className={styles.imgContainer}>
                <button className={styles.leftBtn} onClick={()=> setNumeroImage(imageActuel!==0 ? imageActuel - 1 : NUMBEROFIMAGE-1)}>
                    <FontAwesomeIcon icon={faArrowLeft}/>
                </button>
                {imgs}
                <button className={styles.rightBtn} onClick={()=> setNumeroImage(imageActuel !== NUMBEROFIMAGE-1 ? imageActuel + 1 : 0)}>
                    <FontAwesomeIcon icon={faArrowRight}/>
                </button>
            </div>);
}

interface propsType{
    imageData: {img_url: string, img_alt: string}[]
}