import '../../styles/components/layout/Blog.css';
import { Link } from 'react-router-dom';

function Blog(props) {
    return (
        <>
            <div className="imagen borde m-4">
                <img src={props.imagen} alt="Imagen de Blog" />
            </div>
            <div className="texto-entrada d-flex flex-column">
                <Link to="/blog">
                    <h4>{props.title}</h4>
                </Link>
                <p className="info-meta">
                    Escrito el: <span>{props.fecha}</span>
                </p>
                <p className="info-meta">
                    Autor: <span>{props.autor}</span>
                </p>
                <p>{props.description}</p>
                <Link to={props.url} target="_blank">
                    <button className="boton boton-verde border-0">
                        Leer Más...
                    </button>
                </Link>
            </div>
        </>
    );
}
export default Blog;
