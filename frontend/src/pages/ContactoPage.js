import React, { useState } from 'react';
import axios from 'axios';
import HeaderPage from '../components/layout/HeaderPage';
import Footer from '../components/layout/Footer';
import terrazaDiseño from '../assets/img/destacadaTerrazaConDiseño.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faXTwitter,
    faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import '../styles/components/pages/ContactoPage.css';

const ContactoPage = (props) => {
    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: '',
        opciones: '',
        presupuesto: '',
        contacto: '',
    };
    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value); // Te muestra el "name" y "value" del botón seleccionado.
        setFormData((oldData) => ({
            ...oldData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMsg('');
        setSending(true);
        console.log(formData);
        const { nombre, email, telefono, mensaje, opciones, presupuesto } =
            formData;

        if (
            nombre === '' ||
            email === '' ||
            telefono === '' ||
            mensaje === '' ||
            opciones === '' ||
            presupuesto === ''
        ) {
            setMsg('Por favor completa todos los campos obligatorios.');
            setSending(false);
        } else {
            const response = await axios.post(
                'http://localhost:3001/api/contacto',
                formData
            );
            setSending(false);
            setMsg(response.data.message);
            if (response.data.error === false) {
                setFormData(initialForm);
            }
        }
    };

    return (
        <>
            <FontAwesomeIcon />
            <HeaderPage />
            <main className="contenedor seccion borde">
                <h1 className=" text-uppercase">Contacto</h1>
                <img
                    className="img-contacto"
                    src={terrazaDiseño}
                    alt="Imagen de portada contacto"
                />

                <h3>Completa el formulario de contacto</h3>
                <div className="contactos">
                    <div className="contacto">
                        <form
                            action="/contacto"
                            method="post"
                            className="formulario"
                            onSubmit={handleSubmit}>
                            <fieldset>
                                <legend>Informacion Personal</legend>
                                <label for="nombre">Nombre (*)</label>
                                <input
                                    type="text"
                                    placeholder="Tu nombre"
                                    name="nombre"
                                    value={formData.nombre}
                                    onChange={handleChange}
                                />
                                <label for="email">E-mail (*)</label>
                                <input
                                    type="email"
                                    placeholder="Correo@correo.com"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                <label for="telefono">Telefono (*)</label>
                                <input
                                    type="text"
                                    placeholder="+54 9 223 5131672"
                                    name="telefono"
                                    value={formData.telefono}
                                    onChange={handleChange}
                                />
                                <label for="mensaje">Mensaje (*)</label>
                                <textarea
                                    name="mensaje"
                                    placeholder="Escribe tu mensaje"
                                    value={formData.mensaje}
                                    onChange={handleChange}></textarea>
                            </fieldset>
                            <fieldset>
                                <legend>
                                    Informacion sobre la propiedad que desea
                                    consultar
                                </legend>
                                <label for="opciones">Vende o Compra (*)</label>
                                <select
                                    name="opciones"
                                    value={formData.opciones}
                                    onChange={handleChange}>
                                    <option value="" disabled selected>
                                        -- Seleccione --
                                    </option>
                                    <option value="compra">Compra</option>
                                    <option value="venta">Venta</option>
                                </select>
                                <label for="presupuesto">
                                    Precio o Presupuesto (*)
                                </label>
                                <input
                                    type="number"
                                    placeholder="Tu precio o Presupuesto"
                                    name="presupuesto"
                                    value={formData.presupuesto}
                                    onChange={handleChange}
                                />
                            </fieldset>

                            <fieldset>
                                <legend>Formas de Contacto</legend>
                                <p>Como desea ser contactado?</p>
                                <div className="forma-contacto">
                                    <label for="contacto-telefono">
                                        Telefono
                                    </label>
                                    <input
                                        name="contacto"
                                        type="radio"
                                        value="telefono"
                                        checked={
                                            formData.contacto === 'telefono'
                                        }
                                        onChange={handleChange}
                                    />
                                    <label for="contacto-email">E-mail</label>
                                    <input
                                        name="contacto"
                                        type="radio"
                                        value="email"
                                        checked={formData.contacto === 'email'}
                                        onChange={handleChange}
                                    />
                                </div>
                            </fieldset>
                            {sending ? (
                                <p
                                    className="fw-bold fs-3 alert alert-light w-50 mb-3"
                                    role="alert">
                                    Enviando...
                                </p>
                            ) : null}
                            {msg ? (
                                <p className="fw-bold fs-3 alert alert-danger w-50 mb-3">
                                    {msg}
                                </p>
                            ) : null}
                            <input
                                type="submit"
                                value="enviar"
                                className="boton-verde"></input>
                        </form>
                    </div>
                    <div className="datos">
                        <h2>Otras vias de comunicaciones</h2>
                        <p>
                            Tambien puede contactarse con nosotros usando los
                            siguientes medios
                        </p>
                        <ul>
                            <li>whatsapp : +54 9 223 5131672</li>
                            <li>Email : contacto@bienesraices.com.ar</li>
                            <li>
                                <div className="redes">
                                    <i>
                                        <FontAwesomeIcon icon={faFacebook} />
                                    </i>
                                    <i>
                                        <FontAwesomeIcon icon={faXTwitter} />
                                    </i>
                                    <i>
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </i>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};
export default ContactoPage;
