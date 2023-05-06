import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setLoading } from './isLoading.slice';

export const cakeExampleSlice = createSlice({
	name: 'cakes_example',
    initialState:[],
    reducers: {
        setCakeExample:(state,action)=>{
            return action.payload
        },
    }
})

export const { setCakeExample } = cakeExampleSlice.actions;



export const getCakesExampleThunk=()=>dispatch=>{
    dispatch(setLoading(true))
    axios.get("https://backpruebatecnicacakes-production.up.railway.app/api/cakes?populate=*")
    .then(res=>dispatch(setCakeExample(res.data.data)))
    .catch(error=>console.log(error.response?.data))
    .finally(()=>dispatch(setLoading(false)))
}

export default cakeExampleSlice.reducer;