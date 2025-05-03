import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Blog from './Blog';

function Blogs(props) {
    const [loading, setLoading] = useState(false);
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const cargarBlogs = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3001/api/blog');
            setBlogs(response.data);
            setLoading(false);
        };
        cargarBlogs();
    }, []);

    return (
        <div>
            <article className="entrada-blog d-flex flex-column m-4">
                {loading ? (
                    <p>Cargando...</p>
                ) : (
                    blogs.map((item) => (
                        <div
                            className="d-flex justify-content-between align-items-center blogui"
                            key={item.blogId}>
                            <Blog
                                title={item.titulo}
                                imagen={item.imagen}
                                fecha={item.creado}
                                autor={item.autor}
                                description={item.subtitulo}
                                url={item.blog_url}
                            />
                        </div>
                    ))
                )}
            </article>
        </div>
    );
}
export default Blogs;
