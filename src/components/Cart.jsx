import React from 'react';
import Button from '../components//Button';

function Cart({ cart, setCart, navigate }) {
    const handleRemoveFromCart = (productId) => {
      // Remove the product entirely from the cart by its ID
      setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    };
  
    const handleDecreaseQuantity = (productId) => {
      setCart((prevCart) => {
        return prevCart.map((item) => {
          if (item.id === productId) {
            // Decrease quantity or remove item if quantity is 1
            if (item.quantity > 1) {
              return { ...item, quantity: item.quantity - 1 }; // Only decrease quantity
            } else {
              return null; // Remove item when quantity is 1
            }
          }
          return item;
        }).filter(item => item !== null); // Remove the null value from the array
      });
    };
  
    const handleRemoveAllFromCart = () => {
      setCart([]); // Clears all items from the cart
    };
  
    const totalAmount = cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  
    return (
      <div className="w-1/4 p-4 border-l">
        <h2 className="text-2xl font-bold mb-4">Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            <ul>
              {cart.map((item) => (
                <li key={item.id} className="flex items-center mb-4">
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded mr-4"
                  />
                  <div className="flex-1">
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-gray-600">Price: ${item.price}</p>
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    {item.quantity > 1 && (
                      <Button
                        text="Remove 1"
                        onClick={() => handleDecreaseQuantity(item.id)}
                        className="bg-yellow-500 text-white px-2 py-1 rounded"
                      />
                    )}
                    <Button
                      text="Remove"
                      onClick={() => handleRemoveFromCart(item.id)}
                      className="bg-red-500 text-white px-2 py-1 rounded"
                    />
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <Button
                text="Remove All"
                onClick={handleRemoveAllFromCart}
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
              />
            </div>
            <div className="mt-4">
              <p className="font-semibold">Total: ${totalAmount}</p>
              <Button
                text="Proceed to Checkout"
                onClick={() => navigate('/checkout', { state: { cart } })}
                className="bg-green-500 text-white mt-2"
              />
            </div>
          </>
        )}
      </div>
    );
  }
  
export default Cart;
