import './BtnContact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const BtnContact = () => {
    return (
        <a className="botao-whatsapp animated fadeInUp" href="https://api.whatsapp.com/send?phone=659992565297" target="_blank">
            <FontAwesomeIcon icon={faWhatsapp}></FontAwesomeIcon>
        </a>
    )
}

export default BtnContact