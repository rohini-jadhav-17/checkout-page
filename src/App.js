
import Header from './components/header';
import Basket from './components/basket';
import Main from './components/main';
import data from './data';
import { useState } from 'react';

function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) =>{
    const exists = cartItems.find(x => x.id === product.id);
    if(exists){
      setCartItems(cartItems.map(x => x.id === product.id ? {...exists, qty: exists.qty+1} : x));
    } else {
      setCartItems([...cartItems, {...product, qty: 1}]);
    }
  }
  const onRemove = (product) => {
    const exists = cartItems.find(x => x.id === product.id);
    if(exists.qty === 1){
      setCartItems(cartItems.filter(x => x.id != product.id));
    }else {
      setCartItems(cartItems.map(x => x.id === product.id ? {...exists, qty: exists.qty-1} : x));
    }
  }
  return (
    <div className="App">
      <Header></Header>
      <div className='row'>
        <Main onAdd={onAdd} products={products}></Main>
        <Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}></Basket>
      </div>
    </div>
  );
}

export default App;
