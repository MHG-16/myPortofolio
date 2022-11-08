import { useState } from "react";

export default function useModal(){
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
        console.log(isOpen)
    }

    return {
        isOpen, 
        toggle
    }
}