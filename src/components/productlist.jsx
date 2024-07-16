import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const Productlist = () => {
  const [products,setProducts] = useState([]);
  const [loading ,setLoading] = useState(true);
  const [error,seterror] = useState(null);
  useEffect(()=>{
    axios.get('http://fakestoreapi.com/products')
    .then(response=>{
      setProducts(response.data);
      setLoading(false);
    })
    .catch(error=>{
      seterror(error);
      setLoading(false);
    })
  },[]);
  if(loading) return <p>Loading......</p>;
  if(error) return <p> Error: {error.message}</p>;

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map(product=>(
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>
            <h2>{product.title}</h2>
            <p>{product.price} USD</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Productlist;