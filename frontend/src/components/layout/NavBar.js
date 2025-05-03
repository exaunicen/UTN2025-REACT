import { NavLink } from 'react-router-dom';
import '../../styles/components/layout/NavBar.css';

const NavBar = (props) => {
    return (
        <nav>
            <div className="navegacion">
                <ul>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? 'activo' : undefined
                            }>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/nosotros"
                            className={({ isActive }) =>
                                isActive ? 'activo' : undefined
                            }>
                            Nosotros
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/anuncios"
                            className={({ isActive }) =>
                                isActive ? 'activo' : undefined
                            }>
                            Anuncios
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/blog"
                            className={({ isActive }) =>
                                isActive ? 'activo' : undefined
                            }>
                            Blog
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contacto"
                            className={({ isActive }) =>
                                isActive ? 'activo' : undefined
                            }>
                            Contacto
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="Http://localhost:3001"
                            className={({ isActive }) =>
                                isActive ? 'activo' : undefined
                            }>
                            Admin
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
export default NavBar;
