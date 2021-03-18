import React from 'react';

const PaginationFn = props => {
  return (
    <ul className="pagination justify-content-center m-2">
      <li className={`page-item ${props.page === 1 ? 'active' : ''}`} onClick={() => props.handelPageChange(1)}>
        <a href="#" className="page-link">
          1
        </a>
      </li>
      <li className={`page-item ${props.page === 2 ? 'active' : ''}`} onClick={() => props.handelPageChange(2)}>
        <a href="#" className="page-link">
          2
        </a>
      </li>
    </ul>
  );
};

export default PaginationFn;
