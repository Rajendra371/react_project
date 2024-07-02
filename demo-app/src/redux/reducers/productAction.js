import axios from "axios";
import { useDispatch } from "react-redux";
 export const fetchProducts=()=>async useDispatch=>{
    try{
        const response= await axios.get('https://fakestoreapi.com/products')
        useDispatch({type:'fetch_products', payload: response.data})
    }
    catch(err){
        console.log(err)
    }
 }