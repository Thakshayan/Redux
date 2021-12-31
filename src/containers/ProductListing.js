import React, {useEffect} from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import ProductComponent from './ProductComponent';
import {setProducts} from '../redux/actions/productActions';

const ProductListing = ()=>{
    const products = useSelector(state => state);
    const dispatch = useDispatch();

    console.log(products)

    const fetchProducts = async ()=>{
        const response = await axios
            .get('https://fakestoreapi.com/products')
            .catch(err => {
                console.log("err", err);
            })
        
        console.log(response.data)
        dispatch(setProducts(response.data));
    }

    useEffect(()=>{
        fetchProducts();
    },[])

    console.log("Product",products)
    return(
        <div className='ui grid container mt-5'>
            <ProductComponent/>
        </div>
    )
};

export default ProductListing;