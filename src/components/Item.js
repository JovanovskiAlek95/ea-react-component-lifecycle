import React, { Component } from 'react';

class Item extends Component {
  constructor(props) {
    super(props);

    console.log('Constructor - Item');
    this.state = this.props.item;
  }

  componentDidMount() {
    console.log('CDM - Item');
  }

  componentWillUnmount() {
    console.log('Item has been unmounted');
  }

  render() {
    console.log('Rende - Item');
    console.log(this.state);
    return (
      <div>
        <span className="badge badge-primary m-1">{this.state.quantity}</span>
        <button
          disabled={this.state.quantity <= 0}
          className="btn btn-secondary m-1"
          onClick={() => this.props.handleDecrement(this.state)}
        >
          -
        </button>
        {this.state.name}
        <button className="btn btn-secondary m-1" onClick={() => this.props.handleIncremenet(this.state.id)}>
          +
        </button>
        <button className="btn btn-danger m-1" onClick={() => this.props.handleDelete(this.state.id)}>
          Delete
        </button>
      </div>
    );
  }
}

export default Item;
