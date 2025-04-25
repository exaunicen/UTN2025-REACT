import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';

function CardPage(props) {
    const [loading, setLoading] = useState(false);
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const cargarPropiedades = async () => {
            setLoading(true);
            const response = await axios.get(
                'http://localhost:3001/api/propiedades'
            );
            setCards(response.data);
            setLoading(false);
        };
        cargarPropiedades();
    }, []);

    return (
        <div className="row mb-2">
            {loading ? (
                <p>Cargando...</p>
            ) : (
                cards.map((item) => (
                    <div className="col-md-4" key={item.id}>
                        <Card
                            title={item.titulo}
                            subtitle={item.subtitulo}
                            imagen={item.imagen}
                            precio={item.precio}
                        />
                    </div>
                ))
            )}
        </div>
    );
}
export default CardPage;
