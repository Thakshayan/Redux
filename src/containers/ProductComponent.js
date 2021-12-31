import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductComponent = ()=>{
    const products = useSelector(state => state.allProducts.products);
    console.log(products)
    const renderList = products.map((product) => {
        const {id,title, image, price, category} = product
        return(
        <div className='mx-auto m-2'>
            <div className="card" style={{width: "18rem"}} key={id}>
            <div className='image p-3'>
                <img src={image} alt={title} className="card-img-top rounded" style={{height:'200px',maxWidth:"100%"}}/>
            </div>
            <div className="card-body">
              <h5 className="card-title">${price}</h5>
              <p className="card-text">{category}</p>
              <Link to={`product/${id}`} className="btn btn-primary">Go somewhere</Link>
            </div>
          </div>
        </div>
        )

    })
    //const {id,title} = products
    return(
        <>
            {renderList}
        </>
    )
};

export default ProductComponent;




{/* <div className='four column wide' key={id}>
<Link to={`product/${id}`}>
    <div className='ui link cards'>
        <div className='card'>
            <div className='image'>
                <img src={image} alt={title}/>
            </div>
            <div className='content'>
                <div className='header'>
                    <div className='meta price'>
                        ${price}
                    </div>
                    <div className='meta'>
                        {category}
                    </div>
                </div>
            </div>
        </div>
    </div>
</Link>
</div> */}