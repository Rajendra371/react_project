import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from './productAction/products'

const ProductList = () => {
    const dispatch=useDispatch()
    const products=useSelector(store=>store.products)
    console.log(products)

    useEffect(()=>{
        dispatch(fetchProducts())

    },[dispatch])
   
  return (
    <>
    {products.map(item=>(
        <div key = {item.id}>
            <h2>{item.title}</h2>
            <h3>${item.price}</h3>
        </div>
    ))}
    </>
  )
}
const mapStateToProps=(state)=>({
    products:state.products
})

export default connect(mapStateToProps,{fetchProducts}(ProductList))