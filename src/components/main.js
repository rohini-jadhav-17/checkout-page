import React from 'react';
import Product from './Products';

const Main = ({products, onAdd}) => {
    return (
        <main className='block col-2'>
            <h2>Products:</h2>
            <div className='row'>
                {products.map(prod => (
                    <Product key={prod.id} product={prod} onAdd={onAdd}></Product>
                ))}
            </div>
        </main>
    )
}

export default Main;
