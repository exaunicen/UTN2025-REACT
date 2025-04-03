import Blog from "./Blog";
import blogTerraza from "../../assets/img/blogTerraza.jpg";
/* import blogBordePileta from "../../assets/img/blogBordePileta.jpg";*/

const blogs = [
  {
    id: 1,
    title: "Terraza en el techo de tu casa",
    imagen: blogTerraza,
    fecha: "03/03/2025",
    autor: "Admin",
    description:
      "Consejos para construir una terraza en el techo de tu casa con los mejores materiales y ahorrando dinero",
  },
  /* {
    id: 2,
    title: "Borde de pileta con ceramicos",
    imagen: blogBordePileta,
    fecha: "04/04/2025",
    autor: "Admin",
    description:
      "Consejos para construir un borde de pileta con ceramicos y ahorrar dinero",
  },*/
];

function Blogs() {
  return (
    <div>
      <article>
        {blogs.map((blog) => (
          <div key={blog.id}>
            <Blog
              title={blog.title}
              imagen={blog.imagen}
              fecha={blog.fecha}
              autor={blog.autor}
              description={blog.description}
            />
          </div>
        ))}
      </article>
    </div>
  );
}
export default Blogs();
