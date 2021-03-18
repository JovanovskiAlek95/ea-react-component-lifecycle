import React, { Component } from 'react';

import Item from './Item';
import Paginatation from './Pagination';

class ItemsList extends Component {
  constructor() {
    super();

    console.log('Constructor - Items List');

    this.state = {
      items: [],
      page: 1,
    };
  }

  getMockData = () => {
    if (this.state.page === 1)
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

  componentDidMount() {
    console.log('CDM - Items List');
    const items = this.getMockData();
    this.setState({ items });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('CDU - Items List');

    console.log({ prevProps });
    console.log({ prevState });

    if (prevState.page !== this.state.page) {
      const items = this.getMockData();
      this.setState({ items });
    }
  }

  handlePageChange = page => {
    this.setState({ page });
  };

  handleDecrement = item => {
    const items = [...this.state.items];
    const index = items.indexOf(item);
    items[index].quantity--;

    this.setState({ item });
  };

  handleIncremenet = id => {
    console.log(id);
    const items = this.state.items.map(item => {
      if (item.id === id) {
        item.quantity++;
      }
      return item;
    });
    this.setState({ items });
  };

  handleDelete = id => {
    const items = this.state.items.filter(items => items.id !== id);
    this.setState({ items });
  };

  render() {
    console.log('Render - Items List');
    return (
      <div>
        <h3>Shopping Cart</h3>
        {this.state.items.map(item => {
          return (
            <Item
              key={item.id}
              item={item}
              handleDecrement={this.handleDecrement}
              handleIncremenet={this.handleIncremenet}
              handleDelete={this.handleDelete}
            />
          );
        })}
        <Paginatation page={this.state.page} handlePageChange={this.handlePageChange} />
      </div>
    );
  }
}

export default ItemsList;
