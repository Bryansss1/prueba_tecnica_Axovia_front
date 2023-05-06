import React from 'react';
import Filters from './Filters';
import styles from "../styles/store.module.css"
import PastelCard from './PastelCard';
import { useSelector } from 'react-redux';

const Store = () => {

const cakes = useSelector(state => state.cakes)
const loading=useSelector(state=>state.loading)

    return (
        <section className={styles.contenedor}>
            <Filters/>
            {loading?<div class="lds-heart"><div></div></div>:<>{cakes?.map((cake,index)=><PastelCard key={cake.id} cake={cake}/>)}</>}
        </section>
    );

};

export default Store;