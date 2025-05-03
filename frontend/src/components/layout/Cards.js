import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';

function Cards(props) {
    const [loading, setLoading] = useState(false);
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const cargarPropiedades = async () => {
            setLoading(true);
            const response = await axios.get(
                'http://localhost:3001/api/propTop3'
            );
            setCards(response.data);
            setLoading(false);
        };
        cargarPropiedades();
    }, []);

    return (
        <div className="row">
            {loading ? (
                <p>Cargando...</p>
            ) : (
                cards.map((item) => (
                    <div className="col-md-4" key={item.Id}>
                        <Card
                            title={item.titulo}
                            subtitle={item.subtitulo}
                            imagen={item.imagen}
                            precio={item.precio}
                            id={item.Id}
                        />
                    </div>
                ))
            )}
        </div>
    );
}
export default Cards;
