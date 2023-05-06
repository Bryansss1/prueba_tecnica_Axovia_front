import React from 'react';
import styles from "../styles/pastel.module.css"
import { resetData } from '../utils/resetData';
import Swal from 'sweetalert2'

const PastelCard = ({cake}) => {
    
const{name,description,price,combo_price,size,topping_type}=resetData(cake.attributes)
    

const buyB=()=>{
Swal.fire({
    title: 'Buy',
    icon: 'success',
    confirmButtonText: 'Cool'
  })
}

    return (
        <article className={styles.contenedor}>

<div className={styles.contenedor_encabezado}>
            <p className={styles.contenedor_title}>{name}</p>
            <div className={styles.contenedor_combo}>
                <p>PASTEL</p>
                <p>PAQUETE</p>
            </div>
</div>

<div className={styles.pastel_seccion}>

<img src={cake.attributes.cover.data.attributes.url} alt="pastel photo" />

<div className={styles.pastel_seccion_description}>
    <h4>{description}</h4>
    <div>
        <p> <span>Tamaño:</span> {size}</p>
        <p> <span>Topping:</span>{topping_type}</p>
    </div>
</div>

<div className={styles.pastel_seccion_prices}>
<p>15 - 17 Personas</p>
<p>{price}</p>
<small>*Solo pastel</small>
<button onClick={()=>buyB()}>SELECCIONAR</button>
</div>  

<div className={styles.pastel_seccion_prices}>
<p>Combo Fiesta</p>
<p>{combo_price}</p>
<small>Bebidas incluidas</small>
<button onClick={()=>buyB()}>SELECCIONAR</button>
</div>



</div>


        </article>
    );
};

export default PastelCard;