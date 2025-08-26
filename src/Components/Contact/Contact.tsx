import React, { useRef } from 'react'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import appsettings from '../../../appsettings.json'
import formatTel from '../../Helper/FormatTel';

const Contact = () => {

    const telefoneFormatado = formatTel({ telefone: appsettings.Contact.whatsapp });

    const formRef = useRef<HTMLFormElement>(null);
    const [result, setResult] = React.useState("");

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setResult("Enviando....");
        const formData = new FormData(event.currentTarget);

        formData.append("access_key", import.meta.env.VITE_WEB3FORMS_TOKEN);

        const response = await fetch(`${appsettings.api.Web3Forms.submitUrl}`, {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Enviado com sucesso!");
            formRef.current?.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className='contact'>
            <div className="contact-col">
                <h3 className='text-3xl lg:text-4xl font-bold mb-4'>Fale Conosco</h3>
                <p className='text-lg text-gray-600'>Estamos prontos para ajudar sua empresa a implementar as melhores práticas
                    de segurança do trabalho. Entre em contato e solicite seu orçamento sem compromisso.
                </p>
                <ul>
                    <li className='text-lg text-gray-600'><FontAwesomeIcon icon={faEnvelope} className='h-6 w-6 color-primary'></FontAwesomeIcon> {appsettings.Contact.email}</li>
                    <li className='text-lg text-gray-600'><FontAwesomeIcon icon={faWhatsapp} className='h-6 w-6 color-primary'></FontAwesomeIcon> {telefoneFormatado}</li>
                    <li className='text-lg text-gray-600'><FontAwesomeIcon icon={faLocation} className='h-6 w-6 color-primary'></FontAwesomeIcon> Cuiabá - MT</li>
                </ul>
            </div>
            <div className="contact-col">
                <form ref={formRef} onSubmit={onSubmit}>
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
                <span>{result}</span>
            </div>
        </div>
    )
}

export default Contact