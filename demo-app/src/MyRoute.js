import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layouts from './components/Layouts'
import Homepage from './pages/Homepage'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import Register from './pages/Register'
import Show from './context/Show'
import TestCart from './redux/TestCart'
import ProductList from './redux/reducers/ProductList'

const MyRoute = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element ={<Layouts/>}>
                <Route index element={<Homepage/>}/>
                <Route path='products' element={<Products/>}/>
                <Route path='productsdetails/:productId'element={<ProductDetails/>}/>
                <Route path='cart'element={<Cart/>}/>
                <Route path='register' element={<Register/>}/>
                <Route path='context' element={<Show/>}/>
                <Route path='redux/cart' element={<TestCart/>}/> 
                <Route path='productlist' element={<ProductList/>}/>      
                </Route>
            </Routes>
        </Router>
    )
}

export default MyRoute