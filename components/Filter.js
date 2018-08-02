import React from 'react'

const Filter = ({applyFilter}) => {

    const onFilter = (event) => {
        applyFilter( event.target.value )    
    }

    return(
        <div>
            Find countries: <input id="find" onChange={onFilter}/>
        </div>
    )
}

export default Filter;
