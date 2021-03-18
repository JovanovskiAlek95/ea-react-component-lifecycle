import React, { useState, useEffect } from 'react';

const ItemsFn = props => {
  const [item, setItem] = useState({});

  useEffect(() => {
    const newItem = props.item;
    setItem(newItem);

    return () => {
      console.log('item has been unmounted!');
    };
  }, []);

  return (
    <div>
      <span className="badge badge-primary m-1">{item.quantity}</span>
      <button
        disabled={item.quantity <= 0}
        className="btn btn-secondary m-1"
        onClick={() => props.handleIncrementOrDecrement(item.id, '-')}
      >
        -
      </button>
      {item.name}
      <button className="btn btn-secondary m-1" onClick={() => props.handleIncrementOrDecrement(item.id, '+')}>
        +
      </button>
      <button className="btn btn-danger m-1" onClick={() => props.handleDelete(item.id)}>
        Delete
      </button>
    </div>
  );
};

export default ItemsFn;
