import React, { useState, useEffect } from 'react';
import './Consejos.css';
import Footer from './Footer';

const Consejos = () => {
    const [blogs, setBlogs] = useState([]);
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [correo, setCorreo] = useState('');

    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        try {
            const response = await fetch('/api/blogs');
            const data = await response.json();
            setBlogs(data);
        } catch (error) {
            console.error('Error al obtener los blogs:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const nuevoBlog = {
            blg_tit: titulo,
            blg_des: descripcion,
            usu_mail: correo,
            blg_fecha: new Date()
        };

        try {
            const response = await fetch('/api/blogs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(nuevoBlog)
            });

            if (response.ok) {
                fetchBlogs(); // Recargar los blogs después de agregar uno nuevo
                setTitulo('');
                setDescripcion('');
                setCorreo('');
            } else {
                console.error('Error al agregar el blog:', response.statusText);
            }
        } catch (error) {
            console.error('Error al agregar el blog:', error);
        }
    };

    return (
        <div className="consejos-container">
            <div className="header">
                <h2>Blog de consejos y trucos</h2>
            </div>
            <div className="content">
                <div className="consejos-grid">
                    {blogs.length > 0 ? (
                        blogs.map((blog) => (
                            <div key={blog.blg_id} className="consejo-card">
                                <h2>{blog.blg_tit}</h2>
                                <p>{blog.usu_mail}</p>
                                <p>{blog.blg_des}</p>
                            </div>
                        ))
                    ) : (
                        <p>No hay consejos disponibles</p>
                    )}
                </div>
                <div className="input-section">
                    <h3>Cuéntanos el tuyo...</h3>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Título"
                            className="input-field"
                            value={titulo}
                            onChange={(e) => setTitulo(e.target.value)}
                            required
                        />
                        <input
                            type="email"
                            placeholder="Correo"
                            className="input-field"
                            value={correo}
                            onChange={(e) => setCorreo(e.target.value)}
                            required
                        />
                        <textarea
                            placeholder="Consejo / Truco"
                            className="textarea-field"
                            value={descripcion}
                            onChange={(e) => setDescripcion(e.target.value)}
                            required
                        ></textarea>
                        <button type="submit" className="submit-button">Compartir</button>
                    </form>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Consejos;
