import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetails = () => {
    const [product, setProducts] = useState({})
    const params = useParams()
    const id = params.productId

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(res => setProducts(res.data))
            .catch(err => console.log(err))
    }, [id])
    // add to cart functinality
    const addToCart=()=>{
        //fetch data from the local storage if exist otherwise assign emty array
        const cartItems=JSON.parse(localStorage.getItem('cart'))||[]
        const productData={
            id:product.id,
            title:product.title,
            price:product.price,
            description:product.description,
            image:product.image,
            quantity:2
        }
        const existingItem=cartItems.find(item=>item.id===product.id)
        if(existingItem){
            toast.error('product is already in the cart')
        }
        else{
            cartItems.push(productData)
            localStorage.setItem('cart',JSON.stringify(cartItems))
            toast.success(`${product.title} id added to cart`)
        }
    }
    return (
        <>
        <ToastContainer theme='colored'position='top-center'/>
            <div className="container">
                <div className="row d-flex justify-content-evenly">
                    <div className="col-md-4">
                        <img src={product.image} alt={product.title} width='400' />
                    </div>
                    <div className="col-md-6">
                        <h1>{product.title}</h1>
                        <h2>${product.price}</h2>
                        <p>Category:{product.category}</p>
                        <p>{product.description}</p>
                        <h4>{product.rating && product.rating.rate}({product.rating && product.rating.count}) </h4>
                        <button className='btn btn-warning' onClick={addToCart}> Add to Cart</button>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetails