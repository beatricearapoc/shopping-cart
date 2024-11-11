import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '../components/Button';


function CheckoutPage() {
  const navigate = useNavigate();
  const { state } = useLocation();  // Get the cart items passed via state
  const cart = state?.cart || [];

  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCancel = () => {
    // Navigate back to the ProductList page, passing the cart state so it is retained
    navigate('/', { state: { cart } });
  };

  const handlePay = () => {
    alert('Payment Successful');
    // Clear the cart from localStorage and reset cart state
    localStorage.removeItem('cart');  // Remove cart from localStorage
    navigate('/', { replace: true, state: { cart: [] } });  // Reset the cart state
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-red-950">
      <div className="w-full max-w-3xl p-6 bg-orange-50 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Checkout</h1>
        
        {cart.length === 0 ? (
          <p className="text-center text-lg">Your cart is empty</p>
        ) : (
          <>
            <ul className="space-y-4">
              {cart.map((item) => (
                <li key={item.id} className="flex items-center justify-between p-4 bg-red-900 rounded-lg shadow-sm">
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded mr-4"
                  />
                  <div className="flex-1">
                    <p className="font-semibold text-lg text-white">{item.title}</p>
                    <p className="text-white">Price: ${item.price}</p>
                    <p className="text-white">Quantity: {item.quantity}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-lg text-white">
                      ${item.price * item.quantity}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6 text-center">
              <p className="font-semibold text-2xl">
                Total: ${totalAmount}
              </p>
            </div>
            <div className="mt-6 flex justify-center gap-4">
              <Button
                text="Cancel"
                onClick={handleCancel}
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
              />
              <Button
                text="Pay"
                onClick={handlePay}
                className="bg-green-700 text-white px-4 py-2 rounded-lg"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CheckoutPage;