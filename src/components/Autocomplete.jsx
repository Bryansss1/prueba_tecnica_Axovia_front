import React from 'react';
import { useSelector } from 'react-redux';
import styles from "../styles/filters.module.css"

const Autocomplete = ({focus,searchName,Setsearch}) => {

    if(searchName=="" || focus==false ) return null

const cakes=useSelector(state=>state.cakeExamples)
    return (
        <div className={styles.autocomplete}>
            {cakes.map(cake=>{
                const search=searchName.toLowerCase()
                if(cake.attributes.name.includes(search)){
                    return <p onClick={()=>Setsearch(cake.attributes.name)} key={cake.id}>{cake.attributes.name}</p>   
                } 
                
            })}
        </div>
    );
};

export default Autocomplete;