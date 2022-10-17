import React from 'react'
import ReactPaginate from 'react-paginate';

const Paginat = ({ GetPage, pageCount }) => {
    const handlePageClick = (data) => {
        GetPage(data.selected + 1)
    }
    return (
        <ReactPaginate
            onPageChange={handlePageClick}
            previousLabel="السابق"
            nextLabel="التالي"
            breakLabel="..."
            pageRangeDisplayed={1}
            marginPagesDisplayed={1}
            pageCount={pageCount}
            containerClassName={"pagination justify-content-center p-3"}
            pageClassName={'page-item'}
            pageLinkClassName={'page-link'}
            previousClassName={'page-item'}
            previousLinkClassName={'page-link'}
            nextClassName={'page-item'}
            nextLinkClassName={'page-link'}
            breakClassName={'page-item'}
            breakLinkClassName={'page-link'}
            activeClassName={'active'}
        />
    )
}

export default Paginat;