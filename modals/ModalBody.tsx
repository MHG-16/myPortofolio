import { AuxProps } from "../types/globalsType";

export default function modalBody({children}: AuxProps){
    return (
        <div className="modal-body">
            {children}
        </div>
    )
}
