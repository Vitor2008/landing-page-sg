import React from 'react'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope  } from '@fortawesome/free-regular-svg-icons';
import { faWhatsapp  } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {

    return (
        <div className='contact'>
            <div className="contact-col">
                <h3 className='text-3xl lg:text-4xl font-bold mb-4'>Fale Conosco</h3>
                <p className='text-lg text-gray-600'>Estamos prontos para ajudar sua empresa a implementar as melhores práticas
                de segurança do trabalho. Entre em contato e solicite seu orçamento sem compromisso.
                </p>
                <ul>
                    <li className='text-lg text-gray-600'><FontAwesomeIcon icon={faEnvelope} className='h-6 w-6 text-blue-600'></FontAwesomeIcon> contato@teste.com.br</li>
                    <li className='text-lg text-gray-600'><FontAwesomeIcon icon={faWhatsapp} className='h-6 w-6 text-blue-600'></FontAwesomeIcon> 65 9 9999-9999</li>
                    <li className='text-lg text-gray-600'><FontAwesomeIcon icon={faLocation} className='h-6 w-6 text-blue-600'></FontAwesomeIcon> Cuiabá - MT</li>
                </ul>
            </div>
            <div className="contact-col">
                <form>
                    <label>Nome Completo</label>
                    <input type='text' name='name' placeholder='Seu nome completo' required></input>
                    <label>Telefone</label>
                    <input type='tel' name='phone' placeholder='(65) 99999-9999' required></input>
                    <label>E-mail</label>
                    <input type='email' name='email' placeholder='seu@email.com' required></input>
                    <label>Mensagem</label>
                    <textarea name='message' rows={4} placeholder='Conte-nos sobre sua empresa e suas necessidades...' required></textarea>
                    <button className='btn-form'>Enviar</button>
                </form>
                <span></span>
            </div>
        </div>
    )
}

export default Contact