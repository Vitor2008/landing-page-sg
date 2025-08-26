import './BtnContact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import appsettings from '../../../appsettings.json'

const BtnContact = () => {

    return (
        <a className="botao-whatsapp animated fadeInUp" href={`https://api.whatsapp.com/send?phone=55${appsettings.Contact.whatsapp}`} target="_blank">
            <FontAwesomeIcon icon={faWhatsapp}></FontAwesomeIcon>
        </a>
    )
}

export default BtnContact