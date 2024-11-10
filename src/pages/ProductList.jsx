import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import ProductCard from '../components/ProductCard'
import Cart from '../components/Cart';


function ProductListWithCart() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const storedProducts = localStorage.getItem('products');
    const storedCart = localStorage.getItem('cart');
    
    if (storedProducts) {
      const productsData = JSON.parse(storedProducts);
      setProducts(productsData);
      setFilteredProducts(productsData);
      setLoading(false);
    } else {
      fetch('https://api.escuelajs.co/api/v1/products')
        .then((response) => response.json())
        .then((data) => {
          setProducts(data);
          setFilteredProducts(data);
          localStorage.setItem('products', JSON.stringify(data));
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
          setLoading(false);
        });
    }

    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    setFilteredProducts(products.filter(product =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    ));
  };

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="flex">
      <div className="w-3/4 p-4">
        <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
        <div className="grid grid-cols-3 gap-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
          ))}
        </div>
      </div>
      {/* Cart is now a separate component */}
      <Cart cart={cart} setCart={setCart} navigate={navigate} />
    </div>
  );
}

export default ProductListWithCart;
