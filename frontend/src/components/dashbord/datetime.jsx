import React from 'react'

var datetime = () =>
{
    var showdate=new Date();
    var dt=showdate.toDateString();
    var displaytime=showdate.getHours()+':'+showdate.getMinutes();
    return(
        <div>
            {dt} / {displaytime}
        </div>
    );
}

export default datetime;