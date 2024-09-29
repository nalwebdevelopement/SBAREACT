import React, { useEffect, useState } from 'react';
import './Nav.css'

function ProductSearch(category) {
  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState([]);


  // useEffect(() => {
  //   fetch('https://world.openfoodfacts.org/cgi/search.pl?search_terms=Vegetable&search_simple=1&action=process&json=1')
  //     .then(response => response.json())
  //     .then(data => setProducts(data.products))
  //     .catch(error => console.error('Error:', error));
  // }, []);

  useEffect(() => {
    fetch(`https://world.openfoodfacts.org/cgi/search.pl?search_terms=${category}&search_simple=1&action=process&json=1`)
      .then(response => response.json())
      .then(data => {
        const productsWithPrice = data.products.map(product => ({
          ...product,
          price: generateRandomPrice(1, 20), // Generate random price between $1 and $20
        }));
        setProducts(productsWithPrice);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  const generateRandomPrice = (min, max) => {
    return (Math.random() * (max - min) + min).toFixed(2); 
  };
  const addToCart = (product) => {
    setCart(prevCart => [...prevCart, product]);
    alert(`${product.product_name} has been added to your cart!`);
  };

  return (
    <div className="product" style={{ position: 'absolute' }}>
      
      {products.length > 0 ? (
        <ul className="ul-class" >
          {products.map(product => (
            <li key={product.code}>
              <br />
              <img src={product.image_url} alt={product.product_name}/>
             
              <p><strong>{product.product_name}</strong> - {product.brands} </p>
              <p>Price: {product.price}</p> 
              <button className="add-to-cart" onClick={() => addToCart(product)}>Add to Cart</button> 

            </li>
          ))}
        </ul>
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
}

export default ProductSearch;