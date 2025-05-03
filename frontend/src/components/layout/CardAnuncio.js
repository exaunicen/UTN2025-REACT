import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/components/layout/CardAnuncio.css'; // Asegúrate de tener este archivo CSS

function CardAnuncio() {
    const { id } = useParams(); // Captura el ID desde la URL
    const [loading, setLoading] = useState(false);
    const [anuncio, setAnuncio] = useState(null);

    useEffect(() => {
        const cargarAnuncio = async () => {
            setLoading(true);
            try {
                console.log(id);
                const response = await axios.get(
                    `http://localhost:3001/api/anuncio/${id}`
                );

                setAnuncio(response.data);
            } catch (error) {
                console.error('Error al obtener el anuncio:', error);
            }
            setLoading(false);
        };

        cargarAnuncio();
    }, [id]);

    return (
        <div>
            {loading ? (
                <p>Cargando...</p>
            ) : anuncio ? (
                <div className="borde">
                    <h2>{anuncio.titulo}</h2>
                    <img
                        src={anuncio.imagen}
                        alt="Imagen del anuncio"
                        className=" mb-3"
                    />
                    <h3 className=" text-center">{anuncio.subtitulo}</h3>
                    <p className="fw-bold">Precio U$A : {anuncio.precio}</p>
                    <p className="fw-bold">
                        Descripción:{' '}
                        <span className=" fw-normal fst-italic">
                            {anuncio.descripcion}
                        </span>
                    </p>
                    <p className=" fw-bold">Fecha de Ingreso: {anuncio.alta}</p>
                    <p className=" fw-bold">
                        Vendedor:{' '}
                        <span className="fst-italic">
                            {anuncio.nombre} {anuncio.apellido}{' '}
                        </span>
                    </p>
                    <p className=" fw-bold">Contacto: {anuncio.email}</p>
                </div>
            ) : (
                <p>No se encontró el anuncio.</p>
            )}
        </div>
    );
}

export default CardAnuncio;
