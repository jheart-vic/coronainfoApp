import React from 'react';
import { Link } from 'react-router-dom';



const CoronaVirusList = ({ country}) => {
    const { code } = country;
  return (
    <div >
      
      <div>
        <h3>{country.name}</h3>
        <p>{country.population}</p>
        <Link to={`CoronaVirusDetails/${code}`} state={{country}}>
       <button>click</button>
       </Link>
      </div>
    </div>
  );
};

export default CoronaVirusList;