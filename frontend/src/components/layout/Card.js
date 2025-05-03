import '../../styles/components/layout/Card.css';
import { Link } from 'react-router-dom';

function Card(props) {
    return (
        <div className="card mt-4">
            <img
                src={props.imagen}
                alt="Casa de Lujo en el Lago"
                className="card-img-top"
            />
            <div className="card-body">
                <h4 className="card-title text-center">{props.title}</h4>
                <p className="card-text text-center">{props.subtitle}</p>
            </div>
            <p className=" text-center text-success">U$A {props.precio}</p>
            <Link
                key={props.id}
                to={`/anuncio/${props.id}`}
                className="boton boton-amarillo mb-4">
                Ver Propiedad
            </Link>
        </div>
    );
}
export default Card;
