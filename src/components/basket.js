import React from 'react';

const Basket = ({cartItems, onAdd, onRemove}) => {
    const itemPrice = cartItems.reduce((a,c) => a + c.price*c.qty, 0);
    const promotion = itemPrice > 10000 ? itemPrice*0.15 : (itemPrice > 5000 ? itemPrice*0.10 : 0);
    
    const totalPrice = itemPrice -promotion;
    return (
        <aside className='block col-1'>
            <h2>Cart items:</h2>
            <div>{cartItems.length === 0 && <div>Cart Is Empty</div>}</div>
            {cartItems.map(item =>(
                <div key={item.id} className='row'>
                    <div className='col-2'>{item.name}</div>
                    <div className='col-2'>
                        <button onClick={()=> onAdd(item)} className='add'>+</button>
                        <button onClick={()=> onRemove(item)} className='remove'>-</button>
                    </div>
                    <div className='col-2'>
                        {item.qty} x ${item.price.toFixed(2)}
                    </div>
                </div>
            ))}
            {cartItems.length !== 0 && (
                <>
                    <hr></hr>
                    <div className='row'>
                        <div className='col-2'>Items Price:</div>
                        <div className='col-1'>${itemPrice.toFixed(2)}</div>
                    </div>
                    <div className='row'>
                        <div className='col-2'>Promotion:</div>
                        <div className='col-1'>${promotion}</div>
                    </div>
                    <div className='row'>
                        <div className='col-2'>Total Price:</div>
                        <div className='col-1'>${totalPrice.toFixed(2)}</div>
                    </div>
                </>
            ) }
        </aside>
    )
}

export default Basket;
