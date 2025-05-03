import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NosotrosPage from './pages/NosotrosPage';
import AnunciosPage from './pages/AnunciosPage';
import BlogPage from './pages/BlogPage';
import ContactoPage from './pages/ContactoPage';
import HomePage from './pages/HomePage';
import Anuncio from './pages/Anuncio';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/nosotros" element={<NosotrosPage />} />
                    <Route path="/anuncios" element={<AnunciosPage />} />
                    <Route path="/anuncio/:id" element={<Anuncio />} />
                    <Route path="/blog" element={<BlogPage />} />
                    <Route path="/contacto" element={<ContactoPage />} />
                </Routes>
            </BrowserRouter>{' '}
        </div>
    );
}

export default App;
