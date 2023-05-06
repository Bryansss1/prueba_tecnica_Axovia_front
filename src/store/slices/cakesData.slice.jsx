import { createSlice } from '@reduxjs/toolkit';
import { setLoading } from './isLoading.slice';
import axios from 'axios';




export const cakeSlice = createSlice({
	name: 'cakes_data',
    initialState:[],
    reducers: {
        setCakes:(state,action)=>{
            return action.payload
        },
        filterPrice:(state,action)=>{
            const {valor}=action.payload
            console.log(valor.slice(0,3))
            console.log(valor.slice(4))
   return state.filter(cake=>(Number(cake.attributes.price) > Number(valor.slice(0,3))&& Number(cake.attributes.price)<Number(valor.slice(4)))) 

        },
        filterCombo:(state,action)=>{
                const {valor}=action.payload
                console.log(valor.slice(0,3))
                console.log(valor.slice(4))
   return state.filter(cake=>(Number(cake.attributes.combo_price) > Number(valor.slice(0,3))&& Number(cake.attributes.combo_price)< Number(valor.slice(4))))
        },
        filterTopping:(state,action)=>{
            const {valor}=action.payload
            return state.filter(cake=>(cake.attributes.topping_type==valor))
        },
        filterSize:(state,action)=>{
            const {valor}=action.payload
            return state.filter(cake=>(cake.attributes.size==valor))
        },
        filterName:(state,action)=>{
            const {valor}=action.payload
            return state.filter(cake=>cake.attributes.name==valor)
        },
    }
})

export const {filterName,filterTopping, setCakes,filterPrice,filterCombo,filterSize } = cakeSlice.actions;

export const getCakesThunk=()=>dispatch=>{
    dispatch(setLoading(true))
    axios.get("https://backpruebatecnicacakes-production.up.railway.app/api/cakes?populate=*")
    .then(res=>dispatch(setCakes(res.data.data)))
    .catch(error=>console.log(error.response?.data))
    .finally(()=>dispatch(setLoading(false)))
}

export default cakeSlice.reducer;