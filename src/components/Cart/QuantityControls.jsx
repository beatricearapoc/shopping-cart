import React from 'react';
import Button from '../Button';

function QuantityControls({ quantity, onIncrease, onDecrease }) {
  return (
    <div className="flex items-center gap-1">
      <Button
        text="-"
        onClick={onDecrease}
        className="bg-red-950 text-white px-1 rounded w-8"
      />
      <span className="text-m text-white font-semibold">{quantity}</span>
      <Button
        text="+"
        onClick={onIncrease}
        className="bg-red-950 text-white px-1 rounded w-8"
      />
    </div>
  );
}

export default QuantityControls;