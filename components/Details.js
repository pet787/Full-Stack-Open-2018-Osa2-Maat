import React from 'react'

const Details = ({country}) => {
    return (
        <div>
            <h1>{ country.name } { country.nativeName }</h1>
            <h4>Capital: { country.capital }</h4>
            <h4>Population: { country.population }</h4>
            <img src={country.flag} alt={"Flag of "+country.name} width="150px" height="100px" />
        </div>
    )
}

export default Details;