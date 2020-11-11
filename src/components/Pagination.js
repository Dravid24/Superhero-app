import React from 'react'

const Pagination = ({heroPerPage, totalPosts}) => {
    const pageNumbers =[];

    for( let i = 1; i<= Math.ceil(totalPosts/heroPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div>
            
        </div>
    )
}

export default Pagination
