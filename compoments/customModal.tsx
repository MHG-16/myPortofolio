import Modal from "../modals/Modal";
import ModalBody from "../modals/ModalBody";
import ModalFooter from "../modals/ModalFooter";
import ModalHeader from "../modals/ModalHeader";
import ListImage from "./listImage";

export default function CustomModal(props: CustomModalType){

    return (
        <Modal isOpen={props.isOpen} toggle={props.toggle}>
            <ModalHeader title={props.title} closeButton={true} toggle={props.toggle}/>
            <ModalBody>
                <ListImage imageData={props.images}/>
            </ModalBody>
            <ModalFooter toggle={props.toggle}>
                
            </ModalFooter>
        </Modal>
    )
}

interface CustomModalType{
    isOpen: boolean,
    toggle: ()=>void,
    title?: string,
    images: {img_url: string, img_alt: string}[]
}