import React, { useState, useEffect } from 'react';

import ItemFn from './ItemFn';
import PaginationFn from './PagiantionFn';

const ItemsListFn = () => {
  const getMockData = () => {
    if (page === 1)
      return [
        { id: 0, name: 'Big Mac', quantity: 3 },
        { id: 1, name: 'Whopper', quantity: 0 },
        { id: 2, name: 'KFC Chicken Sandwitch', quantity: 0 },
        { id: 3, name: 'Baconator', quantity: 0 },
      ];
    return [
      { id: 4, name: 'French Fires', quantity: 0 },
      { id: 5, name: 'Onion Rings', quantity: 0 },
      { id: 6, name: 'Coca-Cola', quantity: 2 },
    ];
  };

  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const items = getMockData();
    setItems(items);
    console.log('useEffect');
  }, [page]);

  const handleIncrementOrDecrement = (id, op) => {
    const newItems = items.map(item => {
      if (item.id === id) {
        op === '+' ? item.quantity++ : item.quantity--;
      }
      return item;
    });
    setItems(newItems);
  };

  const handelPageChange = page => {
    setPage(page);
  };

  const handleDelete = id => {
    const newItems = items.filter(item => item.id !== id);
    setItems(newItems);
  };

  console.log('outside useEffect');
  return (
    <div>
      <h3>Shopping Cart</h3>
      {items.map(item => {
        return (
          <ItemFn
            key={item.id}
            item={item}
            handleIncrementOrDecrement={handleIncrementOrDecrement}
            handleDelete={handleDelete}
          />
        );
      })}
      <PaginationFn page={page} handelPageChange={handelPageChange} />
    </div>
  );
};

export default ItemsListFn;
