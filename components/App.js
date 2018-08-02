import React from 'react'
import axios from 'axios'
import Country from './Country'
import Filter from './Filter'
import Details from './Details'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        countryData : [],
        selectedCountry : undefined,
        filter : ""
    }
    console.log('constructor')
  }

   componentDidMount() {
    console.log('did mount')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log("promise", response.data )
        this.setState({ countryData: response.data })
      })
  }

  applyFilter = (filter) => {
    this.setState( {filter : filter.toLowerCase()} );
    this.setState( { selectedCountry: undefined } );
  }

  onClickCountry = (country) => {
    console.log( "clicked", country );
    this.setState( {selectedCountry: country} );
  } 

    render() {
        console.log('render')
    
        const filter = (country) => {
            const s = country.name.toLowerCase();
            const t = this.state.filter;
            return s.search( t ) >= 0;
        }

        const resultList = this.state.countryData
            .filter(filter);

        if (this.state.selectedCountry !== undefined ) {
            return (
                <div>
                    <Filter applyFilter = {this.applyFilter}/>
                    <Details country={this.state.selectedCountry}/>
                </div>
            )
        }
        else if (resultList.length === 1 ) {
            return (
                <div>
                    <Filter applyFilter = {this.applyFilter}/>
                    <Details country={resultList[0]}/>
                </div>
            )
        }
        else if (resultList.length > 10 ) {
            return (
                <div>
                    <Filter applyFilter = {this.applyFilter}/>
                    Too many macthes, refine your filter
                </div>
            )
        }   
        else {
            return (
                <div>
                    <Filter applyFilter = {this.applyFilter}/>
                    {   
                        resultList
                            .map( country => 
                                <Country key = {country.name} 
                                country = {country} 
                                onClick = {this.onClickCountry}/>
                            )
                    }
                </div>
            )
        } 
    }
}

export default App