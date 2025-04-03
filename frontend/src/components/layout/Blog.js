import "../../styles/components/layout/Blog.css";
import { Link } from "react-router-dom";

function Blog(props) {
  return (
    <>
      <div class="imagen borde">
        <img src={props.imagen} alt="Imagen de Blog" />
      </div>
      <div class="texto-entrada">
        <Link to="/blog">
          <h4>{props.title}</h4>
        </Link>
        <p class="info-meta">
          Escrito el: <span>{props.fecha}</span> por:{""}
          <span>{props.autor}</span>
        </p>
        <p>{props.description}</p>
      </div>
    </>
  );
}
export default Blog;
