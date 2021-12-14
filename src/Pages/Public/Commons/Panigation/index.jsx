import React from 'react';
import ReactPaginate from 'react-paginate';

const Panigation = ({ onPageChange }) => {
    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={onPageChange}
            pageRangeDisplayed={5}
            pageCount={4}
            previousLabel="< previous"
            // renderOnZeroPageCount={null}
        />
    );
};

export default Panigation;