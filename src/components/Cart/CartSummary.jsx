import React from 'react';
import Button from '../Button';

function CartSummary({ totalAmount, onRemoveAll, onCheckout }) {
  return (
    <div className="mt-4 text-center">
      <p className="font-semibold">Total: ${totalAmount}</p>
      <div className="mt-2 flex gap-20">
        <Button
          text="Remove All"
          onClick={onRemoveAll}
          className="m-2 bg-red-500 text-white p-2 rounded-lg"
        />
        <Button
          text="Proceed to Checkout"
          onClick={onCheckout}
          className="m-2 bg-green-700 text-white p-2 rounded-lg"
        />
      </div>
    </div>
  );
}

export default CartSummary;
