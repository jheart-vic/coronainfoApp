import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const CoronaVirusDetails = () => {
  const { state: { country} } = useLocation();
  return (
    <div>
      <Link to='/'>
        <button>Back</button>
       </Link>
        <h1>{country.name}</h1>
        <h1>{country.coordinates.latitude}</h1>
        <h1>{country.coordinates.longitude}</h1>
        <h1>{country.latest_data.deaths}</h1>
        <h1>{country.latest_data.confirmed}</h1>
        
        </div>
  )
}

export default CoronaVirusDetails