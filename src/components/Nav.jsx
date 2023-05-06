import React from 'react';
import logo from "../assets/images/Mi_Pasteleria.svg"
import styles from "../styles/nav.module.css"

const Nav = () => {

    return (
        <section className={styles.contenedor}>
        <div className={styles.blog} >

            <p>ENG|</p>
            <div className={styles.blog_fix}>
            <p>Blog</p>
            <p>Contacto</p>   
            </div>
             
        </div>
        <nav className={styles.nav}>

            <img src={logo} alt="logo de la pasteleria" />

            <ul>
                <li>Pasteles</li>
                <li>Helados</li>
                <li>Galletas</li>
                <li>Nosotros</li>
                <li>Sucursales</li>
            </ul>
        </nav>
        </section>
    );
};


export default Nav;