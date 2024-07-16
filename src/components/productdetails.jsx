import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Productdetails = () => {
  const {id}= useParams();
  const [product,setProduct]= useState(null);
  const [loading ,setLoading] = useState(true);
  const [error,seterror] = useState(null);
  useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products/${id}`)
    .then(response=>
    { setProduct(response.data);
      setLoading(false);
    })
    .catch(error=>{
      seterror(error);
      setLoading(false);
    })
  },[id]);
  if(loading) return <p>Loading......</p>;
  if(error) return <p> Error: {error.message}</p>;
  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>{product.price}USD</p>
      <img src={product.image} alt={product.title} width="200"/>
    </div>
  );
};

export default Productdetails;