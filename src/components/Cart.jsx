import React from 'react';
import CartItem from './Cart/CartItem';
import CartSummary from './Cart/CartSummary';

function Cart({ cart, setCart, navigate }) {
  const handleIncreaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecreaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.id === productId) {
            if (item.quantity > 1) {
              return { ...item, quantity: item.quantity - 1 };
            } else {
              return null;
            }
          }
          return item;
        })
        .filter((item) => item !== null)
    );
  };

  const handleRemoveAllFromCart = () => {
    setCart([]);
  };

  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="w-1/4 border-l bg-orange-50">
      <h2 className="text-2xl text-red-950 text-center font-bold mt-4 mb-4">Cart</h2>
      {cart.length === 0 ? (
        <p className='p-4 text-l text-red-900 text-center font-bold'>Your cart is empty!</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onIncrease={handleIncreaseQuantity}
                onDecrease={handleDecreaseQuantity}
              />
            ))}
          </ul>
          <CartSummary
            totalAmount={totalAmount}
            onRemoveAll={handleRemoveAllFromCart}
            onCheckout={() => navigate('/checkout', { state: { cart } })}
          />
        </>
      )}
    </div>
  );
}

export default Cart;
