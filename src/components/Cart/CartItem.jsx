import React from 'react';
import QuantityControls from './QuantityControls';

function CartItem({ item, onIncrease, onDecrease }) {
    return (
      <li className="flex border rounded-xl bg-red-900 p-2 items-center m-2">
        <img
          src={item.images[0]}
          alt={item.title}
          className="w-16 h-16 object-cover rounded mr-4"
        />
        <div className="flex gap-4">
          <div className='flex flex-col'>
            <p className="font-m font-semibold text-white">{item.title}</p>
            <p className="text-white">${item.price}</p>
          </div>
          <QuantityControls
            quantity={item.quantity}
            onIncrease={() => onIncrease(item.id)}
            onDecrease={() => onDecrease(item.id)}
          />
        </div>
      </li>
    );
  }
  
  export default CartItem;
