import React, { Component } from 'react';

class Pagination extends Component {
  render() {
    return (
      <ul className="pagination justify-content-center m-2">
        <li
          onClick={() => this.props.handlePageChange(1)}
          className={`page-item ${this.props.page === 1 ? 'active' : ''}`}
        >
          <a href="#" className="page-link">
            1
          </a>
        </li>
        <li
          onClick={() => this.props.handlePageChange(2)}
          className={`page-item ${this.props.page === 2 ? 'active' : ''}`}
        >
          <a href="#" className="page-link">
            2
          </a>
        </li>
      </ul>
    );
  }
}

export default Pagination;
