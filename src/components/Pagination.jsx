import React from 'react';
import '../styles/Pagination.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];
  const maxPageNumbers = 5; 
  const halfMaxPageNumbers = Math.floor(maxPageNumbers / 2);

  let startPage = Math.max(currentPage - halfMaxPageNumbers, 1);
  let endPage = Math.min(currentPage + halfMaxPageNumbers, totalPages);

  if (currentPage - halfMaxPageNumbers < 1) {
    endPage = Math.min(maxPageNumbers, totalPages);
  }

  if (currentPage + halfMaxPageNumbers > totalPages) {
    startPage = Math.max(totalPages - maxPageNumbers + 1, 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lt;
      </button>
      {pageNumbers.map((number) => (
        <button
          key={number}
          className={currentPage === number ? 'active' : ''}
          onClick={() => onPageChange(number)}
        >
          {number}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
