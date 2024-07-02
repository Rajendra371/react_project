import React, { useState, useEffect } from 'react'
import Card from '../components/Card'
import axios from 'axios'

const Products = () => {
    const [products, setProducts] = useState([])
    const [limit, setLiit] = useState(12)
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products`)
            .then(res => {
                console.log(res.data)
                setProducts(res.data)
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <>
            <div className="container-fluid">
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    {products.slice(0, limit).map((item, i) => (
                        <Card data={item} key={i} />
                    ))}
                    <div>
                        <div className="d-flex justify-content-center my-3">
                            {limit < products.length &&
                                <button className='btn btn-warning' onClick={() => setLiit(limit + 4)}>load More...</button>
                            }
                        </div>
                    </div>

                </div>
            </div>
            {/* {products.map(item=>{
        return(
            <>
            <h1>{item.title}</h1>
            <h2>${item.price}</h2>
            </>

        )
    })} */}

        </>
    )
}

export default Products