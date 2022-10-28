import { faLinkedinIn, faSkype } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Controlls from "../compoments/controlls";

export default function Contact(){
    return (
        <>
            <main>
                <div>
                    <h2>Contact</h2>
                    <div>
                        <i><FontAwesomeIcon icon={faEnvelope}/></i>
                        hammahadi2006@gmail.com
                    </div>
                    <div>
                        <i><FontAwesomeIcon icon={faSkype}/></i>
                        Gubane Mohamed Hedi 
                    </div>
                    <div>
                        <i><FontAwesomeIcon icon={faLinkedinIn}/></i> 
                        Guibane Mohamed Hedi
                    </div>
                </div>
            </main>
            <Controlls prefix={""}/>
        </>
        )
}