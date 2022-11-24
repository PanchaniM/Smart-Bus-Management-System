import React from "react";

export const bookingFilter = ({column}) =>{

    const{filterValue, setFilter} = column
    return(
        <span>
            search:{' '}
            <input value={filterValue || ''} onchange={(e) => setFilter(e.target.value)} />
        </span>
    )
}