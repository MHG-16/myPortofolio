/* eslint-disable @next/next/no-img-element */
import Image from "next/image"
import React from "react";
import useModal from "../hooks/ModalHooks";

export default function ListCards(props: ListCardsProps){
    return (
        props.data.map((obj, index) => 
        <span key={"img" + index} onClick={() => {props.toggle(); props.setImages({title: obj.name, images: obj.imgs})}}>
                  <img
                    src={obj.img_haupt.img_url}
                    alt={obj.img_haupt.img_alt}
                  />
        </span>)
    )
}

interface ListCardsProps {
    data:{name: string, imgs:{img_url: string, img_alt: string}[], img_haupt:{img_url: string, img_alt: string}}[];
    setImages: React.Dispatch<React.SetStateAction<{title: string, images: {img_url: string, img_alt: string}[]}>>;
    toggle: () => void;
}