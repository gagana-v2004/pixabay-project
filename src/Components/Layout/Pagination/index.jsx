import React from "react";
import './index.css'

const Pagination = ({
  currentPage,
  totalPages,
  onPrev,
  onNext,
}) => {
  return (
    <div className="pagination"
      // style={{
      //   display: "flex",
      
      //   gap: "20px",
      //   margin: "20px",
      // }}
    >
      <button onClick={onPrev} disabled={currentPage === 1}>
        Previous
      </button>

      <span>
        {currentPage} / {totalPages}
      </span>

      <button onClick={onNext} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;