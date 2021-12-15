import React from "react";
import ReactPaginate from "react-paginate";
import "./index.css";

const Panigation = ({ onChange,pageCount,currentPage }) => {
  return (
    <ReactPaginate
      onPageChange={onChange}
      pageCount={pageCount}
      nextLabel=">"
      previousLabel="<"
      pageClassName="page-item"
      breakLabel="..."
      containerClassName="pagination"
      activeClassName="active"
      initialPage={currentPage}
    />
  );
};

export default Panigation;
