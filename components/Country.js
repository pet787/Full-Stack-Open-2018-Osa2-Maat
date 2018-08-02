import React from 'react'

const Country = ({country, onClick}) => {

    const onClickCountry = (event) => {
        onClick( country )    
    }

    return (
        <div onClick={onClickCountry}>
            { country.name }
        </div>
    )
}

export default Country;
