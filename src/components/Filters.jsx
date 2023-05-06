import React, { useState,useEffect } from 'react';
import styles from "../styles/filters.module.css"
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getCakesExampleThunk } from '../store/slices/cakeExample.slice';
import { filterCombo, filterName, filterPrice, filterSize, filterTopping, getCakesThunk, setCakes } from '../store/slices/cakesData.slice';
import Autocomplete from './Autocomplete';

const Filters = () => {
const dispatch=useDispatch()
const example=useSelector(state=> state.cakeExamples)
let [nameInput,setnameInput]=useState("")
const [focus,setFocus]=useState(false)

useEffect(()=>{
 dispatch(getCakesExampleThunk())
 dispatch(getCakesThunk())
},[])

//selectores funciones
const selectPrice=(e)=>{
    dispatch(setCakes(example))
    const valor=e.target.value
    dispatch(filterPrice({valor}))
}
const selectCombo=(e)=>{
    dispatch(setCakes(example))
    const valor=e.target.value
    dispatch(filterCombo({valor}))
}
const toppingSelect=(e)=>{
    dispatch(setCakes(example))
    const valor=e.target.value
    dispatch(filterTopping({valor}))
}
const sizeSelect=(e)=>{
    dispatch(setCakes(example))
    const valor=e.target.value
    dispatch(filterSize({valor}))
}
const searchName=()=>{
    nameInput=nameInput.toLocaleLowerCase()
    if(nameInput=="")return dispatch(setCakes(example))

    const filter=example.filter(cake=>{
        if(cake.attributes.name==nameInput){
            return cake
        }
    })
    console.log(filter)
    filter.length==0?dispatch(setCakes(example)):dispatch(setCakes(filter))
}

    return (
        <article className={styles.contenedor}>
            
                <div>
                <button onClick={()=>searchName()} className={styles.search_button}>&#xf002;</button>
                <input onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)} onChange={(e)=>setnameInput(e.target.value)} value={nameInput} placeholder= "NOMBRE" type="text" />
                <Autocomplete focus={focus} Setsearch={setnameInput} searchName={nameInput}/>
                </div>

                <select onChange={selectPrice}>
                    <option onClick={()=>dispatch(getCakesThunk())} key="t" value="000-10000">&#xf688; PRECIO</option>
                    <option  key="tt" value="000-220">0-200</option>
                    <option  key="ttt" value="190-390">200-400</option>
                    <option  key="tttt" value="390-599">400-600</option>
                    <option key="ttttt" value="599-699">600-800</option>
                    <option key="tttttt" value="699-1100">800-1000</option>
                </select>
               
                <select onChange={selectCombo}>
                    <option onClick={()=>dispatch(getCakesThunk())} key="wddw">&#xf688; PRECIO COMBO</option>
                    <option key="d" value="000-500">0-500</option>
                    <option key="dd" value="500-1600">500-1600</option>
                </select>

                <select onChange={toppingSelect}>
                    <option onClick={()=>dispatch(getCakesThunk())} key="a" value="">&#xf1fd; TOPPING</option>
                    <option key="aa" value="0">Fondeau</option>
                    <option key="aaa" value="1">Betun Italiano</option>
                    <option key="aaaa" value="2">Chantilly</option>
                </select>

                <select  onChange={sizeSelect}>
                    <option onClick={()=>dispatch(getCakesThunk())} key="wddw" value="">&#xf546; TAMAÑO</option>
                    <option key="s" value="S">Pequeño</option>
                    <option key="ss" value="M">Mediana</option>
                    <option key="sss" value="L">Grande</option>
                </select>

                <select onChange={()=>{}}>
                    <option key="wddw" value="dwd">&#xf161; ORDERNAR POR</option>
                </select>

      

        </article>
    );
};

export default Filters;