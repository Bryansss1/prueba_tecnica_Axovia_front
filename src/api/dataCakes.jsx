import axios from "axios";
import { useEffect,useState } from "react";

export const useApi=(url)=>{
const[data_api,setData]=useState([])
const [loading,setLoading]=useState(true)

useEffect(()=>{
 axios.get(url)
    .then(res=>setData(res.data))
    .catch(error=>console.error("404 bad request"))
    .finally(()=>{
    setLoading(false)
    console.log("finish request")
    })
},[])
    

return  {data_api,loading}

}