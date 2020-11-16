import React from 'react'
import './Pagination.css'
const Pages = ({heroPerPage, totalPosts, paginate}) => {
    const pageNumbers =[];

    for( let i = 1; i<= Math.ceil(totalPosts / heroPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div>
            
             <div className='pagination'>
                    {pageNumbers.map(number => (
                        <div key={number} className='page'>
                        <button href='!#' onClick ={() => paginate(number)}>
                            {number}
                        </button>
                        </div>
                        
                    ))}
                
            
            </div>
        </div>
    )
}

export default Pages
