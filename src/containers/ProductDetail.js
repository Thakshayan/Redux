import React,{useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct, removeSelectedProduct } from '../redux/actions/productActions';

const ProductDetail = ()=>{
    const {productId} = useParams();
    const product = useSelector(state => state.product);
    const {image,title, price, category, description} = product;
    console.log(product)
    const dispatch = useDispatch();

    const fetch = async ()=>{
        const response = await axios
            .get(`https://fakestoreapi.com/products/${productId}`)
            .catch(console.log)

        dispatch(selectedProduct(response.data))
    }

    useEffect(() => {
        if(productId && productId !=="") fetch()

        return ()=>{
            dispatch(removeSelectedProduct())
        }
    }, [])
    return(
        <div className='ui grid container-xl m-5 ' style={{width:'100%'}}>
            {Object.keys(product).length === 0 ? (
                <div>Loading...</div>
            ) :(
            <div className="card mb-3">
                <div className='row'>
                    <div className='col'>
                        <img className="card-img-top fluid image p-5" src={image} alt={title} style={{maxHeight:'400px'}}/>
                    </div>
                    <div className='col'>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <h2>
                                <a className='ui teal tag label'> ${price}</a>
                            </h2>
                            <h3 className='ui brown block header'>{category}</h3>
                            <p className="card-text">{description}</p>
                            <div className='ui vertical animated button' tabIndex={"0"}>
                                <div className='hidden content'>
                                    <i className='shop icon'></i>
                                </div>
                                <div className='visible content'>Add to Cart</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            )}
        </div>
    )
};

export default ProductDetail;





{/*  <div className='ui placeholder segment'>
<div className='ui two column stackable center aligned grid'>
    <div className='ui vertical divider'> AND</div>
    <div className='middle aligned row'>
        <div className='column lp'>
            <img className='ui fluid image' src={image}/>
        </div>
        <div className='column rp'>
            <h1>{title}</h1>
            <h2>
                <a className='ui teal tag label'> ${price}</a>
            </h2>
            <h3 className='ui brown block header'>{category}</h3>
            <p>{description}</p>
            <div className='ui vertical animated button' tabIndex={"0"}>
                <div className='hidden content'>
                    <i className='shop icon'></i>
                </div>
                <div className='visible content'>Add to Cart</div>
            </div>
        </div>
    </div>
</div>
</div> */}